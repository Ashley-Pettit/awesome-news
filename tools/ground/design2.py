"""Moorooka's designed square (the shops and the streets round them), second pass: straight footpaths and verges laid
out from the street lines and each property's own frontage, not from shapes traced off the photograph.

  python3 design2.py <work dir from design.py> [--write]

Ash, 13 November 2026, near the shopping centre: "make paths straight, roads need to make sense. Concrete in the middle
of grass. Path doesn't connect."

1. The plan as the blocks hold it now (0.2 m) is the starting point inside properties.
2. Verges (street land beside a carriageway) are laid out a metre at a time along each side of each street, from what
   is just inside the property line opposite (1 m in):
   - a building there (a shop built to its boundary), a side the street data marks as paved, or a verge already paved in
     front of something that isn't a house: paved to the property line, in runs of 5 m or more;
   - concrete there (a driveway): a crossover, straight across from the kerb to the property line, at least 3 m wide;
   - asphalt there, where the verge itself was already sealed (a car park entry): asphalt across, at least 4 m wide;
   - anything else: lawn. Short gaps (under 2 m) between two pieces of the same kind are filled.
3. Footpaths are straight: each street side's footpath is its centre line (smoothed to 0.5 m) moved out to the
   footpath's distance from the kerb, 1.3 m wide, and carried on past the street's ends until it meets the cross
   street's kerb, so footpaths meet at corners and reach the kerb at crossings.
4. Car parks (properties whose open ground is mostly sealed) are one asphalt surface, with concrete kept only within 3 m
   of their buildings (the walk along the shopfronts) and lawn kept only where it is a tidy bed (a rectangle it fills
   70% of, square to the property, over 30 m2).
5. Bare earth under 150 m2 takes the ground round it. The blocks are written whole from the new plan.
"""
import json, math, os, sys
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage as ndi

W_DIR = sys.argv[1]
WRITE = '--write' in sys.argv
TOWN = '/home/claude/awesome-news/town3d/moorooka'
SURF = TOWN + '/surface'
t = json.load(open(TOWN + '/town.json'))
meta = t['meta']
TX, TZ = meta['size'][0] / 16, meta['size'][1] / 16
X0, Z0 = -meta['size'][0] / 2 + 4 * TX, -meta['size'][1] / 2 + 4 * TZ
N = 4096
MPP = TX * 4 / N
A = MPP * MPP
LAWN, ASPH, CONC = 1, 2, 3
log = {}


def px(x, z):
    return ((x - X0) / MPP, (z - Z0) / MPP)


# ---- 1. the plan now
K0 = np.zeros((N, N), np.uint8)
for r in range(4, 8):
    for c in range(4, 8):
        a = np.asarray(Image.open(f'{SURF}/{r}_{c}.webp').convert('RGB')).astype(np.int16)
        K0[(r - 4) * 1024:(r - 3) * 1024, (c - 4) * 1024:(c - 3) * 1024] = np.where(a.max(-1) > 128, a.argmax(-1) + 1, 0)
K = K0.copy()
lots = np.load(W_DIR + '/lots.npy'); roof = np.load(W_DIR + '/roof.npy')
street = lots == 0

roads = []
for idx, r in enumerate(t['roads']):
    p = np.array(r[5], float).reshape(-1, 2) / 10
    if len(p) >= 2:
        roads.append(dict(i=idx, cls=r[0], flags=r[2], w=r[3] / 10, name=r[4], p=p))
car_roads = [r for r in roads if r['cls'] <= 3 and not r['flags'] & 1]
im = Image.new('L', (N, N)); dc = ImageDraw.Draw(im)
cl_im = Image.new('I', (N, N)); dcl = ImageDraw.Draw(cl_im)
for r in car_roads:
    q = [px(*a) for a in r['p']]; wp = r['w'] / MPP
    dc.line(q, fill=255, width=max(1, int(round(wp))))
    for a in q:
        dc.ellipse([a[0] - wp / 2, a[1] - wp / 2, a[0] + wp / 2, a[1] + wp / 2], fill=255)
    dcl.line(q, fill=r['i'] + 1, width=1)
C = np.array(im) > 0; cl = np.array(cl_im)
lane_im = Image.new('L', (N, N)); dln = ImageDraw.Draw(lane_im)
for r in roads:
    if r['cls'] >= 4:
        dln.line([px(*a) for a in r['p']], fill=255, width=max(1, int(round((r['w'] + 0.4) / MPP))))
lanes = np.array(lane_im) > 0
del im, cl_im, lane_im
R_CORNER = 5.0
d1 = ndi.distance_transform_edt(~C) * MPP
closed = ndi.distance_transform_edt(d1 <= R_CORNER) * MPP > R_CORNER
Cf = C | (closed & street & ~roof)
del d1, closed
K[Cf] = ASPH

# ---- 2. verges, from the property opposite
dk = ndi.distance_transform_edt(~Cf) * MPP
V = street & ~Cf & ~roof & ~lanes & (dk <= 14)
_, (iy, ix) = ndi.distance_transform_edt(cl == 0, return_indices=True)
rid = cl[iy, ix] - 1
del iy, ix
dl_, (ly, lx) = ndi.distance_transform_edt(street, return_indices=True)  # the nearest property pixel
vy, vx = np.nonzero(V)
vr = rid[vy, vx]
# 1 m into the property, straight on from the verge
ny, nx = ly[vy, vx].astype(np.float64), lx[vy, vx].astype(np.float64)
dy, dx = ny - vy, nx - vx; L = np.maximum(np.hypot(dy, dx), 1e-6)
sy = np.clip(np.round(ny + dy / L * (1.0 / MPP)), 0, N - 1).astype(int); sx = np.clip(np.round(nx + dx / L * (1.0 / MPP)), 0, N - 1).astype(int)
far = dl_[vy, vx] * MPP > 14  # no property near
opp_k = K0[sy, sx]; opp_roof = roof[sy, sx] | roof[ny.astype(int), nx.astype(int)]
del ly, lx, dl_
# along-street position and side
s_of = np.zeros(len(vy), np.float32); side = np.zeros(len(vy), np.int8)
for r in car_roads:
    sel = np.flatnonzero(vr == r['i'])
    if not len(sel):
        continue
    Pp = np.array([px(*a) for a in r['p']]); seg = np.diff(Pp, axis=0); Ls = np.hypot(*seg.T); cum = np.concatenate([[0], np.cumsum(Ls)])
    Q = np.stack([vx[sel], vy[sel]], 1).astype(np.float64)
    best = np.full(len(sel), np.inf); bs = np.zeros(len(sel)); bside = np.zeros(len(sel), np.int8)
    for kk in range(len(seg)):
        if Ls[kk] == 0:
            continue
        u = np.clip(((Q - Pp[kk]) @ seg[kk]) / Ls[kk] ** 2, 0, 1); cc = Pp[kk] + u[:, None] * seg[kk]; ddd = np.hypot(*(Q - cc).T)
        m = ddd < best; best[m] = ddd[m]; bs[m] = cum[kk] + u[m] * Ls[kk]
        bside[m] = np.sign(seg[kk][0] * (Q[m, 1] - Pp[kk][1]) - seg[kk][1] * (Q[m, 0] - Pp[kk][0]))
    s_of[sel] = bs * MPP; side[sel] = bside
kv = K0[vy, vx]


def runs(x):
    out, i0 = [], 0
    while i0 < len(x):
        j0 = i0
        while j0 < len(x) and x[j0] == x[i0]:
            j0 += 1
        out.append((i0, j0, x[i0])); i0 = j0
    return out


fp = t['footpaths']
verge_kind = np.full(len(vy), LAWN, np.uint8)
stats = dict(paved=0, crossover=0, entry=0)
key = vr.astype(np.int64) * 4 + (side > 0) * 2
for kk_ in np.unique(key):
    sel = np.flatnonzero(key == kk_)
    b = np.floor(s_of[sel]).astype(int); lo = b.min(); nb = b.max() - lo + 1; bi = b - lo
    ok = ~far[sel]
    tot = np.bincount(bi, weights=ok, minlength=nb)
    share = lambda m: np.bincount(bi, weights=ok & m, minlength=nb) / np.maximum(tot, 1)
    roof_s = share(opp_roof[sel]); conc_s = share((opp_k[sel] == CONC) & ~opp_roof[sel]); asph_s = share((opp_k[sel] == ASPH) & ~opp_roof[sel])
    vtot = np.bincount(bi, minlength=nb); v_asph = np.bincount(bi, weights=kv[sel] == ASPH, minlength=nb) / np.maximum(vtot, 1)
    v_conc = np.bincount(bi, weights=kv[sel] == CONC, minlength=nb) / np.maximum(vtot, 1)
    lawn_s = share((opp_k[sel] == LAWN) & ~opp_roof[sel])
    cls = np.zeros(nb, np.int8)  # 0 lawn, 1 crossover, 2 entry, 3 paved
    cls[(tot > 0) & (roof_s >= 0.5)] = 3
    cls[(v_conc >= 0.6) & (lawn_s < 0.5)] = 3  # already paved in front of a shop, works or car park: stays paved
    ri, right = int(kk_ // 4), bool((kk_ // 2) % 2)
    fv = fp.get(str(ri))
    if fv is not None and fv[0 if right else 1] < 0:
        cls[:] = 3  # the street data says this side is paved to the property line (shopfronts)
    cls[(cls == 0) & (tot > 0) & (conc_s >= 0.5)] = 1
    cls[(cls == 0) & (tot > 0) & (asph_s >= 0.5) & (v_asph >= 0.5)] = 2
    for i0, j0, v in runs(list(cls)):
        if v == 0 and i0 > 0 and j0 < nb and j0 - i0 < 2 and cls[i0 - 1] == cls[j0]:
            cls[i0:j0] = cls[i0 - 1]
    for i0, j0, v in runs(list(cls)):
        n_ = j0 - i0
        if (v == 3 and n_ < 5) or (v == 2 and n_ < 4) or (v == 1 and n_ < 2.5):
            cls[i0:j0] = 1 if (v == 3 and n_ >= 2.5) else 0
    for i0, j0, v in runs(list(cls)):
        if v == 1 and j0 - i0 < 3:
            a0 = i0 - 1 if i0 > 0 and cls[i0 - 1] == 0 else i0
            cls[a0:min(nb, a0 + 3)] = np.where(cls[a0:min(nb, a0 + 3)] == 0, 1, cls[a0:min(nb, a0 + 3)])
    for i0, j0, v in runs(list(cls)):
        if v:
            stats[{1: 'crossover', 2: 'entry', 3: 'paved'}[int(v)]] += 1
    verge_kind[sel] = np.array([LAWN, CONC, ASPH, CONC], np.uint8)[cls[bi]]
log['verge pieces'] = stats
K[vy, vx] = verge_kind

# ---- 3. straight footpaths
fp = t['footpaths']


def simplify(P, tol):
    if len(P) < 3:
        return P
    a, b = P[0], P[-1]; ab = b - a; L_ = np.hypot(*ab) or 1e-9
    d = np.abs(ab[0] * (P[:, 1] - a[1]) - ab[1] * (P[:, 0] - a[0])) / L_
    i = int(d.argmax())
    if d[i] <= tol:
        return np.array([a, b])
    return np.vstack([simplify(P[:i + 1], tol)[:-1], simplify(P[i:], tol)])


def offset(P, dist):
    seg = np.diff(P, axis=0); Ls = np.hypot(*seg.T)[:, None]; u = seg / np.maximum(Ls, 1e-9)
    nrm = np.stack([-u[:, 1], u[:, 0]], 1)
    out = [P[0] + nrm[0] * dist]
    for k in range(1, len(P) - 1):
        m = nrm[k - 1] + nrm[k]; mm = np.hypot(*m)
        if mm < 1e-6:
            out.append(P[k] + nrm[k] * dist); continue
        m /= mm; cosv = max(0.5, float(m @ nrm[k]))
        out.append(P[k] + m * dist / cosv)
    out.append(P[-1] + nrm[-1] * dist)
    return np.array(out)


core = Image.new('1', (N, N)); dcore = ImageDraw.Draw(core)
ext = Image.new('1', (N, N)); dext = ImageDraw.Draw(ext)
WPX = 1.3 / MPP
n_sides = 0
for r in car_roads:
    f = fp.get(str(r['i']))
    for right in (True, False):
        if f is not None:
            v = f[0 if right else 1]; o = v / 10 if v > 0 else 0
        else:
            o = 2.3 if r['cls'] <= 2 else 0
        if o <= 0:
            continue
        P = simplify(r['p'], 0.5)
        if np.hypot(*(P[-1] - P[0])) < 1:
            continue
        sgn = 1 if right else -1  # right of the street's direction: x east, z south, so (-dz, dx)
        line = offset(P, sgn * (r['w'] / 2 + o))
        q = [px(*a) for a in line]
        xs = [a for a, b in q]; ys = [b for a, b in q]
        if max(xs) < -100 or min(xs) > N + 100 or max(ys) < -100 or min(ys) > N + 100:
            continue
        n_sides += 1
        dcore.line(q, fill=1, width=int(round(WPX)))
        for a in q:
            dcore.ellipse([a[0] - WPX / 2, a[1] - WPX / 2, a[0] + WPX / 2, a[1] + WPX / 2], fill=1)
        for end, nxt in ((line[0], line[1]), (line[-1], line[-2])):
            dvec = end - nxt; dvec /= max(np.hypot(*dvec), 1e-9)
            e2 = end + dvec * 25
            dext.line([px(*end), px(*e2)], fill=1, width=int(round(WPX)))
core = np.array(core); ext = np.array(ext)
ok_ground = street & ~Cf & ~roof & ~lanes
lab, n = ndi.label((core | ext) & ok_ground)
keep = np.zeros(n + 1, bool); keep[np.unique(lab[core & ok_ground])] = True; keep[0] = False
Pm = keep[lab]
log['footpath sides'] = n_sides; log['footpath m2'] = round(float(Pm.sum() * A)); log['carried past ends m2'] = round(float((Pm & ~core).sum() * A))
K[Pm] = CONC

# ---- 4. car parks
inlot = (lots > 0) & ~roof
nl = np.bincount(lots[inlot], minlength=lots.max() + 1)
ns = np.bincount(lots[inlot & ((K0 == ASPH) | (K0 == CONC))], minlength=lots.max() + 1)
na = np.bincount(lots[inlot & (K0 == ASPH)], minlength=lots.max() + 1)
park = (nl * A >= 300) & (ns >= 0.5 * nl) & (na >= 0.3 * nl); park[0] = False
P_ = park[lots] & ~roof
near_bld = ndi.distance_transform_edt(~roof) * MPP <= 3.0
newk = np.where(near_bld & (K0 == CONC), CONC, ASPH).astype(np.uint8)
# tidy lawn beds
lb, nn = ndi.label(P_ & (K0 == LAWN))
beds = 0
lot_box = ndi.find_objects(lots)
for ci, sl in enumerate(ndi.find_objects(lb), 1):
    if sl is None:
        continue
    piece = lb[sl] == ci; area = piece.sum() * A
    if area < 30:
        continue
    lot_id = int(np.bincount(lots[sl][piece]).argmax()); lsl = lot_box[lot_id - 1]
    yy_, xx_ = np.nonzero(lots[lsl] == lot_id)
    qq = np.stack([xx_, yy_], 1).astype(float); qq -= qq.mean(0)
    ev = np.linalg.eigh(np.cov(qq.T))[1]
    ys, xs = np.nonzero(piece); pts = np.stack([xs, ys], 1).astype(float); mu = pts.mean(0)
    u = (pts - mu) @ ev[:, 1]; v = (pts - mu) @ ev[:, 0]
    u0, u1 = np.percentile(u, [2, 98]); v0, v1 = np.percentile(v, [2, 98])
    if area / max((u1 - u0 + 1) * (v1 - v0 + 1) * A, 1e-9) < 0.7:
        continue
    yy, xx = np.mgrid[0:piece.shape[0], 0:piece.shape[1]]
    U = (np.stack([xx, yy], -1) - mu) @ ev[:, 1]; Vv = (np.stack([xx, yy], -1) - mu) @ ev[:, 0]
    rect = (U >= u0) & (U <= u1) & (Vv >= v0) & (Vv <= v1) & (lots[sl] == lot_id) & ~roof[sl]
    newk[sl][rect] = LAWN; beds += 1
K[P_] = newk[P_]
log['car parks'] = int(park.sum()); log['lawn beds kept'] = beds

# ---- 5. bare earth, and the blocks
m0 = (K == 0) & ~roof
lab0, n0 = ndi.label(m0)
if n0:
    sz = np.bincount(lab0.ravel()) * A; small = sz < 150; small[0] = False; sm = small[lab0]
    src = np.where(sm | roof, 0, K)
    _, (jy, jx) = ndi.distance_transform_edt(src == 0, return_indices=True)
    K[sm] = src[jy[sm], jx[sm]]
np.save(W_DIR + '/K2.npy', K); np.save(W_DIR + '/K2_before.npy', K0)
log['changed m2 (outside buildings)'] = round(float(((K != K0) & ~roof).sum() * A))
if WRITE:
    F = np.zeros((N, N, 3), np.float32)
    for ch, kind_ in enumerate((LAWN, ASPH, CONC)):
        m = K == kind_
        d = np.where(m, (ndi.distance_transform_edt(m) - 0.5) * MPP, -(ndi.distance_transform_edt(~m) - 0.5) * MPP).astype(np.float32)
        F[..., ch] = ndi.gaussian_filter(d, 0.8)
    dec = np.where(F.max(-1) > 0, F.argmax(-1) + 1, 0)
    log['decoded matches plan'] = round(float((dec == K)[K > 0].mean()), 4)
    size = 0
    for r in range(4, 8):
        for c in range(4, 8):
            out = np.clip(np.round(128 + F[(r - 4) * 1024:(r - 3) * 1024, (c - 4) * 1024:(c - 3) * 1024] * 80), 0, 255).astype(np.uint8)
            fn = f'{SURF}/{r}_{c}.webp'; Image.fromarray(out).save(fn, lossless=True, method=6); size += os.path.getsize(fn)
    log['blocks MB'] = round(size / 1e6, 2)
print(json.dumps(log, indent=1))
