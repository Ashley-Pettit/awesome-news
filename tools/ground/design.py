"""Moorooka's ground plan, designed at 0.2 m from the street lines, property boundaries, buildings and the plan itself
(no imagery). Writes the 16 surface blocks at 1024 px (twice as sharp as before).

  python3 design.py <work_dir> <parcels.geojson> [--write]

What it does, in order:
1. Reads the current blocks (distance fields, 0.4 m) and lays them out at 0.2 m (bilinear, so edges stay smooth).
2. Streets: each carriageway at its width, with the corners where streets meet rounded (5 m), on street land only.
3. Verges (street land beside a carriageway), read a metre at a time along each side of each street:
   - mostly concrete for 6 m or more: paved to the property line (shopfronts);
   - concrete across it for 2.5 m or more: a driveway crossover, at least 3 m wide, kerb to property line;
   - asphalt to the kerb for 4 m or more: a car park entry;
   - everything else is lawn;
   - then the footpath: a 1.3 m concrete band at the street's own distance from the kerb (town.json footpaths), carried
     round the corners to meet the cross street's footpath, and across crossovers and entries.
4. Properties: "other" ground (shown as bare earth) under 150 m2 takes the ground around it; on house blocks, loose
   concrete and asphalt pieces are drawn as the rectangle they fill (if they fill 60% of it), scraps under 3 m2 go.
5. Each kind's signed distance field is worked out afresh where anything changed (128 + 80 x metres, as before).
"""
import json, os, sys, math
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage as ndi

W_DIR, PARCELS = sys.argv[1], sys.argv[2]
WRITE = '--write' in sys.argv
TOWN = '/home/claude/awesome-news/town3d/moorooka'
SURF = TOWN + '/surface'
t = json.load(open(TOWN + '/town.json'))
meta = t['meta']
TILE_X, TILE_Z = meta['size'][0] / 16, meta['size'][1] / 16
X0, Z0 = -meta['size'][0] / 2 + 4 * TILE_X, -meta['size'][1] / 2 + 4 * TILE_Z
N = 4096
MPP = TILE_X * 4 / N
A = MPP * MPP
LAWN, ASPH, CONC = 1, 2, 3
os.makedirs(W_DIR, exist_ok=True)
log = {}


def px(x, z):
    return ((x - X0) / MPP, (z - Z0) / MPP)


# ---- 1. the current plan at 0.2 m
old = np.zeros((2048, 2048, 3), np.float32)
for r in range(4, 8):
    for c in range(4, 8):
        a = np.asarray(Image.open(f'{SURF}/{r}_{c}.webp').convert('RGB')).astype(np.float32)
        if a.shape[0] != 512:
            a = a.reshape(512, a.shape[0] // 512, 512, a.shape[1] // 512, 3).mean(axis=(1, 3))
        old[(r - 4) * 512:(r - 3) * 512, (c - 4) * 512:(c - 3) * 512] = (a - 128) / 80
k = (np.arange(N) + 0.5) / 2 - 0.5
F_up = np.stack([ndi.map_coordinates(old[..., ch], np.meshgrid(k, k, indexing='ij'), order=1, mode='nearest') for ch in range(3)], -1).astype(np.float32)
del old
K0 = np.where(F_up.max(-1) > 0, F_up.argmax(-1) + 1, 0).astype(np.uint8)
K = K0.copy()

# ---- property boundaries, buildings, streets at 0.2 m
o, mpd = meta['origin'], meta['metresPerDegree']
lab = Image.new('I', (N, N)); dl = ImageDraw.Draw(lab); n_lot = 0
for f in json.load(open(PARCELS))['features']:
    if f['properties'].get('parcel_typ') != 'Lot Type Parcel':
        continue
    g = f['geometry']; polys = g['coordinates'] if g['type'] == 'MultiPolygon' else [g['coordinates']]
    n_lot += 1
    for P in polys:
        q = [px((lo - o[0]) * mpd[0], -(la - o[1]) * mpd[1]) for lo, la in P[0]]
        xs = [a for a, b in q]; ys = [b for a, b in q]
        if max(xs) < 0 or min(xs) > N or max(ys) < 0 or min(ys) > N:
            continue
        dl.polygon(q, fill=n_lot)
        for h in P[1:]:
            dl.polygon([px((lo - o[0]) * mpd[0], -(la - o[1]) * mpd[1]) for lo, la in h], fill=0)
lots = np.array(lab).astype(np.int32)
street = lots == 0

import base64
bb = np.frombuffer(base64.b64decode(t['buildings']), np.int16).astype(np.int64)
rim = Image.new('1', (N, N)); dr = ImageDraw.Draw(rim); i = 0
while i < len(bb):
    kk = int(bb[i]); p = bb[i + 7:i + 7 + 2 * kk].reshape(-1, 2) / 10; i += 7 + 2 * kk
    q = [px(x, z) for x, z in p]
    xs = [a for a, b in q]; ys = [b for a, b in q]
    if max(xs) < 0 or min(xs) > N or max(ys) < 0 or min(ys) > N or kk < 3:
        continue
    dr.polygon(q, fill=1)
roof = np.array(rim)

roads = []
for idx, r in enumerate(t['roads']):
    p = np.array(r[5], float).reshape(-1, 2) / 10
    if len(p) < 2:
        continue
    roads.append(dict(i=idx, cls=r[0], flags=r[2], w=r[3] / 10, name=r[4], p=p))
car_roads = [r for r in roads if r['cls'] <= 3 and not r['flags'] & 1]
cw_im = Image.new('L', (N, N)); dc = ImageDraw.Draw(cw_im)
cl_im = Image.new('I', (N, N)); dcl = ImageDraw.Draw(cl_im)
for r in car_roads:
    q = [px(*a) for a in r['p']]
    wp = r['w'] / MPP
    dc.line(q, fill=255, width=max(1, int(round(wp))))
    for a in q:
        dc.ellipse([a[0] - wp / 2, a[1] - wp / 2, a[0] + wp / 2, a[1] + wp / 2], fill=255)
    dcl.line(q, fill=r['i'] + 1, width=1)
C = np.array(cw_im) > 0
cl = np.array(cl_im)
del cw_im, cl_im

# ---- 2. rounded corners where streets meet (closing by 5 m), on street land only
R_CORNER = 5.0
d1 = ndi.distance_transform_edt(~C) * MPP
dil = d1 <= R_CORNER
d2 = ndi.distance_transform_edt(dil) * MPP
closed = d2 > R_CORNER
Cf = C | (closed & street & ~roof)
del d1, dil, d2, closed
log['corner fill m2'] = round(float((Cf & ~C).sum() * A))
K[Cf] = ASPH

# ---- 3. verges
dk = ndi.distance_transform_edt(~Cf) * MPP          # metres from the kerb line
lane_im = Image.new('L', (N, N)); dln = ImageDraw.Draw(lane_im)
for r in roads:
    if r['cls'] >= 4:
        dln.line([px(*a) for a in r['p']], fill=255, width=max(1, int(round((r['w'] + 0.4) / MPP))))
lanes = np.array(lane_im) > 0
V = street & ~Cf & ~roof & ~lanes & (dk <= 12)
_, (iy, ix) = ndi.distance_transform_edt(cl == 0, return_indices=True)
rid = cl[iy, ix] - 1
vy, vx = np.nonzero(V)
vr = rid[vy, vx]
s_of = np.zeros(len(vy), np.float32); side = np.zeros(len(vy), np.int8)
by_i = {r['i']: r for r in roads}
for r in car_roads:
    sel = np.flatnonzero(vr == r['i'])
    if not len(sel):
        continue
    Pp = np.array([px(*a) for a in r['p']])
    seg = np.diff(Pp, axis=0); L = np.hypot(*seg.T); cum = np.concatenate([[0], np.cumsum(L)])
    Q = np.stack([vx[sel], vy[sel]], 1).astype(np.float64)
    best = np.full(len(sel), np.inf); bs = np.zeros(len(sel)); bside = np.zeros(len(sel), np.int8)
    for kk in range(len(seg)):
        if L[kk] == 0:
            continue
        u = np.clip(((Q - Pp[kk]) @ seg[kk]) / L[kk] ** 2, 0, 1)
        cc = Pp[kk] + u[:, None] * seg[kk]
        dd = np.hypot(*(Q - cc).T)
        m = dd < best
        best[m] = dd[m]; bs[m] = cum[kk] + u[m] * L[kk]
        bside[m] = np.sign(seg[kk][0] * (Q[m, 1] - Pp[kk][1]) - seg[kk][1] * (Q[m, 0] - Pp[kk][0]))
    s_of[sel] = bs * MPP; side[sel] = bside
kv = K0[vy, vx]
fp = t['footpaths']
path_off = np.zeros(len(vy), np.float32)  # this side's footpath, metres from the kerb to its centre (0: none)
verge_kind = np.full(len(vy), LAWN, np.uint8)
stats = dict(paved=0, crossover=0, entry=0)


def runs(x):
    out, i0 = [], 0
    while i0 < len(x):
        j0 = i0
        while j0 < len(x) and x[j0] == x[i0]:
            j0 += 1
        out.append([i0, j0, x[i0]]); i0 = j0
    return out


key = vr.astype(np.int64) * 4 + (side > 0) * 2
for kk_ in np.unique(key):
    sel = np.flatnonzero(key == kk_)
    ri = int(kk_ // 4); right = bool((kk_ // 2) % 2)
    b = np.floor(s_of[sel]).astype(int); lo = b.min(); nb = b.max() - lo + 1
    kv_s = kv[sel]
    cnt = {k_: np.bincount(b - lo, weights=(kv_s == k_), minlength=nb) for k_ in (0, LAWN, ASPH, CONC)}
    tot = cnt[LAWN] + cnt[ASPH] + cnt[CONC]
    cls = np.zeros(nb, np.int8)  # 0 lawn, 1 crossover (concrete), 2 entry (asphalt), 3 paved
    seen = tot > 0
    cshare = np.where(seen, cnt[CONC] / np.maximum(tot, 1), 0); ashare = np.where(seen, cnt[ASPH] / np.maximum(tot, 1), 0)
    cls[cshare >= 0.6] = 3
    cls[(cls == 0) & (cshare >= 0.35)] = 1
    cls[(cls == 0) & (ashare >= 0.5)] = 2
    # fill short lawn gaps between two pieces of the same kind, then drop pieces too short to be what they are
    rr = runs(list(cls))
    for i0, j0, v in rr:
        if v == 0 and i0 > 0 and j0 < nb and j0 - i0 < 2 and cls[i0 - 1] == cls[j0]:
            cls[i0:j0] = cls[i0 - 1]
    for i0, j0, v in runs(list(cls)):
        n_ = j0 - i0
        if v == 3 and n_ < 6:
            cls[i0:j0] = 1 if n_ >= 2.5 else 0
    for i0, j0, v in runs(list(cls)):
        n_ = j0 - i0
        if v == 1 and n_ < 2.5:
            cls[i0:j0] = 0
        elif v == 1 and n_ < 3:  # a crossover is at least 3 m wide
            a0 = max(0, i0 - 1 if i0 > 0 and cls[i0 - 1] == 0 else i0); cls[a0:a0 + 3] = np.where(cls[a0:a0 + 3] == 0, 1, cls[a0:a0 + 3])
        elif v == 2 and n_ < 4:
            cls[i0:j0] = 0
    for i0, j0, v in runs(list(cls)):
        if v:
            stats[{1: 'crossover', 2: 'entry', 3: 'paved'}[int(v)]] += 1
    verge_kind[sel] = np.array([LAWN, CONC, ASPH, CONC], np.uint8)[cls[b - lo]]
    f = fp.get(str(ri))
    off = 0.0
    if f is not None:
        v = f[0 if right else 1]
        off = v / 10 if v > 0 else 0.0
    elif ri in by_i and by_i[ri]['cls'] <= 2:
        off = 2.3
    path_off[sel] = off
log['verge pieces'] = stats

# the footpath band: at its distance from the kerb, carried round corners near junctions
dkv = dk[vy, vx]
band_own = (path_off > 0) & (np.abs(dkv - path_off) <= 0.65)
band_any = np.abs(dkv - np.where(path_off > 0, path_off, 2.3)) <= 0.65
# junction nodes: road ends shared by two or more streets
from collections import defaultdict
node_w = defaultdict(list)
for r in car_roads:
    for e in (r['p'][0], r['p'][-1]):
        node_w[tuple(np.round(e, 0))].append(r['w'])
nodes = [(e, max(ws)) for e, ws in node_w.items() if len(ws) >= 2]
near_node = np.zeros((N, N), bool)
nd = Image.new('1', (N, N)); dn = ImageDraw.Draw(nd)
for (x, z), wmax in nodes:
    a, b_ = px(x, z); rr_ = (wmax / 2 + R_CORNER + 3) / MPP
    dn.ellipse([a - rr_, b_ - rr_, a + rr_, b_ + rr_], fill=1)
near_node = np.array(nd)
Bown = np.zeros((N, N), bool); Bown[vy[band_own], vx[band_own]] = True
Bany = np.zeros((N, N), bool); Bany[vy[band_any], vx[band_any]] = True
allowed = Bany & near_node
P_ = Bown.copy()
for _ in range(60):  # up to 12 m round a corner
    grow = ndi.binary_dilation(P_) & allowed & ~P_
    if not grow.any():
        break
    P_ |= grow
log['footpath m2'] = round(float(P_.sum() * A)); log['footpath round corners m2'] = round(float((P_ & ~Bown).sum() * A))

Kv = K[vy, vx].copy()
Kv[:] = verge_kind
K[vy, vx] = Kv
K[P_] = CONC

# ---- 4. properties
inlot = (lots > 0) & ~roof
# bare earth ("other") under 150 m2 takes the ground around it
m0 = (K == 0) & ~roof
lab0, n0 = ndi.label(m0)
if n0:
    sz = np.bincount(lab0.ravel()) * A
    small = (sz < 150); small[0] = False
    sm = small[lab0]
    src = np.where(sm | roof, 0, K)
    _, (jy, jx) = ndi.distance_transform_edt(src == 0, return_indices=True)
    K[sm] = src[jy[sm], jx[sm]]
    log['bare patches filled'] = int(small.sum())

# house blocks: what is mostly lawn
nl = np.bincount(lots[inlot], minlength=lots.max() + 1)
nlawn = np.bincount(lots[inlot & (K == LAWN)], minlength=lots.max() + 1)
house = (nlawn >= 0.5 * np.maximum(nl, 1)) & (nl * A >= 150)
house[0] = False
H = house[lots] & ~roof
rect_n = scrap_n = 0
lot_box = ndi.find_objects(lots)
_axes = {}
def lot_axes(i):
    if i in _axes:
        return _axes[i]
    sl = lot_box[i - 1] if i - 1 < len(lot_box) else None
    ax = None
    if sl is not None:
        yy_, xx_ = np.nonzero(lots[sl] == i)
        if len(yy_) > 20:
            q = np.stack([xx_, yy_], 1).astype(float); q -= q.mean(0)
            ax = np.linalg.eigh(np.cov(q.T))[1]
    _axes[i] = ax
    return ax
for kind_ in (CONC, ASPH):
    lb, nn = ndi.label(H & (K == kind_), structure=np.ones((3, 3)))
    objs = ndi.find_objects(lb)
    for ci, sl in enumerate(objs, 1):
        if sl is None:
            continue
        y0, y1 = max(0, sl[0].start - 4), min(N, sl[0].stop + 4); x0, x1 = max(0, sl[1].start - 4), min(N, sl[1].stop + 4)
        piece = lb[y0:y1, x0:x1] == ci
        area = piece.sum() * A
        lot_here = lots[y0:y1, x0:x1]
        if area < 3:
            K[y0:y1, x0:x1][piece] = LAWN; scrap_n += 1; continue
        ys, xs = np.nonzero(piece)
        pts = np.stack([xs, ys], 1).astype(float)
        mu = pts.mean(0)
        lot_id = int(np.bincount(lot_here[piece]).argmax())
        evec = lot_axes(lot_id)  # square to the property, not to the piece
        if evec is None:
            continue
        u = (pts - mu) @ evec[:, 1]; v = (pts - mu) @ evec[:, 0]
        u0, u1 = np.percentile(u, [2, 98]); v0, v1 = np.percentile(v, [2, 98])
        rect_area = (u1 - u0 + 1) * (v1 - v0 + 1) * A
        if rect_area <= 0 or area / rect_area < 0.6 or min(u1 - u0, v1 - v0) * MPP < 0.9:
            continue
        yy, xx = np.mgrid[0:y1 - y0, 0:x1 - x0]  # in the window, as the piece's own points are
        U = (np.stack([xx, yy], -1) - mu) @ evec[:, 1]; Vv = (np.stack([xx, yy], -1) - mu) @ evec[:, 0]
        rect = (U >= u0) & (U <= u1) & (Vv >= v0) & (Vv <= v1)
        rect &= (lot_here == lot_id) & ~roof[y0:y1, x0:x1]
        sub = K[y0:y1, x0:x1]
        sub[piece & ~rect] = LAWN
        sub[rect & (sub == LAWN)] = kind_
        rect_n += 1
log['house-block pieces squared'] = rect_n; log['house-block scraps'] = scrap_n

np.save(f'{W_DIR}/K0.npy', K0); np.save(f'{W_DIR}/K.npy', K); np.save(f'{W_DIR}/roof.npy', roof); np.save(f'{W_DIR}/lots.npy', lots)
log['changed m2 (outside buildings)'] = round(float(((K != K0) & ~roof).sum() * A))

# ---- 5. distance fields
zone = ndi.binary_dilation((K != K0), iterations=10)
F = F_up.copy()
for ch, kind_ in enumerate((LAWN, ASPH, CONC)):
    m = K == kind_
    inside = ndi.distance_transform_edt(m); outside = ndi.distance_transform_edt(~m)
    d = np.where(m, (inside - 0.5) * MPP, -(outside - 0.5) * MPP).astype(np.float32)
    d = ndi.gaussian_filter(d, 0.8)
    F[..., ch] = np.where(zone, d, F_up[..., ch])
dec = np.where(F.max(-1) > 0, F.argmax(-1) + 1, 0)
log['decoded matches plan'] = round(float((dec == K)[K > 0].mean()), 4)
np.save(f'{W_DIR}/F.npy', F)
if WRITE:
    sizes = 0
    for r in range(4, 8):
        for c in range(4, 8):
            blk = F[(r - 4) * 1024:(r - 3) * 1024, (c - 4) * 1024:(c - 3) * 1024]
            out = np.clip(np.round(128 + blk * 80), 0, 255).astype(np.uint8)
            fn = f'{SURF}/{r}_{c}.webp'
            Image.fromarray(out).save(fn, lossless=True, method=6)
            sizes += os.path.getsize(fn)
    log['blocks MB'] = round(sizes / 1e6, 2)
print(json.dumps(log, indent=1))
