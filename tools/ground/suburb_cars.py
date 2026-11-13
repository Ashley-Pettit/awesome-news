"""Moorooka beyond the designed square: parked cars to go with the wider streets and the designed ground.

  python3 suburb_cars.py <town.json before suburb_streets.py> <town.json> <work dir from suburb_ground.py>

- A car at the kerb of a street that suburb_streets.py widened moves out with the kerb (it keeps its 1.1 m).
- A car off the street stays only if all four corners and its middle are on asphalt or concrete in the designed
  ground (a driveway, a yard, a car park) and none is on a building.
- Driveways with no car get one now and then: beside the house where the driveway runs down the side (a little over
  half of them), in front of the garage where it ends at the house (about a third), facing the street.
The designed square's cars are left as they are.
"""
import base64, json, math, sys
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage as ndi
from scipy.spatial import cKDTree

OLD, TOWN, WORK = sys.argv[1:4]
t0 = json.load(open(OLD)); t = json.load(open(TOWN))
meta = t['meta']; SX, SZ = meta['size']
TX, TZ = SX / 16, SZ / 16
RES = 1024; MX, MZ = TX / RES, TZ / RES; CORE = 4 * RES
PILOT = (-SX / 2 + 4 * TX, -SZ / 2 + 4 * TZ, -SX / 2 + 8 * TX, -SZ / 2 + 8 * TZ)
ASPH, CONC = 2, 3
CL, CW = 4.4, 1.8


def h01(*k):
    v = 2166136261
    for x in k:
        v = ((v ^ (int(x) & 0xffffffff)) * 16777619) & 0xffffffff
    v ^= v >> 13; v = (v * 1274126177) & 0xffffffff; v ^= v >> 16
    return v / 4294967296


def in_pilot(x, z):
    return PILOT[0] < x < PILOT[2] and PILOT[1] < z < PILOT[3]


K = {}
for R in range(4):
    for C in range(4):
        if (R, C) != (1, 1):
            K[R, C] = np.load(f'{WORK}/K_{R}_{C}.npy')


def kind(x, z):
    a, b = (x + SX / 2) / MX, (z + SZ / 2) / MZ
    C, R = int(a // CORE), int(b // CORE)
    if (R, C) not in K:
        return -1
    return int(K[R, C][int(b - R * CORE), int(a - C * CORE)])


G = 0.5
GW, GH = int(SX / G) + 1, int(SZ / G) + 1
im = Image.new('1', (GW, GH)); d = ImageDraw.Draw(im)
bb = np.frombuffer(base64.b64decode(t['buildings']), np.int16).astype(np.int64); i = 0
while i < len(bb):
    k = int(bb[i]); p = bb[i + 7:i + 7 + 2 * k].reshape(-1, 2) / 10; i += 7 + 2 * k
    if k >= 3:
        d.polygon([((x + SX / 2) / G, (z + SZ / 2) / G) for x, z in p], fill=1)
bld = np.array(im)


def on_bld(x, z):
    a, b = int((x + SX / 2) / G), int((z + SZ / 2) / G)
    return 0 <= a < GW and 0 <= b < GH and bool(bld[b, a])


# street centre lines, sampled every metre: where, which way, how wide before and after
P, D, W0, W1, NM = [], [], [], [], []
for r_old, r in zip(t0['roads'], t['roads']):
    if r[0] > 3 or r[2] & 1:
        continue
    p = np.array(r[5], float).reshape(-1, 2) / 10
    for a, b_ in zip(p[:-1], p[1:]):
        L = float(np.hypot(*(b_ - a)))
        if L == 0:
            continue
        for f in np.arange(0, L, 1.0):
            P.append(a + (b_ - a) * f / L); D.append((b_ - a) / L); W0.append(r_old[3] / 10); W1.append(r[3] / 10); NM.append(r[4])
P = np.array(P); D = np.array(D); tree = cKDTree(P)

C = np.frombuffer(base64.b64decode(t['cars']), '<i2').reshape(-1, 4).astype(np.int64)
out, why = [], {}


def corners(x, z, a):
    hx, hz = math.sin(a), math.cos(a)
    return [(x + hx * u * CL / 2 + hz * v * CW / 2, z + hz * u * CL / 2 - hx * v * CW / 2) for u in (-1, 1) for v in (-1, 1)]


for qx, qz, qa, qc in C:
    x, z, a = qx / 4, qz / 4, math.radians(qa / 10)
    if in_pilot(x, z):
        out.append([qx, qz, qa, qc]); continue
    dd, j = tree.query([x, z]); w0, w1 = W0[j], W1[j]
    rel = dd - w0 / 2
    if -2.6 <= rel <= 0.5:
        if abs(w1 - w0) > 0.05:
            nx, nz = -D[j][1], D[j][0]
            sd = 1 if (x - P[j][0]) * nx + (z - P[j][1]) * nz >= 0 else -1
            x += nx * sd * (w1 - w0) / 2; z += nz * sd * (w1 - w0) / 2
            why['moved out with the kerb'] = why.get('moved out with the kerb', 0) + 1
        out.append([int(round(x * 4)), int(round(z * 4)), int(qa), int(qc)]); continue
    pts = corners(x, z, a) + [(x, z)]
    if any(on_bld(*q) for q in pts):
        why['in a building'] = why.get('in a building', 0) + 1; continue
    if any(kind(*q) not in (ASPH, CONC) for q in pts):
        why['off the paving'] = why.get('off the paving', 0) + 1; continue
    out.append([qx, qz, qa, qc])

# a car on some of the driveways that have none
have = cKDTree(np.array([[c[0] / 4, c[1] / 4] for c in out]))
added = 0
for R in range(4):
    for C_ in range(4):
        for f in json.load(open(f'{WORK}/frames_{R}_{C_}.json')):
            if f['cls'] != 'house' or f['du'] is None:
                continue
            o, u, v = np.array(f['o']), np.array(f['u']), np.array(f['v'])
            hv0 = f['hv'][0]; dv = f['dv']
            beside = dv > hv0 + 1
            if beside:
                V = hv0 + 2.6
                if h01(f['li'], 51) >= 0.55:
                    continue
            else:
                V = hv0 - 3.0
                if hv0 < 6.5 or h01(f['li'], 51) >= 0.33:
                    continue
            x, z = o + u * f['du'] + v * V
            if in_pilot(x, z) or have.query_ball_point([x, z], 3.0):
                continue
            a = math.atan2(-v[0], -v[1])        # facing the street
            pts = corners(x, z, a) + [(x, z)]
            if any(on_bld(*q) for q in pts) or any(kind(*q) not in (ASPH, CONC) for q in pts):
                continue
            col = int(h01(f['li'], 52) * 10)
            out.append([int(round(x * 4)), int(round(z * 4)), int(round(math.degrees(a) % 360 * 10)) % 3600, col])
            added += 1
t['cars'] = base64.b64encode(np.array(out, '<i2').tobytes()).decode()
t['counts']['cars'] = len(out)
json.dump(t, open(TOWN, 'w'), separators=(',', ':'))
print(json.dumps({'cars before': len(C), 'cars after': len(out), 'added on driveways': added, **why}, indent=1))
