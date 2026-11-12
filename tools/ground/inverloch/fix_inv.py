"""Inverloch: tidy the town's street data by inference (no imagery). town.json in, town.json out.
- streets and paths that stop 0.3 to 6 m short of another street or path are carried on to meet it (a path to the
  kerb, a street to the other street's centre line);
- trees whose trunks stand in a house or on a path, service lane or driveway go;
- a cabin standing on a road goes; of two houses that overlap, the smaller goes.
"""
import sys, json, base64, math
import numpy as np
from PIL import Image, ImageDraw
sys.path.insert(0, __import__('os').path.dirname(__file__))
from gaps import gaps, R, pts
from vec import t, SX, SZ, W, H, P, G, raster, i16

stats = {}
# 1. joins
done = set()
for g in gaps:
    key = (g['i'], g['end'])
    i, j = g['i'], g['j']
    if key in done or R[i][2] & 2 or np.hypot(*(pts[i][0] - pts[i][-1])) < 0.5:
        continue  # roundabouts and closed loops are already whole
    q = np.array([g['x'], g['z']]); c = np.array([g['cx'], g['cz']])
    if R[i][0] >= 5 and R[j][0] <= 4:   # a path: to the kerb of the street
        v = q - c; L = np.hypot(*v)
        tgt = c + v / L * max(0.0, R[j][3] / 20 - 0.2) if L > 0 else c
    else:
        tgt = c
    flat = R[i][5]
    new = [int(round(tgt[0] * 10)), int(round(tgt[1] * 10))]
    if g['end'] == 0:
        R[i][5] = new + flat
    else:
        R[i][5] = flat + new
    done.add(key)
stats['ends joined'] = len(done)

# 2. trees
def obb(cx, cz, w, d, th):
    c, s = math.cos(th), math.sin(th)
    return [(cx + c * dx - s * dz, cz + s * dx + c * dz) for dx, dz in ((-w / 2, -d / 2), (w / 2, -d / 2), (w / 2, d / 2), (-w / 2, d / 2))]
Hraw = np.frombuffer(base64.b64decode(t['houses']), dtype='<i2').reshape(-1, 10).copy()
hl = Image.new('I', (W, H)); dh = ImageDraw.Draw(hl)
area = []
for k, r in enumerate(Hraw.astype(float)):
    poly = obb(r[0] / 4, r[1] / 4, r[2] / 10, r[3] / 10, math.radians(r[4] / 10))
    dh.polygon([P(*q) for q in poly], fill=k + 1); area.append(r[2] * r[3])
hl = np.array(hl)
# overlapping houses: draw again in reverse to find who is under whom
hl2 = Image.new('I', (W, H)); dh2 = ImageDraw.Draw(hl2)
for k in range(len(Hraw) - 1, -1, -1):
    r = Hraw[k].astype(float); dh2.polygon([P(*q) for q in obb(r[0] / 4, r[1] / 4, r[2] / 10, r[3] / 10, math.radians(r[4] / 10))], fill=k + 1)
hl2 = np.array(hl2)
clash = (hl != hl2) & (hl > 0) & (hl2 > 0)
from collections import Counter
pc = Counter(zip(hl[clash].tolist(), hl2[clash].tolist()))
print('house overlaps (m2 by pair):', sorted(pc.values(), reverse=True))
pairs = {p for p, n in pc.items() if n >= 6}  # only a real clash, not two houses touching
drop_h = set()
for a, b in pairs:
    drop_h.add((a if area[a - 1] < area[b - 1] else b) - 1)
keep_h = np.array([k not in drop_h for k in range(len(Hraw))])
stats['houses overlapping, smaller removed'] = int((~keep_h).sum())
t['houses'] = base64.b64encode(Hraw[keep_h].astype('<i2').tobytes()).decode()

paths = raster(lambda r: r[0] >= 4)  # service lanes, driveways and paths
T = np.frombuffer(base64.b64decode(t['trees']), dtype='<i2').reshape(-1, 3).copy()
tx = ((T[:, 0] / 4 + SX / 2) / G).astype(int); tz = ((T[:, 1] / 4 + SZ / 2) / G).astype(int)
ok = (tx >= 0) & (tx < W) & (tz >= 0) & (tz < H)
bad = np.zeros(len(T), bool)
bad[ok] = (hl[tz[ok], tx[ok]] > 0) | paths[tz[ok], tx[ok]]
stats['trees removed'] = int(bad.sum())
t['trees'] = base64.b64encode(T[~bad].astype('<i2').tobytes()).decode()

# cabins on roads
streets = raster(lambda r: r[0] <= 4)
CAB = {0: (8.0, 4.2), 1: (6.4, 4.8), 2: (3.6, 3.6), 3: (10.5, 7.5)}
Craw = np.frombuffer(base64.b64decode(t['cabins']), dtype='<i2').reshape(-1, 5).copy()
keep_c = []
for r in Craw.astype(float):
    w, d = CAB[int(r[3])]
    poly = [P(*q) for q in obb(r[0] / 4, r[1] / 4, w, d, math.radians(r[2] / 10))]
    xs = [q[0] for q in poly]; ys = [q[1] for q in poly]
    x0, x1, y0, y1 = int(min(xs)) - 1, int(max(xs)) + 2, int(min(ys)) - 1, int(max(ys)) + 2
    sm = Image.new('1', (x1 - x0, y1 - y0)); ImageDraw.Draw(sm).polygon([(a - x0, b - y0) for a, b in poly], fill=1)
    keep_c.append((streets[y0:y1, x0:x1] & np.array(sm)).sum() < 3)
keep_c = np.array(keep_c)
stats['cabins on roads removed'] = int((~keep_c).sum())
t['cabins'] = base64.b64encode(Craw[keep_c].astype('<i2').tobytes()).decode()
t['counts'].update(houses=int(keep_h.sum()), cabins=int(keep_c.sum()), trees=int((~bad).sum()))
json.dump(t, open(sys.argv[1], 'w'), separators=(',', ':'))
print(json.dumps(stats))
