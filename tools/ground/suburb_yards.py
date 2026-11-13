"""Moorooka's backyards: what stands in them, for the model to draw near the camera (town3d/moorooka/yards.bin).

  python3 suburb_yards.py <town.json> <work dir from suburb_ground.py> <surface dir> <pools.json> <yards.bin>

Pools are real: read off the aerial photograph (scripts/moorooka/find_pools.py in ai-forge). Everything else is the
usual thing for a Brisbane house block, placed by rule on the ground plan, never on a building, the driveway, a path
or a pool, and clear of trees and the fences on the boundaries. Which house gets which is decided by the property's
own number, so it is the same every time:
- a clothes line (a rotary one) out the back on most;
- a garden shed in a back corner on some (not where there is already an outbuilding);
- a trampoline, swings or a cubby house on a few;
- a rainwater tank beside the house on some;
- on a patio, an outdoor table and chairs and often a barbecue;
- wheelie bins beside the house, a letterbox at the front, shrubs in the front garden bed;
- a low front fence on about a third, with gaps for the driveway and the path;
- now and then a dog in the yard.

Each thing is six 16-bit numbers: kind, x and z (decimetres), angle (tenths of a degree), and two sizes (see KIND).
"""
import base64, json, math, sys
from collections import defaultdict
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

TOWN, WORK, SURF, POOLS, OUT = sys.argv[1:6]
KIND = dict(pool=1, pool_round=2, clothesline=3, shed=4, trampoline=5, tank=6, bbq=7, setting=8, swings=9, bins=10,
            letterbox=11, shrubs=12, fence=13, cubby=14, dog=17)
OTHER, LAWN, ASPH, CONC = 0, 1, 2, 3
t = json.load(open(TOWN))
meta = t['meta']; SX, SZ = meta['size']
TX, TZ = SX / 16, SZ / 16
RES = 1024
MX, MZ = TX / RES, TZ / RES
CORE = 4 * RES


def h01(*k):
    v = 2166136261
    for x in k:
        v = ((v ^ (int(x) & 0xffffffff)) * 16777619) & 0xffffffff
    v ^= v >> 13; v = (v * 1274126177) & 0xffffffff; v ^= v >> 16
    return v / 4294967296


# the ground plan for the whole suburb at 0.2 m, square by square (the designed square decoded from its blocks)
K = {}
for R in range(4):
    for C in range(4):
        if (R, C) == (1, 1):
            k = np.zeros((CORE, CORE), np.uint8)
            for r in range(4):
                for c in range(4):
                    a = np.asarray(Image.open(f'{SURF}/{R * 4 + r}_{C * 4 + c}.webp').convert('RGB')).astype(np.int16)
                    k[r * RES:(r + 1) * RES, c * RES:(c + 1) * RES] = np.where(a.max(-1) > 128, a.argmax(-1) + 1, 0)
            K[R, C] = k
        else:
            K[R, C] = np.load(f'{WORK}/K_{R}_{C}.npy')

# buildings and trees, on a 0.5 m map of the whole suburb
G = 0.5
GW, GH = int(SX / G) + 1, int(SZ / G) + 1
from PIL import ImageDraw
im = Image.new('1', (GW, GH)); d = ImageDraw.Draw(im)
bb = np.frombuffer(base64.b64decode(t['buildings']), np.int16).astype(np.int64)
i = 0
outb = []
while i < len(bb):
    k = int(bb[i]); fl = int(bb[i + 6]); p = bb[i + 7:i + 7 + 2 * k].reshape(-1, 2) / 10; i += 7 + 2 * k
    if k >= 3:
        d.polygon([((x + SX / 2) / G, (z + SZ / 2) / G) for x, z in p], fill=1)
        if fl & 3 == 1:
            outb.append(p.mean(0))
roof = ndi.binary_dilation(np.array(im), iterations=1)
trees = np.frombuffer(base64.b64decode(t['trees']), np.int16).reshape(-1, 3)[:, :2] / 4
from scipy.spatial import cKDTree
ttree = cKDTree(trees)
otree = cKDTree(np.array(outb)) if outb else None
pools = json.load(open(POOLS))
ptree = cKDTree(np.array([[p['x'], p['z']] for p in pools])) if pools else None


def kind_at(x, z):
    a, b = (x + SX / 2) / MX, (z + SZ / 2) / MZ
    C, R = int(a // CORE), int(b // CORE)
    if not (0 <= C < 4 and 0 <= R < 4):
        return -1
    return int(K[R, C][int(b - R * CORE), int(a - C * CORE)])


def on_roof(x, z):
    a, b = int((x + SX / 2) / G), int((z + SZ / 2) / G)
    return 0 <= a < GW and 0 <= b < GH and bool(roof[b, a])


placed = []          # (x, z, r) of what has gone in, so nothing stands in anything else
ptree_placed = None


def free(x, z, r, kinds=(LAWN, OTHER), tree_r=1.4):
    """Room for something of radius r: the right ground under it, no building, pool, tree trunk or other thing."""
    for a in np.linspace(0, 2 * math.pi, 9)[:-1]:
        for f in (0, 0.55, 1.0):
            px, pz = x + math.cos(a) * r * f, z + math.sin(a) * r * f
            if kind_at(px, pz) not in kinds or on_roof(px, pz):
                return False
    if ptree is not None and ptree.query_ball_point([x, z], r + 2.0):
        return False
    if ttree.query_ball_point([x, z], r * 0.6 + tree_r):
        return False
    if any(math.hypot(x - qx, z - qz) < r + qr + 0.3 for qx, qz, qr in placed[-40:]):
        return False
    return True


out = []


def first_free(cands, r, kinds=(LAWN, OTHER), tree_r=1.4):
    """The first of the places (U, V on the current property) with room for something of radius r, as x, z."""
    for U, V in cands:
        x, z = P(U, V)
        if free(x, z, r, kinds, tree_r):
            return float(x), float(z)
    return None


def add(kind, x, z, ang=0.0, p1=0, p2=0, r=0.0):
    out.append([KIND[kind], int(round(x * 10)), int(round(z * 10)), int(round((math.degrees(ang) % 360) * 10)) % 3600, int(p1), int(p2)])
    if r:
        placed.append((x, z, r))


stats = defaultdict(int)
for p in pools:
    add('pool_round' if p['r'] > 0.5 else 'pool', p['x'], p['z'], math.radians(p['a']), round(p['l'] * 100), round(p['w'] * 100))
    stats['pools'] += 1

frames = []
for R in range(4):
    for C in range(4):
        frames += json.load(open(f'{WORK}/frames_{R}_{C}.json'))
for f in frames:
    li = f['li']
    o, u, v = np.array(f['o']), np.array(f['u']), np.array(f['v'])
    P = lambda U, V: o + u * U + v * V
    heading = lambda dU, dV: math.atan2(*(u * dU + v * dV))   # model heading (0 faces +z), as MeshBuilder.frame takes it
    lu0, lu1 = f['lu']; hu0, hu1 = f['hu']; hv0, hv1 = f['hv']; lv1 = f['lv1']
    du, dw = f['du'], f['dw']
    cu = (hu0 + hu1) / 2
    back = lv1 - hv1
    placed = placed[-200:]
    if f['cls'] == 'units':
        # units: bins along the shared driveway, and that is all
        if du is not None:
            x, z = P(du + (dw / 2 + 0.5) * (1 if du < cu else -1), max(1.2, hv0 - 1.0))
            add('bins', x, z, heading(-1, 0) if du < cu else heading(1, 0), r=0.8)
        continue
    # wheelie bins beside the house on the driveway side, towards the front
    if h01(li, 21) < 0.85:
        left = du is not None and du < cu
        got = first_free([(hu0 - g if left else hu1 + g, V) for V in np.arange(hv0 + 0.8, hv1, 1.2) for g in (0.7, 1.1, 1.6)], 0.5, (LAWN, OTHER, CONC))
        if got:
            add('bins', *got, heading(1 if left else -1, 0), r=0.6); stats['bins'] += 1
    # a letterbox at the front boundary, beside the driveway or the path
    if h01(li, 22) < 0.9:
        U = (du + (dw / 2 + 0.7) * (1 if cu > du else -1)) if du is not None else cu + 1.0
        if lu0 + 0.5 < U < lu1 - 0.5:
            x, z = P(U, 0.45)
            if free(x, z, 0.25, (LAWN, OTHER, CONC)):
                add('letterbox', x, z, heading(0, -1), r=0.3); stats['letterboxes'] += 1
    # shrubs in the front garden bed
    if f['bed'] and hu1 - hu0 > 2:
        x0, z0 = P(hu0 + 0.3, hv0 - 0.75); x1, z1 = P(hu1 - 0.3, hv0 - 0.75)
        add('shrubs', x0, z0, math.atan2(x1 - x0, z1 - z0), round(math.hypot(x1 - x0, z1 - z0) * 100), li % 30000)
        stats['beds'] += 1
    # a low front fence, with gaps for the driveway and the path
    if h01(li, 23) < 0.33 and lu1 - lu0 > 6:
        gaps = []
        if du is not None:
            gaps.append((du - dw / 2 - 0.3, du + dw / 2 + 0.3))
        if f['path']:
            gaps.append((cu - 0.8, cu + 0.8))
        style = int(h01(li, 24) * 4)
        a0 = lu0 + 0.15
        for g0, g1 in sorted(gaps) + [(lu1 - 0.15, lu1)]:
            if g0 - a0 >= 1.0:
                x0, z0 = P(a0, 0.2); x1, z1 = P(g0, 0.2)
                add('fence', x0, z0, style * math.pi / 180, round(x1 * 10), round(z1 * 10))
            a0 = max(a0, g1)
        stats['front fences'] += 1
    # a rainwater tank beside the house, on the side away from the driveway
    if h01(li, 25) < 0.3:
        side = 1 if (du is not None and du < cu) else -1
        got = first_free([(hu1 + g if side > 0 else hu0 - g, V) for V in np.arange(hv1 - 1.0, hv0, -1.5) for g in (1.0, 1.4)], 0.9)
        if got:
            add('tank', *got, 0, 90, 200 if h01(li, 26) < 0.6 else 160, r=0.95); stats['tanks'] += 1
    if back < 5:
        continue
    # on the patio (or the lawn just past it): a table and chairs, and a barbecue
    if f['patio']:
        if h01(li, 27) < 0.6:
            got = first_free([(cu + du_, V) for V in (hv1 + 1.8, hv1 + 2.3, hv1 + 3.4) for du_ in (0, -1.5, 1.5)], 1.0, (CONC, LAWN), tree_r=0.6)
            if got:
                add('setting', *got, heading(0, 1), r=1.1); stats['settings'] += 1
        if h01(li, 28) < 0.5:
            got = first_free([(cu + s_ * 2.6, V) for V in (hv1 + 1.0, hv1 + 1.6) for s_ in (1, -1)], 0.6, (CONC, LAWN), tree_r=0.6)
            if got:
                add('bbq', *got, heading(0, 1), r=0.7); stats['bbqs'] += 1
    # out the back: a clothes line, a shed, play things, a dog
    yard = [(U, V) for V in np.arange(hv1 + 3.5, lv1 - 2.0, 1.5) for U in np.arange(lu0 + 2.2, lu1 - 2.0, 1.5)]
    order = sorted(yard, key=lambda q: h01(li, int(q[0] * 10), int(q[1] * 10)))
    def put(kind, r, chance, salt, ang=None, p1=0, p2=0):
        if h01(li, salt) >= chance:
            return False
        for U, V in order:
            x, z = P(U, V)
            if free(x, z, r):
                add(kind, x, z, heading(0, -1) if ang is None else ang, p1, p2, r=r); stats[kind] += 1
                return True
        return False
    put('clothesline', 2.2, 0.72, 31, ang=h01(li, 32) * math.pi, p1=round(200 + h01(li, 33) * 60))
    has_shed = otree is not None and any(
        (lu0 - 1 <= float(np.dot(np.array(q) - o, u)) <= lu1 + 1) and (hv1 <= float(np.dot(np.array(q) - o, v)) <= lv1 + 1)
        for q in otree.data[otree.query_ball_point(P(cu, (hv1 + lv1) / 2), max(lu1 - lu0, back))])
    if not has_shed and h01(li, 34) < 0.45 and back >= 8:
        for U in ((lu0 + 1.6, lu1 - 1.6) if h01(li, 35) < 0.5 else (lu1 - 1.6, lu0 + 1.6)):
            x, z = P(U, lv1 - 1.5)
            if free(x, z, 1.4):
                add('shed', x, z, heading(0, -1), 240, 190, r=1.5); stats['sheds'] += 1
                break
    put('trampoline', 2.2, 0.14, 36, p1=180)
    put('swings', 2.4, 0.07, 37, ang=heading(1, 0))
    put('cubby', 1.6, 0.05, 38)
    put('dog', 0.7, 0.1, 39, ang=h01(li, 40) * 2 * math.pi, p1=int(h01(li, 41) * 5))

arr = np.array(out, '<i2')
arr.tofile(OUT)
print(json.dumps({'things': len(out), 'bytes': arr.nbytes, **stats}, indent=1))
