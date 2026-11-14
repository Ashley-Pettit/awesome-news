"""Moorooka's ground plan, tidied: straight edges, no stray patches, footpaths that join up. Inference only: the plan
itself (surface/*.webp), the street lines and footpath sides (town.json), property boundaries (parcels.geojson) and
buildings. No imagery. Every change is small and local; anything that is already sensible is left alone.

  python3 tidy.py <surface dir> <town.json> <parcels.geojson> <work dir> [--only R,C ...] [--write]

The suburb is done in 4 x 4 squares of blocks with 51 m (256 px) of the neighbours round each, like suburb_ground.py.
In order:
1. Specks: any patch under 1.5 m2 takes the kind round it.
2. Slivers: anything narrower than 0.6 m (three pixels) takes the kind beside it (a real grass strip by a kerb or a
   footpath is wider).
3. Stray patches, by what surrounds them (85% or more of their edge):
   - concrete inside a car park (asphalt, on a property) under 40 m2 becomes asphalt; on street land (a traffic
     island) it stays;
   - lawn under 6 m2 inside paving takes the paving;
   - asphalt under 10 m2 inside lawn becomes lawn;
   - concrete under 12 m2 inside lawn on a property, not against a building, becomes lawn (a patio or a path to a
     door touches the house);
   - on street land, a bit of concrete in the grass verge under 10 m long that is not part of a footpath becomes lawn.
4. Footpaths that end for no reason: along each street (joined end to end), each side's footpath is found across the
   verge every 0.5 m. A gap under 30 m between two stretches of footpath (8 m or more each, at much the same distance
   from the kerb) is filled with a straight path from the end of one to the start of the next, over grass on street
   land only (never over a road, a property or a building); a lone bit under 10 m in the grass with no footpath within
   30 m either way, touching neither the road nor a property, goes.
   Then block by block (a side of a street between one side street and the next), counting only stretches of 8 m or
   more as footpath (shorter pieces are crossovers): a footpath carries on across a break, and on to the side street's
   kerb at each end (so the paths either side of a side street line up to cross it), where that is 40 m or less and
   the footpath already runs along a third or more of the side, or 12 m or less where it runs along less. Past that
   nothing is laid: the plan gives no reason to think there is a footpath. An end still left in the grass, not at a
   crossover, gets a short link across the verge to the kerb. Concrete with a road just beyond it (a median, an
   island) is never taken for a footpath.
   Path is only ever laid where the line is not paved already (no concrete within 0.7 m of it): a crossover, or a path
   the scan could not measure, is left exactly as it is, so nothing that exists gets wider and a second run adds
   next to nothing.
5. Straight edges: each kind's signed distance is worked out at 0.2 m and smoothed over 0.28 m before it is stored, so a
   straight edge that was drawn as pixel steps comes out straight, not as a sawtooth or a wobble (the model draws the
   edge where two kinds' distances are equal, read between the pixels).
"""
import base64, json, math, os, sys
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage as ndi

args = sys.argv[1:]
SURF, TOWN, PARCELS, WORK = args[:4]
WRITE = '--write' in args
ONLY = [tuple(map(int, a.split(','))) for a in args[args.index('--only') + 1:] if ',' in a] if '--only' in args else None
os.makedirs(WORK, exist_ok=True)

t = json.load(open(TOWN))
meta = t['meta']; SX, SZ = meta['size']; o, mpd = meta['origin'], meta['metresPerDegree']
RES = 1024; TX, TZ = SX / 16, SZ / 16
MX, MZ = TX / RES, TZ / RES; MPP = (MX + MZ) / 2; A = MX * MZ
MARGIN = 256; N = 4 * RES + 2 * MARGIN
OTHER, LAWN, ASPH, CONC = 0, 1, 2, 3
PATH_W = 1.3

# ---------------------------------------------------------------- the plan, once
names = t['names']
roads = []
for i, r in enumerate(t['roads']):
    p = np.array(r[5], float).reshape(-1, 2) / 10
    roads.append(dict(i=i, cls=r[0], flags=r[2], w=r[3] / 10, name=r[4], p=p))
lots = []
for f in json.load(open(PARCELS))['features']:
    pr = f['properties']
    if pr.get('parcel_typ') != 'Lot Type Parcel':
        continue
    g = f['geometry']; polys = g['coordinates'] if g['type'] == 'MultiPolygon' else [g['coordinates']]
    lots.append([[np.array([((lo - o[0]) * mpd[0], -(la - o[1]) * mpd[1]) for lo, la in R]) for R in P] for P in polys])
lot_bb = np.array([[min(R[0][:, 0].min() for R in rr), min(R[0][:, 1].min() for R in rr),
                    max(R[0][:, 0].max() for R in rr), max(R[0][:, 1].max() for R in rr)] for rr in lots])
bb = np.frombuffer(base64.b64decode(t['buildings']), np.int16).astype(np.int64)
blds = []; i = 0
while i < len(bb):
    k = int(bb[i]); p = bb[i + 7:i + 7 + 2 * k].reshape(-1, 2) / 10; i += 7 + 2 * k
    if k >= 3:
        blds.append(p)
bld_bb = np.array([[p[:, 0].min(), p[:, 1].min(), p[:, 0].max(), p[:, 1].max()] for p in blds])


def load_square(R, C):
    """Kinds for the square and its margin, from the blocks (0 other, 1 lawn, 2 asphalt, 3 concrete)."""
    K = np.full((N, N), LAWN, np.uint8)
    r0, c0 = R * 4 * RES - MARGIN, C * 4 * RES - MARGIN
    for br in range(max(0, r0 // RES), min(16, (r0 + N - 1) // RES + 1)):
        for bc in range(max(0, c0 // RES), min(16, (c0 + N - 1) // RES + 1)):
            a = np.array(Image.open(f'{SURF}/{br}_{bc}.webp')).astype(np.int16)
            k = (a.argmax(2) + 1).astype(np.uint8); k[a.max(2) <= 128] = OTHER
            y0, x0 = br * RES - r0, bc * RES - c0
            ys, xs = slice(max(0, y0), min(N, y0 + RES)), slice(max(0, x0), min(N, x0 + RES))
            K[ys, xs] = k[ys.start - y0:ys.stop - y0, xs.start - x0:xs.stop - x0]
    return K


def mode_fill(K, hole, kinds=(OTHER, LAWN, ASPH, CONC)):
    """The pixels in `hole` take the most common kind among their nearest neighbours outside it."""
    if not hole.any():
        return K
    best = np.full(K.shape, -1.0, np.float32); out = K.copy()
    for k in kinds:
        m = ((K == k) & ~hole).astype(np.float32)
        s = ndi.uniform_filter(m, 7)
        upd = hole & (s > best)
        out[upd] = k; best[upd] = s[upd]
    # holes wider than the window: grow inwards from what was filled
    left = hole & (best <= 0)
    if left.any():
        idx = ndi.distance_transform_edt(left, return_distances=False, return_indices=True)
        out[left] = out[idx[0][left], idx[1][left]]
    return out


def ring_stats(lab, n, K, extra=None):
    """For each component 1..n: its area (px) and how many of the pixels round it are each kind."""
    ring = ndi.binary_dilation(lab > 0, iterations=1) & (lab == 0)
    # which component each ring pixel belongs to: the label next to it
    near = ndi.maximum_filter(lab, 3)
    area = ndi.sum(np.ones_like(lab), lab, index=np.arange(1, n + 1))
    hist = np.zeros((n + 1, 4))
    rl = near[ring]; rk = K[ring]
    np.add.at(hist, (rl, rk), 1)
    return area, hist[1:]


def encode(K):
    out = np.zeros(K.shape + (3,), np.uint8)
    for ch, kind_ in enumerate((LAWN, ASPH, CONC)):
        m = K == kind_
        inside = ndi.distance_transform_edt(m); outside = ndi.distance_transform_edt(~m)
        dd = np.where(m, (inside - 0.5) * MPP, -(outside - 0.5) * MPP).astype(np.float32)
        dd = ndi.gaussian_filter(dd, 1.4)   # 0.28 m: pixel steps along a straight edge are smoothed out, a 0.6 m grass strip stays
        out[..., ch] = np.clip(np.round(128 + dd * 80), 0, 255).astype(np.uint8)
    return out


def tidy(R, C):
    st = {}
    K0 = load_square(R, C); K = K0.copy()
    X0 = -SX / 2 + C * 4 * TX - MARGIN * MX; Z0 = -SZ / 2 + R * 4 * TZ - MARGIN * MZ
    X1, Z1 = X0 + N * MX, Z0 + N * MZ
    px = lambda x, z: ((x - X0) / MX, (z - Z0) / MZ)
    # property boundaries and buildings at the plan's 0.2 m
    im = Image.new('1', (N, N)); d = ImageDraw.Draw(im)
    for li in np.flatnonzero((lot_bb[:, 2] >= X0) & (lot_bb[:, 0] <= X1) & (lot_bb[:, 3] >= Z0) & (lot_bb[:, 1] <= Z1)):
        for P in lots[li]:
            d.polygon([px(x, z) for x, z in P[0]], fill=1)
            for h in P[1:]:
                d.polygon([px(x, z) for x, z in h], fill=0)
    inlot = np.array(im); street = ~inlot
    im = Image.new('1', (N, N)); d = ImageDraw.Draw(im)
    for bi in np.flatnonzero((bld_bb[:, 2] >= X0) & (bld_bb[:, 0] <= X1) & (bld_bb[:, 3] >= Z0) & (bld_bb[:, 1] <= Z1)):
        d.polygon([px(x, z) for x, z in blds[bi]], fill=1)
    roof = np.array(im)

    # 1. specks
    for k in (OTHER, LAWN, ASPH, CONC):
        lab, n = ndi.label(K == k)
        if not n:
            continue
        area = ndi.sum(np.ones_like(lab), lab, index=np.arange(1, n + 1)) * A
        small = np.zeros(n + 1, bool); small[1:] = area < 1.5
        hole = small[lab]
        st[f'specks {k}'] = int(small.sum())
        K = mode_fill(K, hole)
    # 2. slivers
    for k in (LAWN, ASPH, CONC):
        m = K == k
        keep = ndi.binary_opening(m, structure=np.ones((3, 3)))
        hole = m & ~keep
        st[f'sliver px {k}'] = int(hole.sum())
        K = mode_fill(K, hole, kinds=tuple(x for x in (OTHER, LAWN, ASPH, CONC) if x != k))
    # 3. stray patches
    near_roof = ndi.binary_dilation(roof, iterations=5)
    rules = [  # kind, what surrounds it, largest m2, where, becomes
        (CONC, ASPH, 40, 'lot', ASPH),
        (LAWN, None, 6, 'any', None),
        (ASPH, LAWN, 10, 'any', LAWN),
        (CONC, LAWN, 12, 'lot-free', LAWN),
    ]
    for k, around, big, where, to in rules:
        lab, n = ndi.label(K == k)
        if not n:
            continue
        area, hist = ring_stats(lab, n, K)
        tot = hist.sum(1) + 1e-9
        if around is None:
            share = (hist[:, ASPH] + hist[:, CONC]) / tot; to_k = np.where(hist[:, ASPH] >= hist[:, CONC], ASPH, CONC)
        else:
            share = hist[:, around] / tot; to_k = np.full(n, to)
        ok = (share >= 0.85) & (area * A < big)
        if where != 'any':
            lotshare = ndi.mean(inlot, lab, index=np.arange(1, n + 1))
            ok &= lotshare > 0.5
            if where == 'lot-free':
                ok &= ~(ndi.maximum(near_roof, lab, index=np.arange(1, n + 1)) > 0)
        sel = np.zeros(n + 1, bool); sel[1:] = ok
        tok = np.zeros(n + 1, np.uint8); tok[1:] = to_k
        m = sel[lab]
        K[m] = tok[lab][m]
        st[f'stray {k} in {around}'] = int(ok.sum())
    # 4. footpaths that end for no reason
    K, fst = join_paths(K, inlot, roof, X0, Z0)
    st.update(fst)
    return K0, K, street, inlot, roof, (X0, Z0), st


# ---------------------------------------------------------------- footpaths along each street
def chains():
    """Each street's carriageways (to class 3) joined end to end, as (points, width, name)."""
    by = {}
    for r in roads:
        if r['cls'] > 3 or r['flags'] & 1 or len(r['p']) < 2:
            continue
        by.setdefault((r['name'], round(r['w'], 1)), []).append(r['p'])
    out = []
    key = lambda q: (round(q[0] / 2), round(q[1] / 2))
    for (nm, w), segs in by.items():
        left = list(range(len(segs)))
        while left:
            line = [tuple(q) for q in segs[left.pop()]]
            grown = True
            while grown:
                grown = False
                for j in left:
                    s = [tuple(q) for q in segs[j]]
                    if key(s[0]) == key(line[-1]): line += s[1:]
                    elif key(s[-1]) == key(line[-1]): line += s[::-1][1:]
                    elif key(s[-1]) == key(line[0]): line = s[:-1] + line
                    elif key(s[0]) == key(line[0]): line = s[::-1][:-1] + line
                    else: continue
                    left.remove(j); grown = True; break
            out.append((np.array(line), w, nm))
    return out


CHAINS = chains()


def join_paths(K, inlot, roof, X0, Z0):
    st = {'paths joined': 0, 'path m added': 0.0, 'stubs removed': 0}
    H, W = K.shape
    STEP = 0.5
    offs = np.arange(0.0, 8.0, MPP)
    conc = K == CONC
    lab, _ = ndi.label(conc & ~inlot)
    paint = Image.new('1', (W, H)); dr = ImageDraw.Draw(paint)
    drop = set()
    for P, w, nm in CHAINS:
        if P[:, 0].max() < X0 - 20 or P[:, 0].min() > X0 + W * MX + 20 or P[:, 1].max() < Z0 - 20 or P[:, 1].min() > Z0 + H * MZ + 20:
            continue
        seg = np.diff(P, axis=0); L = np.hypot(*seg.T); cum = np.concatenate([[0], np.cumsum(L)])
        if cum[-1] < 20:
            continue
        s = np.arange(0, cum[-1], STEP)
        j = np.clip(np.searchsorted(cum, s, side='right') - 1, 0, len(L) - 1)
        f = (s - cum[j]) / np.maximum(L[j], 1e-9)
        c = P[j] + seg[j] * f[:, None]
        u = seg[j] / np.maximum(L[j], 1e-9)[:, None]
        nrm = np.stack([-u[:, 1], u[:, 0]], 1)
        for side in (1, -1):
            # across the verge: what is at each offset from the kerb, stopping at a property or a building
            q = c[:, None, :] + nrm[:, None, :] * side * (w / 2 + 0.3 + offs[None, :, None])
            col = ((q[..., 0] - X0) / MX).astype(int); row = ((q[..., 1] - Z0) / MZ).astype(int)
            ok = (col >= 0) & (col < W) & (row >= 0) & (row < H)
            colc, rowc = np.clip(col, 0, W - 1), np.clip(row, 0, H - 1)
            k = np.where(ok, K[rowc, colc], 255); blocked = ~ok | inlot[rowc, colc] | roof[rowc, colc]
            blocked = np.maximum.accumulate(blocked, axis=1)
            band_o = np.full(len(s), np.nan); band_w = np.zeros(len(s)); band_l = np.zeros(len(s), int)
            for a in range(len(s)):
                kk = k[a]; bl = blocked[a]
                o = 0
                while o < len(offs) and not bl[o]:
                    if kk[o] == CONC:
                        e = o
                        while e < len(offs) and kk[e] == CONC and not bl[e]:
                            e += 1
                        wid = (e - o) * MPP
                        beyond = kk[e:e + 10]   # a road just past it (within 2 m): a median or an island, not a footpath
                        if 0.8 <= wid <= 2.6 and (o == 0 or kk[o - 1] in (LAWN, OTHER)) and not (beyond == ASPH).any():
                            band_o[a] = offs[o] + wid / 2; band_w[a] = wid; band_l[a] = lab[rowc[a, o], colc[a, o]]
                        break
                    if kk[o] == ASPH and o > 2:
                        break
                    o += 1
            have = ~np.isnan(band_o)
            if have.sum() < 2:
                continue

            def paved(i0, oo):
                """For each sample from i0: is the line at offset oo already paved (within 0.7 m)? A crossover, or a path
                too wide or too narrow for the scan above. Those stretches are left exactly as they are."""
                io = (np.asarray(oo) / MPP).astype(int)
                return np.array([(k[i0 + j_, max(0, o_ - 3):o_ + 4] == CONC).any() for j_, o_ in enumerate(io)])
            # runs of footpath along this side
            idx = np.flatnonzero(have)
            breaks = np.flatnonzero(np.diff(idx) > 1)
            runs = [(idx[a], idx[b]) for a, b in zip(np.r_[0, breaks + 1], np.r_[breaks, len(idx) - 1])]
            # a footpath runs 8 m or more; shorter pieces are crossovers and the like, which a join may pass over
            paths = [r_ for r_ in runs if (r_[1] - r_[0]) * STEP >= 8]
            for (a0, a1), (b0, b1) in zip(paths[:-1], paths[1:]):
                gap = (b0 - a1) * STEP
                if gap > 30 or gap < 1:
                    continue
                oa, ob = np.median(band_o[max(a0, a1 - 10):a1 + 1]), np.median(band_o[b0:min(b1, b0 + 10) + 1])
                if abs(oa - ob) > 1.5:
                    continue
                ww = max(PATH_W, (band_w[a1] + band_w[b0]) / 2)
                t_ = np.linspace(0, 1, b0 - a1 + 1)
                oo = oa + (ob - oa) * t_
                pts = c[a1:b0 + 1] + nrm[a1:b0 + 1] * side * (w / 2 + 0.3 + oo[:, None])
                pc = ((pts[:, 0] - X0) / MX).astype(int); pr = ((pts[:, 1] - Z0) / MZ).astype(int)
                if (pc < 0).any() or (pc >= W).any() or (pr < 0).any() or (pr >= H).any():
                    continue
                # only across grass or garden on street land: not over a road, a property or a building
                if (K[pr, pc] == ASPH).any() or inlot[pr, pc].any() or roof[pr, pc].any():
                    continue
                pv = paved(a1, oo); laid = 0
                for m_ in range(len(pts) - 1):
                    if pv[m_] and pv[m_ + 1]:
                        continue
                    p0, p1 = pts[m_], pts[m_ + 1]
                    dvec = (p1 - p0) / max(np.hypot(*(p1 - p0)), 1e-9); nn = np.array([-dvec[1], dvec[0]]) * ww / 2
                    poly = [p0 + nn, p1 + nn, p1 - nn, p0 - nn]
                    dr.polygon([((x - X0) / MX, (z - Z0) / MZ) for x, z in poly], fill=1); laid += 1
                if laid:
                    st['paths joined'] += 1; st['path m added'] += laid * STEP
            # ---- block by block: a side of a street between one side street's mouth and the next
            def lay(i0, i1, oo, ww):
                """A path from sample i0 to i1 at offsets oo, laid only on street land (not a road, a property or a building)
                and only where the line is not paved already."""
                pts = c[i0:i1 + 1] + nrm[i0:i1 + 1] * side * (w / 2 + 0.3 + oo[:, None])
                pc = ((pts[:, 0] - X0) / MX).astype(int); pr = ((pts[:, 1] - Z0) / MZ).astype(int)
                good = (pc >= 0) & (pc < W) & (pr >= 0) & (pr < H)
                pcc, prc = np.clip(pc, 0, W - 1), np.clip(pr, 0, H - 1)
                good &= (K[prc, pcc] != ASPH) & ~inlot[prc, pcc] & ~roof[prc, pcc]
                got = 0.0; pv = paved(i0, oo)
                for m_ in range(len(pts) - 1):
                    if not (good[m_] and good[m_ + 1]) or (pv[m_] and pv[m_ + 1]):
                        continue
                    p0, p1 = pts[m_], pts[m_ + 1]
                    dvec = (p1 - p0) / max(np.hypot(*(p1 - p0)), 1e-9); nn = np.array([-dvec[1], dvec[0]]) * ww / 2
                    dr.polygon([((x - X0) / MX, (z - Z0) / MZ) for x, z in (p0 + nn, p1 + nn, p1 - nn, p0 - nn)], fill=1)
                    got += STEP
                return got

            def link(a):
                """A short link from the footpath at sample a straight across the verge to the kerb."""
                o1 = band_o[a]
                kk = k[a, :max(1, int(o1 / MPP))]
                if (kk == ASPH).any() or (kk == 255).any():
                    return False
                p0 = c[a] + nrm[a] * side * (w / 2 - 0.1); p1 = c[a] + nrm[a] * side * (w / 2 + 0.3 + o1)
                nn = u[a] * PATH_W / 2
                dr.polygon([((x - X0) / MX, (z - Z0) / MZ) for x, z in (p0 + nn, p1 + nn, p1 - nn, p0 - nn)], fill=1)
                return True

            mouth = (k[:, :11] == ASPH).mean(1) >= 0.7        # the first 2.2 m past the kerb is road: a side street
            flips = np.flatnonzero(np.diff(np.r_[1, mouth.astype(int), 1]))
            for b0, b1 in zip(flips[::2], flips[1::2] - 1):
                n_ = b1 - b0 + 1
                if n_ * STEP < 15 or not ok[b0:b1 + 1, 0].all():
                    continue
                mine = [(max(a0, b0), min(a1, b1)) for a0, a1 in runs if a1 >= b0 and a0 <= b1]
                long_ = [r_ for r_ in mine if (r_[1] - r_[0]) * STEP >= 8]   # footpath; shorter pieces are crossovers
                if not long_:
                    continue
                isp = np.zeros(n_, bool)
                for a0, a1 in long_:
                    isp[a0 - b0:a1 - b0 + 1] = True
                to = float(np.median(band_o[b0:b1 + 1][isp])); ww = max(PATH_W, float(np.median(band_w[b0:b1 + 1][isp])))
                at_end = lambda a0, a1, tail: float(np.clip(np.median(band_o[max(a0, a1 - 10):a1 + 1] if tail else band_o[a0:min(a1, a0 + 10) + 1]), to - 1.0, to + 1.0))
                # how far a footpath carries on over nothing: 40 m where it already runs along a third or more of the side,
                # 12 m where it runs along less. Past that the plan gives no reason to think there is one.
                reach = 40 if isp.mean() >= 1 / 3 else 12
                done = isp.copy(); laid = 0.0
                for (a0, a1), (c0, c1) in zip(long_[:-1], long_[1:]):       # a break between two stretches
                    if (c0 - a1) * STEP <= reach:
                        laid += lay(a1, c0, np.linspace(at_end(a0, a1, True), at_end(c0, c1, False), c0 - a1 + 1), ww); done[a1 - b0:c0 - b0 + 1] = True
                (f0, f1), (l0, l1) = long_[0], long_[-1]                    # and on to the side street's kerb at each end
                if 0 < (f0 - b0) * STEP <= reach:
                    laid += lay(b0, f0, np.full(f0 - b0 + 1, at_end(f0, f1, False)), ww); done[:f0 - b0] = True
                if 0 < (b1 - l1) * STEP <= reach:
                    laid += lay(l1, b1, np.full(b1 - l1 + 1, at_end(l0, l1, True)), ww); done[l1 - b0:] = True
                st['path m added'] += laid
                if laid:
                    st['sides carried on'] = st.get('sides carried on', 0) + 1
                # an end still left in the grass (not at a crossover or other paving) gets a short link to the kerb
                for a0, a1 in long_:
                    for end, step_ in ((a0, -1), (a1, 1)):
                        nxt = end + step_ * 2
                        if nxt < b0 or nxt > b1 or done[nxt - b0] or have[nxt] or paved(nxt, [band_o[end]])[0]:
                            continue
                        if link(end):
                            st['kerb links'] = st.get('kerb links', 0) + 1
            # a lone short stretch with no footpath near it either way goes
            for i_, (a0, a1) in enumerate(runs):
                ln = (a1 - a0) * STEP
                prev_gap = (a0 - runs[i_ - 1][1]) * STEP if i_ > 0 else 1e9
                next_gap = (runs[i_ + 1][0] - a1) * STEP if i_ + 1 < len(runs) else 1e9
                if ln < 10 and prev_gap > 30 and next_gap > 30:
                    ls = set(band_l[a0:a1 + 1]) - {0}
                    drop |= ls
    add = np.array(paint) & ~inlot & ~roof & (K != ASPH)
    K = K.copy(); K[add] = CONC
    if drop:
        # only pieces of footpath that are on their own in the grass: not a crossover (it touches the road) and small
        area = ndi.sum(np.ones_like(lab), lab, index=np.arange(1, lab.max() + 1)) * A
        touch_road = ndi.maximum(ndi.binary_dilation(K == ASPH, iterations=2), lab, index=np.arange(1, lab.max() + 1)) > 0
        touch_lot = ndi.maximum(ndi.binary_dilation(inlot, iterations=2) & (K != LAWN), lab, index=np.arange(1, lab.max() + 1)) > 0
        rm = np.zeros(lab.max() + 1, bool)
        for l_ in drop:
            if area[l_ - 1] < 15 and not touch_road[l_ - 1] and not touch_lot[l_ - 1]:
                rm[l_] = True
        K[rm[lab] & ~add] = LAWN
        st['stubs removed'] = int(rm.sum())
    st['path m added'] = round(st['path m added'])
    return K, st


if __name__ == '__main__':
    squares = ONLY or [(R, C) for R in range(4) for C in range(4)]
    for R, C in squares:
        K0, K, street, inlot, roof, org, st = tidy(R, C)
        ch = (K != K0)[MARGIN:-MARGIN, MARGIN:-MARGIN]
        print(json.dumps({'square': [R, C], 'changed m2': round(float(ch.sum() * A)), **st}), flush=True)
        np.save(f'{WORK}/K_{R}_{C}.npy', K[MARGIN:-MARGIN, MARGIN:-MARGIN]); np.save(f'{WORK}/K0_{R}_{C}.npy', K0[MARGIN:-MARGIN, MARGIN:-MARGIN])
        if WRITE:
            F = encode(K)[MARGIN:-MARGIN, MARGIN:-MARGIN]
            for r in range(4):
                for c in range(4):
                    Image.fromarray(F[r * RES:(r + 1) * RES, c * RES:(c + 1) * RES]).save(f'{SURF}/{R * 4 + r}_{C * 4 + c}.webp', lossless=True, method=4)
