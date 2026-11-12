"""Moorooka: park the cars where cars park, and keep fences off streets, verges, buildings and car parks.
Inference only: street lines, property boundaries, buildings and the designed ground plan (design.py).

  python3 cars_fences.py <work_dir from design.py> <parcels.geojson>     (rewrites town.json's cars and fences)

Cars at the kerb: set square to the street, 1.1 m in from the kerb, following its curve; none within 6 m of a cross
street's kerb, across a driveway crossover or a car park entry, or closer than 5.4 m to the car in front, and none
whose corners would sit over the kerb. Cars off the street: none in a building, on a verge or over a fence, and in the
designed square, all four corners on asphalt or concrete.
Fences: none across a carriageway, along street land, through a building, or through a car park (asphalt both sides).
"""
import base64, json, math, sys
import numpy as np
from PIL import Image, ImageDraw
from scipy.spatial import cKDTree
from scipy import ndimage as ndi

W_DIR, PARCELS = sys.argv[1], sys.argv[2]
TOWN = '/home/claude/awesome-news/town3d/moorooka'
t = json.load(open(TOWN + '/town.json'))
meta = t['meta']
SX, SZ = meta['size']
# the whole suburb at 0.5 m: buildings and property boundaries
G = 0.5
GW, GH = int(SX / G) + 1, int(SZ / G) + 1
gp = lambda x, z: ((x + SX / 2) / G, (z + SZ / 2) / G)
bb = np.frombuffer(base64.b64decode(t['buildings']), np.int16).astype(np.int64)
im = Image.new('1', (GW, GH)); d = ImageDraw.Draw(im); i = 0
while i < len(bb):
    k = int(bb[i]); p = bb[i + 7:i + 7 + 2 * k].reshape(-1, 2) / 10; i += 7 + 2 * k
    if k >= 3:
        d.polygon([gp(x, z) for x, z in p], fill=1)
bld = np.array(im)
bld_in = ndi.binary_erosion(bld, iterations=1)
o, mpd = meta['origin'], meta['metresPerDegree']
im = Image.new('1', (GW, GH)); d = ImageDraw.Draw(im)
for f in json.load(open(PARCELS))['features']:
    if f['properties'].get('parcel_typ') != 'Lot Type Parcel':
        continue
    g = f['geometry']; polys = g['coordinates'] if g['type'] == 'MultiPolygon' else [g['coordinates']]
    for P in polys:
        d.polygon([gp((lo - o[0]) * mpd[0], -(la - o[1]) * mpd[1]) for lo, la in P[0]], fill=1)
inlot = np.array(im)
del im, d


def at(mask, x, z):
    a, b = gp(x, z); a, b = int(a), int(b)
    return bool(mask[b, a]) if 0 <= a < GW and 0 <= b < GH else False


# the designed square (0.2 m)
TX, TZ = SX / 16, SZ / 16
X0, Z0 = -SX / 2 + 4 * TX, -SZ / 2 + 4 * TZ
K = np.load(W_DIR + '/K.npy'); NK = K.shape[0]; MPP = TX * 4 / NK


def kind(x, z):
    a, b = int((x - X0) / MPP), int((z - Z0) / MPP)
    return int(K[b, a]) if 0 <= a < NK and 0 <= b < NK else -1


# street centre lines, every 0.5 m
P, Wd, R, D, NM = [], [], [], [], []
for ri, r in enumerate(t['roads']):
    if r[0] > 3 or r[2] & 1:
        continue
    p = np.array(r[5], float).reshape(-1, 2) / 10
    for a, b in zip(p[:-1], p[1:]):
        L = math.hypot(*(b - a)); n = max(1, int(L / 0.5))
        for kk in range(n):
            P.append(a + (b - a) * kk / n); Wd.append(r[3] / 10); R.append(ri); D.append((b - a) / max(L, 1e-9)); NM.append(r[4])
P = np.array(P); Wd = np.array(Wd); R = np.array(R); D = np.array(D); NM = np.array(NM)
tree = cKDTree(P)


def inside_carriageway(x, z, margin=0.05):
    dd, j = tree.query([x, z])
    return dd <= Wd[j] / 2 - margin


# ---- cars
C = np.frombuffer(base64.b64decode(t['cars']), '<i2').reshape(-1, 4).astype(np.int64)
keep = []
kerb = []  # (road, side, s, index)
why = {}
CL, CW = 4.4, 1.8
for ci, (qx, qz, qa, qc) in enumerate(C):
    x, z, a = qx / 4, qz / 4, math.radians(qa / 10)
    dd, j = tree.query([x, z]); w = Wd[j]; rel = dd - w / 2
    hx, hz = math.sin(a), math.cos(a)
    if -2.6 <= rel <= 0.5:
        tx_, tz_ = D[j]
        if hx * tx_ + hz * tz_ < 0:
            tx_, tz_ = -tx_, -tz_
        nx, nz = -tz_, tx_
        sd = 1 if (x - P[j][0]) * nx + (z - P[j][1]) * nz >= 0 else -1
        off = w / 2 - 1.1 if rel > -1.8 else dd   # cars well out in a wide street (a parking lane) keep their line
        x, z = P[j][0] + nx * sd * off, P[j][1] + nz * sd * off
        a = math.atan2(tx_, tz_)
        hx, hz = tx_, tz_
        # corners on the road
        ok = all(inside_carriageway(x + hx * u * CL / 2 + nx * v * CW / 2, z + hz * u * CL / 2 + nz * v * CW / 2) for u in (-1, 1) for v in (-1, 1))
        if not ok:
            why['over the kerb'] = why.get('over the kerb', 0) + 1; continue
        # not in a junction: no other street's carriageway within 6 m
        near = tree.query_ball_point([x, z], 22)
        if any(NM[q] != NM[j] and math.hypot(P[q][0] - x, P[q][1] - z) < Wd[q] / 2 + 6 for q in near):
            why['in a junction'] = why.get('in a junction', 0) + 1; continue
        # not across a driveway or a car park entry (in the designed square)
        bx, bz = x + nx * sd * (1.1 + 0.4), z + nz * sd * (1.1 + 0.4)
        kb = kind(bx, bz)
        if kb == 2 or (kb == 3 and kind(bx + hx * 4, bz + hz * 4) == 1 and kind(bx - hx * 4, bz - hz * 4) == 1):
            why['across a driveway'] = why.get('across a driveway', 0) + 1; continue
        s = float(np.dot([x, z], [tx_, tz_]))
        kerb.append((R[j], sd if True else 0, s, ci, x, z, a))
        continue
    # off the street
    if rel < 6:
        why['on a verge'] = why.get('on a verge', 0) + 1; continue
    corners = [(x + hx * u * CL / 2 + hz * v * CW / 2, z + hz * u * CL / 2 - hx * v * CW / 2) for u in (-1, 1) for v in (-1, 1)]
    if any(at(bld, cx_, cz_) for cx_, cz_ in corners + [(x, z)]):
        why['in a building'] = why.get('in a building', 0) + 1; continue
    ks = [kind(cx_, cz_) for cx_, cz_ in corners + [(x, z)]]
    if ks[0] != -1 and any(k_ not in (2, 3) for k_ in ks):
        why['off the paving'] = why.get('off the paving', 0) + 1; continue
    keep.append((ci, x, z, a))
# spacing along each kerb
kerb.sort(key=lambda r: (r[0], r[1], r[2]))
last = {}
for rr, sd, s, ci, x, z, a in kerb:
    k_ = (rr, sd)
    if k_ in last and abs(s - last[k_][0]) < 5.4 and math.hypot(x - last[k_][1], z - last[k_][2]) < 5.4:
        why['too close'] = why.get('too close', 0) + 1; continue
    last[k_] = (s, x, z)
    keep.append((ci, x, z, a))

# ---- fences
F = np.frombuffer(base64.b64decode(t['fences']), '<i2').reshape(-1, 4).astype(np.int64)
fkeep = []
fwhy = {}
fence_segs = []
for fi, (x0, z0, x1, z1) in enumerate(F):
    ax, az, bx_, bz_ = x0 / 10, z0 / 10, x1 / 10, z1 / 10
    L = math.hypot(bx_ - ax, bz_ - az)
    n = max(2, int(L) + 1)
    pts = [(ax + (bx_ - ax) * q / (n - 1), az + (bz_ - az) * q / (n - 1)) for q in range(n)]
    if any(inside_carriageway(x, z, -0.3) for x, z in pts):
        fwhy['across a street'] = fwhy.get('across a street', 0) + 1; continue
    on_street = sum(not at(inlot, x, z) for x, z in pts)
    if on_street > 0.6 * n:
        fwhy['on street land'] = fwhy.get('on street land', 0) + 1; continue
    if sum(at(bld_in, x, z) for x, z in pts) > max(1, 0.25 * n):
        fwhy['through a building'] = fwhy.get('through a building', 0) + 1; continue
    if L > 0:
        nx, nz = -(bz_ - az) / L, (bx_ - ax) / L
        both = sum(kind(x + nx * 0.8, z + nz * 0.8) == 2 and kind(x - nx * 0.8, z - nz * 0.8) == 2 for x, z in pts)
        if both > 0.5 * n:
            fwhy['through a car park'] = fwhy.get('through a car park', 0) + 1; continue
    fkeep.append(fi); fence_segs.append((ax, az, bx_, bz_))

# off-street cars over a fence that stays
def seg_hit(px_, pz_, ax, az, bx_, bz_, r):
    dx, dz = bx_ - ax, bz_ - az; L2 = dx * dx + dz * dz or 1
    u = max(0, min(1, ((px_ - ax) * dx + (pz_ - az) * dz) / L2))
    return math.hypot(px_ - ax - dx * u, pz_ - az - dz * u) < r
if fence_segs:
    fs = np.array(fence_segs); mid = (fs[:, :2] + fs[:, 2:]) / 2; ftree = cKDTree(mid)
    half = np.hypot(fs[:, 2] - fs[:, 0], fs[:, 3] - fs[:, 1]) / 2
    final = []
    for ci, x, z, a in keep:
        hit = False
        for q in ftree.query_ball_point([x, z], 30):
            if half[q] + 2.4 < math.hypot(mid[q][0] - x, mid[q][1] - z):
                continue
            if seg_hit(x, z, *fs[q], 1.1) or seg_hit(x + math.sin(a) * 1.8, z + math.cos(a) * 1.8, *fs[q], 0.9) or seg_hit(x - math.sin(a) * 1.8, z - math.cos(a) * 1.8, *fs[q], 0.9):
                hit = True; break
        if hit:
            why['over a fence'] = why.get('over a fence', 0) + 1; continue
        final.append((ci, x, z, a))
    keep = final

out = []
for ci, x, z, a in sorted(keep):
    deg = (math.degrees(a) % 360) * 10
    out.append([int(round(x * 4)), int(round(z * 4)), int(round(deg)) % 3600, int(C[ci][3])])
t['cars'] = base64.b64encode(np.array(out, '<i2').tobytes()).decode()
t['fences'] = base64.b64encode(F[fkeep].astype('<i2').tobytes()).decode()
t['counts']['cars'] = len(out)
json.dump(t, open(TOWN + '/town.json', 'w'), separators=(',', ':'))
print(json.dumps({'cars before': len(C), 'cars after': len(out), 'cars removed': why, 'fences before': len(F), 'fences after': len(fkeep), 'fences removed': fwhy}, indent=1))
