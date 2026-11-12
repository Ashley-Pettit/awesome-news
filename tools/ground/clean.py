"""Tidy the Moorooka ground plan by inference only (street lines, property boundaries, buildings and the plan
itself; no imagery). Smallest changes that make it read as designed:

1. Verges: along each side of each street, the verge between the kerb and the property line is read a metre at a
   time. Each metre is an opening (asphalt to the kerb: a car park entry) or not. Openings under 4 m are not
   openings (scraps), and gaps under 3 m between openings are part of the opening. Asphalt in a non-opening
   becomes lawn; lawn in an opening becomes asphalt. Concrete (footpaths, crossovers, shopfronts) is left alone.
2. Car parks: on a property whose open ground is mostly sealed, lawn scraps under 150 m2 and concrete scraps under
   20 m2 that do not touch a building become asphalt (one surface, as a car park is built).
3. Specks under 3 m2 anywhere take the kind around them.
"""
import sys
sys.path.insert(0, __import__('os').path.dirname(__file__))
from base import *

kind0 = np.load(f'{S}/kind.npy'); kind = kind0.copy()
roof = np.load(f'{S}/roof.npy'); lots = np.load(f'{S}/lots.npy'); cw = np.load(f'{S}/cw.npy')
rs = roads()
A = MPP * MPP
LAWN, ASPH, CONC = 1, 2, 3
stats = {}

# ---- 1. verges
cl = Image.new('I', (N, N)); d = ImageDraw.Draw(cl)
for r in rs:
    if r['cls'] > 3 or r['flags'] & 3 or len(r['p']) < 2:
        continue
    d.line([px(*a) for a in r['p']], fill=r['i'] + 1, width=1)
cl = np.array(cl)
dist_c, (iy, ix) = ndi.distance_transform_edt(cl == 0, return_indices=True)
rid = cl[iy, ix] - 1
dist_cw = ndi.distance_transform_edt(~cw) * MPP
verge = (lots == 0) & ~cw & (dist_cw <= 8) & ~roof & (kind > 0)
vy, vx = np.nonzero(verge)
vr = rid[vy, vx]
# along-street position and side, from the nearest centre-line point
s_of = np.zeros(len(vy)); side = np.zeros(len(vy), int)
for r in rs:
    sel = np.flatnonzero(vr == r['i'])
    if not len(sel) or len(r['p']) < 2:
        continue
    P = np.array([px(*a) for a in r['p']])
    seg = np.diff(P, axis=0); L = np.hypot(*seg.T); cum = np.concatenate([[0], np.cumsum(L)])
    Q = np.stack([vx[sel], vy[sel]], 1).astype(float)
    best = np.full(len(sel), np.inf); bs = np.zeros(len(sel)); bside = np.zeros(len(sel), int)
    for k in range(len(seg)):
        if L[k] == 0:
            continue
        u = np.clip(((Q - P[k]) @ seg[k]) / L[k] ** 2, 0, 1)
        c = P[k] + u[:, None] * seg[k]
        dd = np.hypot(*(Q - c).T)
        m = dd < best
        best[m] = dd[m]; bs[m] = cum[k] + u[m] * L[k]
        bside[m] = np.sign(seg[k][0] * (Q[m, 1] - P[k][1]) - seg[k][1] * (Q[m, 0] - P[k][0]))
    s_of[sel] = bs * MPP; side[sel] = bside
bins = {}
key = vr * 4 + (side > 0) * 2  # road and side
b = np.floor(s_of).astype(int)
flip_a = flip_l = 0
for kk in np.unique(key):
    sel = np.flatnonzero(key == kk)
    bb = b[sel]; kk_ = kind[vy[sel], vx[sel]]
    lo, hi = bb.min(), bb.max()
    na = np.bincount(bb - lo, weights=(kk_ == ASPH), minlength=hi - lo + 1)
    nl = np.bincount(bb - lo, weights=(kk_ == LAWN), minlength=hi - lo + 1)
    seen = (na + nl) > 0
    op = (na >= nl) & seen
    # smooth: fill gaps under 3 m between openings, then drop openings under 4 m
    def runs(x):
        out, i = [], 0
        while i < len(x):
            j = i
            while j < len(x) and x[j] == x[i]:
                j += 1
            out.append((i, j, x[i])); i = j
        return out
    for i, j, v in runs(op):
        if not v and 0 < i and j < len(op) and j - i < 3:
            op[i:j] = True
    for i, j, v in runs(op):
        if v and j - i < 4:
            op[i:j] = False
    o = op[bb - lo]
    ya, xa = vy[sel], vx[sel]
    to_l = ~o & (kk_ == ASPH); to_a = o & (kk_ == LAWN)
    kind[ya[to_l], xa[to_l]] = LAWN; kind[ya[to_a], xa[to_a]] = ASPH
    flip_a += to_a.sum(); flip_l += to_l.sum()
stats['verge m2 asphalt to lawn'] = round(flip_l * A); stats['verge m2 lawn to asphalt'] = round(flip_a * A)

# ---- 2. car parks
open_ = ~roof & (lots > 0)
n_l = np.bincount(lots[open_], minlength=lots.max() + 1)
n_s = np.bincount(lots[open_ & ((kind == ASPH) | (kind == CONC))], minlength=lots.max() + 1)
n_a = np.bincount(lots[open_ & (kind == ASPH)], minlength=lots.max() + 1)
park_lot = (n_l * A >= 300) & (n_s >= 0.5 * n_l) & (n_a >= 0.3 * n_l)
park_lot[0] = False
park = park_lot[lots]
touch_roof = ndi.binary_dilation(roof, iterations=2)
pieces = 0
for k, limit in ((LAWN, 150), (CONC, 20)):
    m = park & (kind == k) & ~roof
    lab, n = ndi.label(m, structure=np.ones((3, 3)))
    if not n:
        continue
    size = np.bincount(lab.ravel())[1:] * A
    near_roof = ndi.maximum(touch_roof, lab, np.arange(1, n + 1)).astype(bool)
    go = size < limit
    if k == CONC:
        go &= ~near_roof
    keep = np.concatenate([[False], go])
    kind[keep[lab]] = ASPH
    pieces += int(go.sum())
stats['car park lots'] = int(park_lot.sum()); stats['car park scraps made asphalt'] = pieces

# ---- 2b. street land away from the kerb (wide corners, slip lanes): lawn scraps under 60 m2 ringed by asphalt
m = (lots == 0) & (kind == LAWN) & ~roof
lab, n = ndi.label(m, structure=np.ones((3, 3)))
if n:
    size = np.bincount(lab.ravel())[1:] * A
    ring = ndi.binary_dilation(lab > 0, iterations=2) & ~(lab > 0)
    rl, _ = ndi.label(ring)  # border pixels, assigned to the nearest scrap
    _, (jy, jx) = ndi.distance_transform_edt(lab == 0, return_indices=True)
    owner = lab[jy, jx]
    tot = np.bincount(owner[ring], minlength=n + 1)[1:]
    asp = np.bincount(owner[ring & (kind == ASPH)], minlength=n + 1)[1:]
    go = (size < 60) & (asp >= 0.85 * np.maximum(tot, 1))
    kind[np.concatenate([[False], go])[lab]] = ASPH
    stats['street-land scraps made asphalt'] = int(go.sum())

# ---- 3. specks under 3 m2 (outside buildings) take the kind around them
for _ in range(2):
    for k in (LAWN, ASPH, CONC):
        m = (kind == k) & ~roof
        lab, n = ndi.label(m)
        size = np.bincount(lab.ravel()) * A
        small = (size < 3); small[0] = False
        sm = small[lab]
        if not sm.any():
            continue
        other = np.where(sm | roof, 0, kind)
        _, (jy, jx) = ndi.distance_transform_edt(other == 0, return_indices=True)
        kind[sm] = other[jy[sm], jx[sm]]
stats['changed m2'] = round(float((kind != kind0).sum() * A))
stats['changed m2 outside buildings'] = round(float(((kind != kind0) & ~roof).sum() * A))
np.save(f'{S}/kind_new.npy', kind)
print(json.dumps(stats))
