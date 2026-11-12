"""Join up footpaths along each street (inference from the street data only).

town.json footpaths: {road index: [right, left]} in decimetres from the kerb to the path's centre; 0 none, -10 paved
frontage. Segments of one street are chained end to end, and along each side:
- main roads (class 0 to 2) are walkable the whole way on both sides;
- other streets: gaps under 60 m between walkable stretches are filled, a side walkable over 60% of its length is
  filled the whole way, and a lone path under 30 m on an otherwise bare side goes.
New paths take the street's usual distance from the kerb.
Usage: python3 paths_fix.py in.json out.json
"""
import json, sys
import numpy as np

src, dst = sys.argv[1], sys.argv[2]
t = json.load(open(src))
fp = t['footpaths']
roads = t['roads']
names = t['names']
P = {int(k): np.array(roads[int(k)][5], float).reshape(-1, 2) / 10 for k in fp}
length = {i: float(np.hypot(*np.diff(p, axis=0).T).sum()) for i, p in P.items()}
pos = [v for vals in fp.values() for v in vals if v > 0]
usual = int(np.median(pos)) if pos else 20

by_name = {}
for i in P:
    by_name.setdefault(roads[i][4], []).append(i)

changes = []
for nm, ids in by_name.items():
    # chain segments end to end
    ends = {i: (P[i][0], P[i][-1]) for i in ids}
    def touching(a, b):
        return min(np.hypot(*(x - y)) for x in ends[a] for y in ends[b]) < 2.0
    left = set(ids)
    while left:
        start = left.pop()
        chain = [(start, False)]
        # grow both ways
        for direction in (1, -1):
            while True:
                cur, rev = chain[-1] if direction == 1 else chain[0]
                tip = (P[cur][0] if rev else P[cur][-1]) if direction == 1 else (P[cur][-1] if rev else P[cur][0])
                nxt = None
                for j in list(left):
                    for k, e in enumerate(ends[j]):
                        if np.hypot(*(e - tip)) < 2.0:
                            # forward growth: j must start at tip (not reversed) or end at tip (reversed)
                            r = (k == 1) if direction == 1 else (k == 0)
                            nxt = (j, r)
                            break
                    if nxt:
                        break
                if not nxt:
                    break
                left.discard(nxt[0])
                if direction == 1:
                    chain.append(nxt)
                else:
                    chain.insert(0, nxt)
        cls = min(roads[i][0] for i, _ in chain)
        total = sum(length[i] for i, _ in chain)
        for side in (0, 1):  # 0: right of the chain's direction
            vals = [fp[str(i)][side ^ int(r)] for i, r in chain]
            lens = [length[i] for i, _ in chain]
            walk = [v != 0 for v in vals]
            new = list(vals)
            share = sum(l for l, w in zip(lens, walk) if w) / max(total, 1)
            if cls <= 2 or share >= 0.6:
                new = [v if v != 0 else usual for v in vals]
            else:
                # runs
                k = 0
                while k < len(walk):
                    m = k
                    while m < len(walk) and walk[m] == walk[k]:
                        m += 1
                    run_len = sum(lens[k:m])
                    if not walk[k] and k > 0 and m < len(walk) and run_len < 60:
                        for q in range(k, m):
                            new[q] = usual
                    if walk[k] and run_len < 30 and share < 0.3 and all(vals[q] > 0 for q in range(k, m)):
                        for q in range(k, m):
                            new[q] = 0
                    k = m
            for (i, r), v0, v1 in zip(chain, vals, new):
                if v0 != v1:
                    fp[str(i)][side ^ int(r)] = v1
                    changes.append((names[nm] if isinstance(nm, int) else nm, i, 'right' if side ^ int(r) == 0 else 'left', v0, v1, round(length[i])))

for c in changes:
    print(c)
print(len(changes), 'changes; usual offset', usual)
json.dump(t, open(dst, 'w'), separators=(',', ':'))

# ---- fit each new path inside its verge (kerb to property line), from the property boundaries
if len(sys.argv) > 3:
    sys.path.insert(0, sys.argv[3])
    from base import px, N
    lots = np.load(sys.argv[3] + '/lots.npy'); roof = np.load(sys.argv[3] + '/roof.npy')
    blocked = (lots > 0) | roof
    fixed = []
    for nm, i, sd, v0, v1, L in changes:
        if v1 <= 0:
            continue
        p = P[i]; w = roads[i][3] / 10; side = 1 if sd == 'right' else -1
        widths = []
        for a, b in zip(p[:-1], p[1:]):
            seg = b - a; l = np.hypot(*seg)
            if l == 0:
                continue
            dvec = seg / l; nrm = np.array([-dvec[1] * side, dvec[0] * side])
            for s in np.arange(1.0, l - 1.0, 2.0):
                c = a + dvec * s
                for o in np.arange(0, 8.01, 0.2):
                    q = c + nrm * (w / 2 + o)
                    x, y = px(*q)
                    if not (0 <= x < N and 0 <= y < N):
                        o = None; break
                    if blocked[int(y), int(x)]:
                        break
                if o is not None:
                    widths.append(o)
        if not widths:
            continue
        verge = float(np.median(widths))
        off = int(round(min(v1, max(9.7, verge * 10 / 2))))
        if verge < 1.6:
            off = 0
        if off != v1:
            fp[str(i)][0 if sd == 'right' else 1] = off
            fixed.append((nm, i, sd, round(verge, 1), off))
    for f in fixed:
        print('fit', f)
    json.dump(t, open(dst, 'w'), separators=(',', ':'))
