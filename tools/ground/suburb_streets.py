"""Moorooka beyond the designed square: how wide each street's carriageway is, and which sides have a footpath.
Inference only: street lines (town.json) and property boundaries (the Queensland cadastre). No imagery.

  python3 suburb_streets.py <town.json> <parcels.geojson>        (rewrites the roads' widths and town.json footpaths)

Widths. Outside the designed square every local street was drawn at the 7.2 m default and every connector at 6 m.
The designed square's carriageways were measured, and there a local street in a 20 m road reserve (property line to
property line) is about 10.4 m wide. So each street of those defaults gets 52% of its own reserve, measured every
8 m along it, between 7.2 m and 10.6 m (11.5 m for connectors). A reserve that cannot be measured (no property on a
side within 25 m) keeps the default. Highways and secondary roads keep theirs (many are one side of a divided road).

Footpaths, for streets with none worked out yet (the designed square's own stay as they are):
- not on a side that faces another carriageway before any property (the median of a divided road);
- on both sides of highways, secondary roads and connectors;
- on one side of a local street: the side with the wider verge, or with more properties along it if the same;
- centred 2.3 m from the kerb, or less where the verge is narrow (never nearer than 1.3 m): none on a verge under 2 m.
"""
import json, math, sys
import numpy as np
from PIL import Image, ImageDraw

TOWN, PARCELS = sys.argv[1], sys.argv[2]
t = json.load(open(TOWN))
meta = t['meta']; SX, SZ = meta['size']; o, mpd = meta['origin'], meta['metresPerDegree']
TX, TZ = SX / 16, SZ / 16
PILOT = (-SX / 2 + 4 * TX, -SZ / 2 + 4 * TZ, -SX / 2 + 8 * TX, -SZ / 2 + 8 * TZ)   # the designed square: x0, z0, x1, z1
G = 0.5
W, H = int(SX / G) + 1, int(SZ / G) + 1
gp = lambda x, z: ((x + SX / 2) / G, (z + SZ / 2) / G)
ll = lambda lo, la: gp((lo - o[0]) * mpd[0], -(la - o[1]) * mpd[1])


def in_pilot(x, z):
    return PILOT[0] < x < PILOT[2] and PILOT[1] < z < PILOT[3]


# property boundaries, numbered
lab = Image.new('I', (W, H)); d = ImageDraw.Draw(lab); n = 0
for f in json.load(open(PARCELS))['features']:
    if f['properties'].get('parcel_typ') != 'Lot Type Parcel':
        continue
    n += 1
    g = f['geometry']; polys = g['coordinates'] if g['type'] == 'MultiPolygon' else [g['coordinates']]
    for Q in polys:
        d.polygon([ll(*p) for p in Q[0]], fill=n)
        for h in Q[1:]:
            d.polygon([ll(*p) for p in h], fill=0)
lot = np.array(lab)

roads = []
for i, r in enumerate(t['roads']):
    p = np.array(r[5], float).reshape(-1, 2) / 10
    if r[0] <= 3 and not r[2] & 1 and len(p) >= 2:
        roads.append((i, r, p))
# every carriageway, numbered, to tell a median from a verge
cw = Image.new('I', (W, H)); dc = ImageDraw.Draw(cw)
for i, r, p in roads:
    dc.line([gp(*a) for a in p], fill=i + 1, width=max(1, int(round(r[3] / 10 / G))))
cw = np.array(cw)


def look(c, nrm, own):
    """From a point on the centre line, out along nrm: metres to the first property, or None if another carriageway
    (a median) or nothing comes first within 25 m; and which property it is."""
    for m in np.arange(1.0, 25.0, 0.5):
        a, b = gp(*(c + nrm * m))
        if not (0 <= a < W and 0 <= b < H):
            return None, 0
        L = int(lot[int(b), int(a)]); k = int(cw[int(b), int(a)])
        if L:
            return m, L
        if k and k != own + 1:
            return None, 0
    return None, 0


fp = t.setdefault('footpaths', {})
log = dict(widened=0, kept=0, footpaths_both=0, footpaths_one=0, footpaths_none=0, medians=0)
widths = []
for i, r, p in roads:
    mid = p[len(p) // 2]
    if in_pilot(*mid):
        continue
    seg = np.diff(p, axis=0); L = np.hypot(*seg.T); cum = np.concatenate([[0], np.cumsum(L)])
    total = cum[-1]
    if total < 6:
        continue
    samples = []
    for s in (np.arange(4, total - 4, 8) if total > 16 else [total / 2]):
        k = int(np.clip(np.searchsorted(cum, s) - 1, 0, len(seg) - 1))
        if L[k] == 0:
            continue
        tdir = seg[k] / L[k]; c = p[k] + tdir * (s - cum[k])
        nrm = np.array([-tdir[1], tdir[0]])          # the right-hand side, going along the street (+z is south)
        samples.append((look(c, nrm, i), look(c, -nrm, i)))
    if not samples:
        continue
    right = [a[0] for a, b in samples]; left = [b[0] for a, b in samples]
    both = [a + b for a, b in zip(right, left) if a is not None and b is not None]
    cls, w = r[0], r[3] / 10
    if (cls == 3 and abs(w - 7.2) < 0.05) or (cls == 2 and abs(w - 6.0) < 0.05):
        if len(both) >= max(1, len(samples) // 3):
            R = float(np.median(both))
            nw = float(np.clip(0.52 * R, 7.2 if cls == 3 else 6.0, 10.6 if cls == 3 else 11.5)) if R >= 13 else w
            if abs(nw - w) > 0.05:
                r[3] = int(round(nw * 10)); w = nw; log['widened'] += 1; widths.append(nw)
            else:
                log['kept'] += 1
    if str(i) in fp:
        continue
    # footpaths: a side's verge is the reserve on that side less half the carriageway
    def side(vals):
        got = [v for v in vals if v is not None]
        if len(got) < max(1, 0.4 * len(vals)):
            return None   # mostly facing another carriageway or nothing: no footpath here
        return float(np.median(got)) - w / 2
    vr, vl = side(right), side(left)
    log['medians'] += (vr is None) + (vl is None)

    def off(v):
        if v is None or v < 2.0:
            return 0
        return int(round(max(1.3, min(2.3, v - 0.9)) * 10))
    a, b = off(vr), off(vl)
    if cls == 3 and a and b:
        # one side: the wider verge, or the side with more properties along it
        if abs(vr - vl) > 0.6:
            keep_right = vr > vl
        else:
            nr = len({x[1] for x, _ in samples if x[1]}); nl = len({y[1] for _, y in samples if y[1]})
            keep_right = nr >= nl
        a, b = (a, 0) if keep_right else (0, b)
    fp[str(i)] = [a, b]
    log['footpaths_both' if a and b else 'footpaths_one' if a or b else 'footpaths_none'] += 1

json.dump(t, open(TOWN, 'w'), separators=(',', ':'))
if widths:
    log['new widths m (10/50/90%)'] = np.percentile(widths, [10, 50, 90]).round(1).tolist()
print(json.dumps(log, indent=1))
