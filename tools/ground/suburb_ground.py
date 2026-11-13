"""Moorooka's ground plan beyond the designed square, designed at 0.2 m from the plan alone: street lines and widths,
footpaths (town.json, after suburb_streets.py), property boundaries (the Queensland cadastre), buildings, trees and
sports fields. No imagery is used for the ground. Pools, which the plan cannot know, come from pools.json
(suburb_pools.py, read off the aerial photograph) and get a concrete surround here.

  python3 suburb_ground.py <town.json> <parcels.geojson> <surface dir> <work dir> [--pools pools.json]
                           [--only R,C ...] [--write]

The suburb is done in 4 x 4 squares of blocks (825 m), each with 64 m of its neighbours around it so nothing changes at
a seam. The designed square (blocks 4-7, 4-7) is left as it is. Writes each block as surface/<row>_<col>.webp (1024 px,
the same encoding as design.py: 128 + 80 x signed distance in metres, per kind) and lists it in surface/index.json.

How the ground is laid, in order:
1. Every carriageway at its width, corners where streets meet rounded (5 m) on street land. Lanes (restricted roads)
   asphalt, walkways concrete (1.8 m), tracks bare earth (2.5 m), the railway's ballast bare earth.
2. Street land beside a carriageway is lawn verge, with the footpath (1.3 m concrete) at its distance from the kerb on the
   sides that have one (town.json footpaths), carried round corners to meet the cross street's. In front of a shop or
   works built to its boundary, the verge is paved to the property line.
3. Each property, by what stands on it:
   - a house: lawn, one 3 m concrete driveway square to the street from the kerb (a crossover across the verge), down
     the wider side of the house if a car fits there (3.3 m), 6 m past its front (Queenslanders park under or beside the
     house) or on to a garage or shed behind; with no room beside it, to the front of the house (a garage in it). Most
     houses also get a path from the street to the front, a garden bed along the front wall and a patio out the back.
     Which ones is decided by the property's own number, so it is the same every time;
   - units or townhouses (two or more buildings of a size): one shared 3.5 m driveway down the side with more room;
   - a shop, works or other large building: asphalt round it (yards and car parks, to 25 m), lawn beyond, with an
     entry across the verge;
   - nothing built (parks, reserves, vacant land): lawn; where trees stand thick, the ground under them is bush floor;
   - sports fields are lawn whatever stands near them.
4. Pools: a 0.8 m concrete surround (the water itself is drawn by the model).
"""
import base64, json, math, os, sys
from collections import defaultdict
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage as ndi
from shapely.geometry import Polygon

args = sys.argv[1:]
TOWN, PARCELS, SURF, WORK = args[:4]
WRITE = '--write' in args
POOLS = args[args.index('--pools') + 1] if '--pools' in args else None
ONLY = [tuple(map(int, a.split(','))) for a in args[args.index('--only') + 1:] if ',' in a] if '--only' in args else None
os.makedirs(WORK, exist_ok=True)

t = json.load(open(TOWN))
meta = t['meta']; SX, SZ = meta['size']; o, mpd = meta['origin'], meta['metresPerDegree']
TX, TZ = SX / 16, SZ / 16
RES = 1024
MX, MZ = TX / RES, TZ / RES              # metres per pixel across and down
MPP = (MX + MZ) / 2
A = MX * MZ
MARGIN = 320                             # pixels of neighbouring ground round each square (64 m)
N = 4 * RES + 2 * MARGIN
OTHER, LAWN, ASPH, CONC = 0, 1, 2, 3
PILOT = range(4, 8)


def h01(*k):
    """A fixed fraction 0..1 from a few numbers: the same property makes the same choices every time."""
    v = 2166136261
    for x in k:
        v = ((v ^ (int(x) & 0xffffffff)) * 16777619) & 0xffffffff
    v ^= v >> 13; v = (v * 1274126177) & 0xffffffff; v ^= v >> 16
    return v / 4294967296


# ---------------------------------------------------------------- the plan, once
lots = []        # (rings in model metres, tenure)
for f in json.load(open(PARCELS))['features']:
    pr = f['properties']
    if pr.get('parcel_typ') != 'Lot Type Parcel':
        continue
    g = f['geometry']; polys = g['coordinates'] if g['type'] == 'MultiPolygon' else [g['coordinates']]
    rings = [[np.array([((lo - o[0]) * mpd[0], -(la - o[1]) * mpd[1]) for lo, la in R]) for R in P] for P in polys]
    lots.append((rings, pr.get('tenure')))
lot_bb = np.array([[min(R[0][:, 0].min() for R in rr), min(R[0][:, 1].min() for R in rr),
                    max(R[0][:, 0].max() for R in rr), max(R[0][:, 1].max() for R in rr)] for rr, _ in lots])

bb = np.frombuffer(base64.b64decode(t['buildings']), np.int16).astype(np.int64)
blds = []        # (outline, kind, area)
i = 0
while i < len(bb):
    k = int(bb[i]); fl = int(bb[i + 6]); p = bb[i + 7:i + 7 + 2 * k].reshape(-1, 2) / 10; i += 7 + 2 * k
    if k < 3:
        continue
    x, z = p[:, 0], p[:, 1]
    area = abs(float(np.dot(x, np.roll(z, 1)) - np.dot(z, np.roll(x, 1)))) / 2
    blds.append((p, fl & 3, area))
bld_bb = np.array([[b[0][:, 0].min(), b[0][:, 1].min(), b[0][:, 0].max(), b[0][:, 1].max()] for b in blds])

roads = []
for idx, r in enumerate(t['roads']):
    p = np.array(r[5], float).reshape(-1, 2) / 10
    if len(p) >= 2:
        roads.append(dict(i=idx, cls=r[0], flags=r[2], w=r[3] / 10, p=p))
car_roads = [r for r in roads if r['cls'] <= 3 and not r['flags'] & 1]
by_i = {r['i']: r for r in roads}
fp = t.get('footpaths', {})
trees = np.frombuffer(base64.b64decode(t['trees']), np.int16).reshape(-1, 3)[:, :2] / 4 if isinstance(t['trees'], str) else np.array(t['trees']).reshape(-1, 3)[:, :2] / 4
rails = [np.array(f, float).reshape(-1, 2) / 10 for _, f in t.get('rails', [])]
pitches = [np.array(pc['p'], float).reshape(-1, 2) / 10 for pc in t.get('pitches', [])]
pools = json.load(open(POOLS)) if POOLS else []

# which property each building stands on: by its centre, on a 0.5 m map of the properties
G = 0.5
GW, GH = int(SX / G) + 1, int(SZ / G) + 1
gim = Image.new('I', (GW, GH)); gd = ImageDraw.Draw(gim)
for li, (rings, _) in enumerate(lots):
    for P in rings:
        gd.polygon([((x + SX / 2) / G, (z + SZ / 2) / G) for x, z in P[0]], fill=li + 1)
        for h in P[1:]:
            gd.polygon([((x + SX / 2) / G, (z + SZ / 2) / G) for x, z in h], fill=0)
glot = np.array(gim)


def lot_at(x, z):
    a, b = int((x + SX / 2) / G), int((z + SZ / 2) / G)
    return int(glot[b, a]) - 1 if 0 <= a < GW and 0 <= b < GH else -1


on_lot = defaultdict(list)
for bi, (p, kind, area) in enumerate(blds):
    c = p.mean(0)
    li = lot_at(*c)
    if li >= 0:
        on_lot[li].append(bi)
lot_class = {}
for li in range(len(lots)):
    bs = on_lot.get(li, [])
    big = [b for b in bs if blds[b][1] == 2 or blds[b][2] > 450]
    homes = sorted([b for b in bs if blds[b][1] == 0 and blds[b][2] >= 40], key=lambda b: -blds[b][2])
    if big:
        lot_class[li] = 'large'
    elif not homes:
        lot_class[li] = 'open'
    else:
        main = blds[homes[0]][2]
        lot_class[li] = 'units' if sum(blds[b][2] > 0.6 * main for b in homes) >= 2 and main < 300 else 'house'
log = dict(classes={k: sum(1 for v in lot_class.values() if v == k) for k in ('house', 'units', 'large', 'open')})
print(json.dumps(log), flush=True)


def design(R, C):
    st = defaultdict(int)
    frames = []
    X0 = -SX / 2 + C * 4 * TX - MARGIN * MX
    Z0 = -SZ / 2 + R * 4 * TZ - MARGIN * MZ
    X1, Z1 = X0 + N * MX, Z0 + N * MZ

    def px(x, z):
        return ((x - X0) / MX, (z - Z0) / MZ)

    def pts(P):
        return [px(x, z) for x, z in P]

    def touches(b):
        return not (b[2] < X0 or b[0] > X1 or b[3] < Z0 or b[1] > Z1)

    # properties, numbered by their place in `lots` (+1)
    im = Image.new('I', (N, N)); d = ImageDraw.Draw(im)
    here = [li for li in range(len(lots)) if touches(lot_bb[li])]
    for li in here:
        for P in lots[li][0]:
            d.polygon(pts(P[0]), fill=li + 1)
            for h in P[1:]:
                d.polygon(pts(h), fill=0)
    lotm = np.array(im)
    street = lotm == 0
    # buildings, numbered
    im = Image.new('I', (N, N)); d = ImageDraw.Draw(im)
    for bi in np.flatnonzero((bld_bb[:, 2] >= X0) & (bld_bb[:, 0] <= X1) & (bld_bb[:, 3] >= Z0) & (bld_bb[:, 1] <= Z1)):
        d.polygon(pts(blds[bi][0]), fill=int(bi) + 1)
    bid = np.array(im)
    roof = bid > 0
    # carriageways, and each street's centre line (to tell which street a verge belongs to)
    cw = Image.new('1', (N, N)); dc = ImageDraw.Draw(cw)
    cl = Image.new('I', (N, N)); dcl = ImageDraw.Draw(cl)
    lane = Image.new('L', (N, N)); dl = ImageDraw.Draw(lane)
    for r in roads:
        q = pts(r['p'])
        xs = [a for a, b in q]; ys = [b for a, b in q]
        if max(xs) < -50 or min(xs) > N + 50 or max(ys) < -50 or min(ys) > N + 50 or r['flags'] & 1:
            continue
        if r['cls'] <= 3:
            wp = r['w'] / MPP
            dc.line(q, fill=1, width=max(1, int(round(wp))))
            for a in q:
                dc.ellipse([a[0] - wp / 2, a[1] - wp / 2, a[0] + wp / 2, a[1] + wp / 2], fill=1)
            dcl.line(q, fill=r['i'] + 1, width=1)
        else:
            kind_, w = {4: (ASPH, max(r['w'], 3.5)), 5: (OTHER + 10, 2.5), 7: (CONC, 1.8)}.get(r['cls'], (CONC, 1.8))
            dl.line(q, fill=kind_ + 1, width=max(1, int(round(w / MPP))))
    Craw = np.array(cw); cl = np.array(cl); lane = np.array(lane)

    K = np.full((N, N), LAWN, np.uint8)
    # rounded corners where streets meet, on street land only
    d1 = ndi.distance_transform_edt(~Craw) * MPP
    closed = ndi.distance_transform_edt(d1 <= 5.0) * MPP > 5.0
    Cf = Craw | (closed & street & ~roof)
    del d1, closed
    dk = ndi.distance_transform_edt(~Cf) * MPP
    K[Cf] = ASPH

    # ---- verges and footpaths
    V = street & ~Cf & ~roof & (dk <= 15)
    _, (iy, ix) = ndi.distance_transform_edt(cl == 0, return_indices=True)
    rid = cl[iy, ix] - 1
    del iy, ix
    vy, vx = np.nonzero(V)
    vr = rid[vy, vx]
    side = np.zeros(len(vy), np.int8)
    order = np.argsort(vr, kind='stable'); vrs = vr[order]
    for r in car_roads:
        a0, a1 = np.searchsorted(vrs, [r['i'], r['i'] + 1])
        if a1 <= a0:
            continue
        sel = order[a0:a1]
        Pp = np.array(pts(r['p']))
        seg = np.diff(Pp, axis=0); L = np.hypot(*seg.T)
        Q = np.stack([vx[sel], vy[sel]], 1).astype(np.float64)
        best = np.full(len(sel), np.inf); bside = np.zeros(len(sel), np.int8)
        for kk in range(len(seg)):
            if L[kk] == 0:
                continue
            u = np.clip(((Q - Pp[kk]) @ seg[kk]) / L[kk] ** 2, 0, 1)
            cc = Pp[kk] + u[:, None] * seg[kk]
            dd = np.hypot(*(Q - cc).T)
            m = dd < best
            best[m] = dd[m]
            bside[m] = np.sign(seg[kk][0] * (Q[m, 1] - Pp[kk][1]) - seg[kk][1] * (Q[m, 0] - Pp[kk][0]))
        side[sel] = bside
    keys = vr.astype(np.int64) * 2 + (side > 0)
    uk, inv = np.unique(keys, return_inverse=True)
    off_k = np.zeros(len(uk), np.float32)
    for j, key in enumerate(uk):
        ri, right = int(key // 2), bool(key % 2)
        f = fp.get(str(ri))
        if f is not None:
            v = f[0 if right else 1]
            off_k[j] = v / 10 if v > 0 else 0.0
        elif ri in by_i and by_i[ri]['cls'] <= 2:
            off_k[j] = 2.3
    path_off = off_k[inv.ravel()]
    dkv = dk[vy, vx]
    band_own = (path_off > 0) & (np.abs(dkv - path_off) <= 0.65)
    band_any = np.abs(dkv - np.where(path_off > 0, path_off, 2.3)) <= 0.65
    node_w = defaultdict(list)
    for r in car_roads:
        for e in (r['p'][0], r['p'][-1]):
            node_w[tuple(np.round(e, 0))].append(r['w'])
    nd = Image.new('1', (N, N)); dn = ImageDraw.Draw(nd)
    for (x, z), ws in node_w.items():
        if len(ws) < 2:
            continue
        a, b_ = px(x, z); rr_ = (max(ws) / 2 + 5.0 + 3) / MPP
        dn.ellipse([a - rr_, b_ - rr_, a + rr_, b_ + rr_], fill=1)
    near_node = np.array(nd)
    Bown = np.zeros((N, N), bool); Bown[vy[band_own], vx[band_own]] = True
    Bany = np.zeros((N, N), bool); Bany[vy[band_any], vx[band_any]] = True
    allowed = Bany & near_node
    Pth = Bown.copy()
    for _ in range(60):  # up to 12 m round a corner
        grow = ndi.binary_dilation(Pth) & allowed & ~Pth
        if not grow.any():
            break
        Pth |= grow
    del Bown, Bany, allowed, near_node, band_own, band_any

    # shopfronts: where a large building stands within 1.5 m of the street, its verge is paved to the property line
    big_lot = np.zeros(len(lots) + 1, bool)
    for li in here:
        big_lot[li + 1] = lot_class[li] == 'large'
    d_street = ndi.distance_transform_edt(~street) * MPP
    shop = roof & big_lot[lotm] & (d_street <= 1.5)
    if shop.any():
        ds = ndi.distance_transform_edt(~shop) * MPP
        _, (ly, lx) = ndi.distance_transform_edt(street, return_indices=True)   # nearest property pixel
        q_shop = ds[ly, lx] <= 2.0
        paved = V & q_shop & big_lot[lotm[ly, lx]]
        K[paved] = CONC
        st['shopfront m2'] = int(paved.sum() * A)
        del ds, ly, lx, q_shop, paved
    K[Pth] = CONC
    st['footpath m2'] = int(Pth.sum() * A)

    # ---- properties
    near_st = ndi.binary_dilation(V, iterations=int(round(0.8 / MPP)))
    tim = Image.new('L', (N, N)); dt_ = ImageDraw.Draw(tim)
    inwin = (trees[:, 0] > X0) & (trees[:, 0] < X1) & (trees[:, 1] > Z0) & (trees[:, 1] < Z1)
    for x, z in trees[inwin]:
        a, b_ = px(x, z); rr_ = 3.2 / MPP
        dt_.ellipse([a - rr_, b_ - rr_, a + rr_, b_ + rr_], fill=1)
    under = np.array(tim) > 0
    # how thick the trees stand: five or more in a 15 m square round each 5 m cell
    tg = np.zeros((N // 25 + 1, N // 25 + 1), np.float32)
    for x, z in trees[inwin]:
        a, b_ = px(x, z); tg[int(b_ // 25), int(a // 25)] += 1
    thick = np.kron(ndi.uniform_filter(tg, 3, mode='constant') * 9 >= 5, np.ones((25, 25), bool))[:N, :N]
    del tg, tim

    def large_yard(own, area, box, y0, x0):
        """Sealed ground round a shop, works, hall or school: (asphalt, concrete). The whole property is asphalt if it is
        small or mostly built on; else each building's rectangle widened by 12 m. On grounds over 8,000 m2 (schools,
        clubs) the rest is lawn: 6 m of asphalt round the big buildings, a 2 m concrete apron round the small ones."""
        built = sum(blds[b][2] for b in own)
        h_, w_ = box[0].stop - box[0].start, box[1].stop - box[1].start
        if area <= 4000 or built >= 0.3 * area:
            return np.ones((h_, w_), bool), np.zeros((h_, w_), bool)
        out = []
        for small in (False, True):
            im_ = Image.new('1', (w_, h_)); d_ = ImageDraw.Draw(im_)
            for b in own:
                if blds[b][2] < 30 or (area > 8000 and (blds[b][2] < 600) != small) or (area <= 8000 and small):
                    continue
                grow = 2.0 if small else 6.0 if area > 8000 else 12.0
                rect = Polygon(blds[b][0]).minimum_rotated_rectangle.buffer(grow, join_style=2)
                d_.polygon([((x - X0) / MX - x0, (z - Z0) / MZ - y0) for x, z in rect.exterior.coords], fill=1)
            out.append(np.array(im_))
        return out[0], out[1] & ~out[0]

    objs = ndi.find_objects(lotm)
    for li1, sl in enumerate(objs, 1):
        if sl is None:
            continue
        li = li1 - 1
        cls_ = lot_class[li]
        m = int(14 / MPP)
        y0, y1 = max(0, sl[0].start - m), min(N, sl[0].stop + m)
        x0, x1 = max(0, sl[1].start - m), min(N, sl[1].stop + m)
        box = (slice(y0, y1), slice(x0, x1))
        mine = lotm[box] == li1
        area = mine.sum() * A
        if area < 30:
            continue
        k = K[box]
        if cls_ == 'open':
            bush = mine & under[box] & thick[box]
            k[bush] = OTHER
            st['bush m2'] += int(bush.sum() * A)
            continue
        bl = bid[box]
        own = [b for b in on_lot.get(li, [])]
        front = mine & near_st[box]
        if front.sum() * A / 0.8 < 3.0:
            st['no frontage'] += 1
            if cls_ == 'large':
                ya, yc = large_yard(own, area, box, y0, x0)
                k[mine & ~roof[box] & yc] = CONC
                k[mine & ~roof[box] & ya] = ASPH
            continue
        # where a corner property has two frontages, its front is the shorter (if 8 m or more): the house faces it
        fy, fx = np.nonzero(front)
        fr_road = rid[fy + y0, fx + x0]
        if len(np.unique(fr_road)) > 1:
            cnt = {r_: int((fr_road == r_).sum()) for r_ in np.unique(fr_road)}
            ok = [r_ for r_, n_ in cnt.items() if n_ * A / 0.8 >= 8.0]
            pick = min(ok, key=cnt.get) if ok else max(cnt, key=cnt.get)
            keep_ = fr_road == pick
            front = np.zeros_like(front); front[fy[keep_], fx[keep_]] = True
            fy, fx = fy[keep_], fx[keep_]
        yy, xx = np.mgrid[y0:y1, x0:x1]
        cy, cx = np.nonzero(mine)
        f0 = np.array([fx.mean(), fy.mean()]) + [x0, y0]
        inward = np.array([cx.mean() - fx.mean(), cy.mean() - fy.mean()])
        inward /= max(np.hypot(*inward), 1e-6)
        # the property's own axes: from its outline, the one most nearly pointing in from the street
        q = np.stack([cx, cy], 1).astype(float); q -= q.mean(0)
        ev = np.linalg.eigh(np.cov(q.T))[1]
        cand = [ev[:, 0], ev[:, 1], -ev[:, 0], -ev[:, 1]]
        v_dir = max(cand, key=lambda dv: float(dv @ inward))
        if float(v_dir @ inward) < 0.5:
            v_dir = inward   # an odd shape: go straight in from the street
        u_dir = np.array([-v_dir[1], v_dir[0]])
        U = ((xx - f0[0]) * u_dir[0] + (yy - f0[1]) * u_dir[1]) * MPP
        Vv = ((xx - f0[0]) * v_dir[0] + (yy - f0[1]) * v_dir[1]) * MPP
        Vv = Vv - float(np.percentile(Vv[front], 50))
        lu0, lu1 = np.percentile(U[mine], [1, 99])
        verge_here = V[box] & (Vv < 0.5) & (Vv >= -15) & (U >= lu0) & (U <= lu1) & ~Cf[box]
        if cls_ == 'large':
            ya, yc = large_yard(own, area, box, y0, x0)
            k[mine & ~roof[box] & yc] = CONC
            yard = mine & ~roof[box] & ya
            k[yard] = ASPH
            # a strip of lawn along the street, and an entry across the verge where the yard meets it
            strip = yard & (Vv <= 1.5)
            k[strip] = LAWN
            u_yard = U[yard & (Vv <= 4)]
            if len(u_yard) and k[verge_here].size and not (k[verge_here] == CONC).all():
                ue = float(np.median(u_yard))
                ent = (verge_here | strip) & (np.abs(U - ue) <= 3.2) & ~Pth[box]
                k[only_touching(ent, mine)] = ASPH
                st['entries'] += 1
            st['large lots'] += 1
            continue
        # houses and units: lawn, a driveway, and the usual bits
        homes = [b for b in own if blds[b][1] == 0 and blds[b][2] >= 25]
        sheds = [b for b in own if blds[b][1] == 1 and 12 <= blds[b][2] <= 80]
        if not homes:
            continue
        homes.sort(key=lambda b: -blds[b][2])
        house = np.isin(bl, [b + 1 for b in (homes if cls_ == 'units' else homes[:1])])
        if not house.any():
            continue
        hu0, hu1 = np.percentile(U[house], [1, 99])
        hv0, hv1 = float(np.percentile(Vv[house], 2)), float(np.percentile(Vv[house], 98))
        lv1 = float(np.percentile(Vv[mine], 99))
        lot_open = mine & ~house & ~roof[box]
        width = 3.5 if cls_ == 'units' else 3.0
        left, right = hu0 - lu0, lu1 - hu1
        drive_u = v_end = None
        if cls_ == 'units':
            drive_u = lu0 + 0.3 + width / 2 if left >= right else lu1 - 0.3 - width / 2
            v_end = hv1 - 2.0
            st['unit drives'] += 1
        elif hv0 >= 2.0:
            if max(left, right) >= 3.3:
                drive_u = lu0 + 0.3 + width / 2 if left >= right else lu1 - 0.3 - width / 2
                v_end = hv0 + 6.0
                # on to a garage or shed behind, if it stands in line with the driveway
                for b in sheds:
                    sb = bl == b + 1
                    if sb.any():
                        su0, su1 = np.percentile(U[sb], [5, 95])
                        if su0 - 0.5 <= drive_u <= su1 + 0.5:
                            v_end = max(v_end, float(np.percentile(Vv[sb], 3)))
                st['drives beside'] += 1
            else:
                drive_u = hu0 + width / 2 + 0.3 if left >= right else hu1 - width / 2 - 0.3
                v_end = hv0
                st['drives to garage'] += 1
        new = k.copy()
        new[lot_open] = LAWN
        if drive_u is not None:
            v_end = min(v_end, lv1)
            slot = np.abs(U - drive_u) <= width / 2
            drive = slot & lot_open & (Vv <= v_end) & (Vv >= -0.5)
            new[drive] = CONC
            flare = width / 2 + np.clip(-Vv - 1.0, 0, 1.0) * 0.5
            cross = verge_here & (np.abs(U - drive_u) <= flare)
            new[only_touching(cross, drive)] = CONC
        else:
            slot = np.zeros_like(mine)
        h = h01(li, 7)
        cu = (hu0 + hu1) / 2
        st_path = st_bed = st_patio = False
        # a path from the street to the front door, unless the driveway is right there
        if cls_ == 'house' and hv0 >= 3.0 and h < 0.6 and (drive_u is None or abs(cu - drive_u) > width / 2 + 1.6):
            walk = lot_open & (np.abs(U - cu) <= 0.55) & (Vv <= hv0 + 0.3) & (Vv >= -0.3)
            new[walk] = CONC
            st['front paths'] += 1
            st_path = True
        # a garden bed along the front of the house
        if h01(li, 11) < 0.65 and hv0 >= 2.5:
            bed = lot_open & (Vv >= hv0 - 1.4) & (Vv < hv0 + 0.4) & (U >= hu0 - 0.4) & (U <= hu1 + 0.4) & (new == LAWN) & ~ndi.binary_dilation(slot, iterations=3)
            new[bed] = OTHER
            st['garden beds'] += 1
            st_bed = True
        # a patio out the back
        if cls_ == 'house' and h01(li, 13) < 0.55 and lv1 - hv1 >= 6:
            hw = min(3.5, (hu1 - hu0) / 2)
            pat = lot_open & (Vv > hv1 - 0.5) & (Vv <= hv1 + 3.0) & (np.abs(U - cu) <= hw)
            new[pat] = CONC
            st['patios'] += 1
            st_patio = True
        # under thick trees at the back, the ground is bush
        new[lot_open & under[box] & thick[box] & (Vv > hv1 + 8) & (new == LAWN)] = OTHER
        upd = mine | (V[box] & (Vv < 0.5) & (Vv >= -15) & (U >= lu0) & (U <= lu1) & ~Pth[box] & (k != CONC))
        k[upd] = new[upd]
        k[Pth[box] & (new == CONC)] = CONC
        st[cls_] += 1
        # the property's frame, for the yard's things (suburb_yards.py): a point is origin + u * U + v * V (metres)
        shift = float(np.percentile(((xx - f0[0]) * v_dir[0] + (yy - f0[1]) * v_dir[1])[front], 50)) * MPP
        ox, oz = X0 + f0[0] * MX + v_dir[0] * shift, Z0 + f0[1] * MZ + v_dir[1] * shift
        if X0 + MARGIN * MX <= X0 + f0[0] * MX < X1 - MARGIN * MX and Z0 + MARGIN * MZ <= Z0 + f0[1] * MZ < Z1 - MARGIN * MZ:
            frames.append(dict(li=li, cls=cls_, o=[round(ox, 2), round(oz, 2)], u=[round(float(u_dir[0]), 4), round(float(u_dir[1]), 4)],
                               v=[round(float(v_dir[0]), 4), round(float(v_dir[1]), 4)], lu=[round(float(lu0), 2), round(float(lu1), 2)],
                               hu=[round(float(hu0), 2), round(float(hu1), 2)], hv=[round(hv0, 2), round(hv1, 2)], lv1=round(lv1, 2),
                               du=None if drive_u is None else round(float(drive_u), 2), dv=None if v_end is None else round(float(v_end), 2),
                               dw=width, path=bool(st_path), bed=bool(st_bed), patio=bool(st_patio)))

    # streets' own paving goes back over whatever a property's design reached
    K[Pth] = CONC
    K[Cf] = ASPH
    # lanes, walkways, tracks
    for code in (ASPH, CONC):
        K[(lane == code + 1) & ~roof] = code
    K[(lane == OTHER + 11) & ~roof & ~Cf] = OTHER
    # the railway: ballast under the tracks
    if rails:
        im = Image.new('1', (N, N)); d = ImageDraw.Draw(im)
        for p in rails:
            d.line(pts(p), fill=1, width=int(round(4.2 / MPP)))
        rl = np.array(im) & ~Cf & ~roof
        K[rl] = OTHER
        st['ballast m2'] = int(rl.sum() * A)
    # sports fields are lawn
    if pitches:
        im = Image.new('1', (N, N)); d = ImageDraw.Draw(im)
        for p in pitches:
            d.polygon(pts(p), fill=1)
        pm = np.array(im) & ~roof & ~Cf
        K[pm] = LAWN
    # pools: a concrete surround (the water is drawn by the model)
    for pl in pools:
        x, z, ln, wd, ang = pl['x'], pl['z'], pl['l'], pl['w'], math.radians(pl['a'])
        if not (X0 < x < X1 and Z0 < z < Z1):
            continue
        ca, sa = math.cos(ang), math.sin(ang)
        hl, hw = ln / 2 + 0.8, wd / 2 + 0.8
        corner = [(x + ca * a_ * hl - sa * b_ * hw, z + sa * a_ * hl + ca * b_ * hw) for a_, b_ in ((-1, -1), (1, -1), (1, 1), (-1, 1))]
        im = Image.new('1', (N, N)); d = ImageDraw.Draw(im)
        d.polygon(pts(corner), fill=1)
        pm = np.array(im) & ~roof & ~Cf
        K[pm] = CONC
        st['pools'] += 1
    return K, roof, st, frames


def only_touching(m, base):
    """The parts of m that touch base (a crossover runs from its own driveway to the kerb, not on across the street)."""
    lab, n = ndi.label(m)
    if not n:
        return m
    hit = np.unique(lab[ndi.binary_dilation(base, iterations=2) & m])
    return np.isin(lab, hit[hit > 0])


def encode(K):
    out = np.zeros(K.shape + (3,), np.uint8)
    for ch, kind_ in enumerate((LAWN, ASPH, CONC)):
        m = K == kind_
        inside = ndi.distance_transform_edt(m); outside = ndi.distance_transform_edt(~m)
        dd = np.where(m, (inside - 0.5) * MPP, -(outside - 0.5) * MPP).astype(np.float32)
        dd = ndi.gaussian_filter(dd, 0.8)
        out[..., ch] = np.clip(np.round(128 + dd * 80), 0, 255).astype(np.uint8)
    return out


index_path = os.path.join(SURF, 'index.json')
index = json.load(open(index_path))
tiles = set(index['tiles'])
sizes = 0
squares = ONLY or [(R, C) for R in range(4) for C in range(4) if (R, C) != (1, 1)]
for R, C in squares:
    K, roof, st, frames = design(R, C)
    print(json.dumps({'square': [R, C], **st}), flush=True)
    json.dump(frames, open(f'{WORK}/frames_{R}_{C}.json', 'w'))
    if (R, C) == (1, 1):
        continue   # the designed square: only its properties' frames, its ground stays as design.py drew it
    np.save(f'{WORK}/K_{R}_{C}.npy', K[MARGIN:-MARGIN, MARGIN:-MARGIN])
    # a picture to check by eye, 0.8 m a pixel: lawn green, asphalt dark, concrete pale, other brown, roofs red
    pal = np.array([[150, 110, 70], [110, 170, 90], [70, 70, 75], [215, 212, 200], [190, 60, 50]], np.uint8)
    Kc = np.where(roof, 4, K)[MARGIN:-MARGIN:4, MARGIN:-MARGIN:4]
    Image.fromarray(pal[Kc]).save(f'{WORK}/K_{R}_{C}.png')
    if not WRITE:
        continue
    F = encode(K)[MARGIN:-MARGIN, MARGIN:-MARGIN]
    for r in range(4):
        for c in range(4):
            br, bc = R * 4 + r, C * 4 + c
            if br in PILOT and bc in PILOT:
                continue
            blk = F[r * RES:(r + 1) * RES, c * RES:(c + 1) * RES]
            fn = os.path.join(SURF, f'{br}_{bc}.webp')
            Image.fromarray(blk).save(fn, lossless=True, method=6)
            sizes += os.path.getsize(fn)
            tiles.add(f'{br}_{bc}')
if WRITE:
    index['tiles'] = sorted(tiles, key=lambda s: tuple(map(int, s.split('_'))))
    json.dump(index, open(index_path, 'w'), separators=(',', ':'))
    print(json.dumps({'blocks MB': round(sizes / 1e6, 2), 'blocks listed': len(index['tiles'])}))
