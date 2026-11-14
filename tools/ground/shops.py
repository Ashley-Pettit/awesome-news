"""Where each Moorooka business's sign goes (Ash, 14 November 2026: "Add known businesses to moorooka").

  python3 shops.py <town.json> <parcels.geojson> <out.json>

The businesses and their street addresses come from a web search (the list below). Each address's point and lot come from
the Queensland address register (PlanningCadastre/LandParcelPropertyFramework layer 0, queried by street and locality),
the building on that lot from the survey (town.json), and the wall of it that faces the named street from town.json's
streets: the stretch of that wall in front of the lot (strip shops share one building, and the surveyed outline takes in
the awning). The result is pasted into MOO_SHOPS in app.html.
"""
import json, math, base64, sys
import numpy as np
from shapely.geometry import Polygon, Point, LineString
T = json.load(open(sys.argv[1]))
meta = T['meta']; o, mpd = meta['origin'], meta['metresPerDegree']
to_m = lambda lat, lon: ((lon - o[0]) * mpd[0], -(lat - o[1]) * mpd[1])
names = T['names']
roads = [dict(cls=r[0], w=r[3] / 10, name=names[r[4]] if 0 <= r[4] < len(names) else '', p=np.array(r[5], float).reshape(-1, 2) / 10) for r in T['roads']]
bb = np.frombuffer(base64.b64decode(T['buildings']), np.int16).astype(np.int64)
blds = []; i = 0
while i < len(bb):
    k = int(bb[i]); hdr = bb[i:i + 7]; p = bb[i + 7:i + 7 + 2 * k].reshape(-1, 2) / 10; i += 7 + 2 * k
    if k >= 3: blds.append(dict(poly=Polygon(p), pts=p, eave=hdr[1] / 10, ridge=hdr[2] / 10, kind=int(hdr[6])))
lots = {}
for f in json.load(open(sys.argv[2]))['features']:
    lp = f['properties'].get('lotplan'); g = f['geometry']
    polys = g['coordinates'] if g['type'] == 'MultiPolygon' else [g['coordinates']]
    lots[lp] = Polygon([to_m(la, lo) for lo, la in polys[0][0]])
SHOPS = [  # name, what it is, address, street the shop faces, lot, address point
  ('Moorooka Post Office', 'Post office', '131 Beaudesert Road', 'Beaudesert Road', '11RP121435', (-27.531675, 153.023697)),
  ('Commonwealth Bank', 'Bank, in Moorooka Central', '132-146 Beaudesert Road', 'Beaudesert Road', '2SP278093', (-27.531662, 153.024351)),
  ('Salvos Stores', 'Op shop', '143 Beaudesert Road', 'Beaudesert Road', '58RP54159', (-27.532341, 153.024010)),
  ('Ethiopian Village', 'Ethiopian restaurant', '147 Beaudesert Road', 'Beaudesert Road', '60RP54159', (-27.532490, 153.024113)),
  ('Arhibu Restaurant', 'Eritrean and Ethiopian restaurant', '197-201 Beaudesert Road', 'Beaudesert Road', '68RP54159', (-27.533122, 153.024547)),
  ('Zeitoon', 'Persian and Afghan restaurant', '204 Beaudesert Road', 'Beaudesert Road', None, (-27.533020, 153.025208)),
  ('The Red Lion Hotel', 'Pub', '215 Beaudesert Road', 'Beaudesert Road', '73RP54159', (-27.533523, 153.024783)),
  ('Rising Sun International Church', 'Church (once Moorooka Church of Christ)', '108 Beaudesert Road', 'Beaudesert Road', '14RP46084', (-27.530477, 153.024069)),
  ('Starbucks', 'Coffee, drive-through', '1115 Ipswich Road', 'Ipswich Road', '2SP337717', (-27.534111, 153.014918)),
  ('Vizzeto Woodfire', 'Woodfired pizza', '398 Tarragindi Road', 'Tarragindi Road', '7SP116735', (-27.535658, 153.032769)),
  ('Moorooka Community Centre', 'Community hall', '40 Gainsborough Street', 'Gainsborough Street', '4RP119275', (-27.535569, 153.020833)),
]
def street_near(x, z, street):
    best = (1e9, None, None)
    for r in roads:
        if r['name'] != street or r['cls'] > 5: continue
        ls = LineString(r['p']); d = ls.distance(Point(x, z))
        if d < best[0]: q = ls.interpolate(ls.project(Point(x, z))); best = (d, (q.x, q.y), r['w'])
    return best
out = []
for name, what, addr, street, lp, (la, lo) in SHOPS:
    px, pz = to_m(la, lo); lot = lots.get(lp) if lp else None
    cands = []
    for b in blds:
        if lot is not None:
            ov = b['poly'].intersection(lot).area if b['poly'].intersects(lot) else 0
            if ov > 25: cands.append((ov, b))
        elif b['poly'].distance(Point(px, pz)) < 30 and b['poly'].area > 40: cands.append((b['poly'].area, b))
    if not cands: print('NO BUILDING', name); continue
    b = max(cands, key=lambda c: c[0])[1]
    P = np.array(b['poly'].exterior.coords)[:-1]; cx, cz = b['poly'].centroid.x, b['poly'].centroid.y
    best = None
    for k in range(len(P)):
        a, c = P[k], P[(k + 1) % len(P)]
        if lot is not None:  # only the stretch of the wall in front of this lot (strip shops share one building, and the
            # surveyed outline takes in the awning, so the front edge can stand out past the lot line)
            if LineString([a, c]).distance(lot) > 8: continue
            u = (c - a) / max(np.linalg.norm(c - a), 1e-9); Lf = np.linalg.norm(c - a)
            ts = [float(np.dot(np.array(q) - a, u)) for q in lot.exterior.coords]
            t0, t1 = max(0, min(ts)), min(Lf, max(ts))
            if t1 - t0 < 2: continue
            a, c = a + u * t0, a + u * t1
        L = math.hypot(*(c - a))
        if L < 3: continue
        mx, mz = (a + c) / 2; nx, nz = -(c[1] - a[1]) / L, (c[0] - a[0]) / L
        if b['poly'].contains(Point(mx + nx * 0.3, mz + nz * 0.3)): nx, nz = -nx, -nz
        d, q, w = street_near(mx, mz, street)
        if q is None or d > 45: continue
        face = ((q[0] - mx) * nx + (q[1] - mz) * nz) / max(d, 1e-6)
        if face < 0.6: continue
        score = d - 0.3 * min(L, 20)
        if best is None or score < best[0]: best = (score, a, c, (nx, nz), d, w, L)
    if best is None: print('NO WALL', name); continue
    _, a, c, (nx, nz), d, w, L = best
    out.append(dict(name=name, what=what, addr=addr, a=[round(a[0], 2), round(a[1], 2)], b=[round(c[0], 2), round(c[1], 2)], n=[round(nx, 4), round(nz, 4)],
                    kerb=round(d - w / 2, 2), across=round(d + w / 2, 2), wall=round(L, 1)))
    print(name, 'wall', round(L, 1), 'm, to centre line', round(d, 1), 'street width', w)
json.dump(out, open(sys.argv[3], 'w'), indent=1)
