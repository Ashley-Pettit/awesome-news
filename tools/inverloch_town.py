"""Inverloch town centre for the 3D weather, from OpenStreetMap (buildings, streets, parks, parking) plus Google Maps
business locations for the shop signs. Writes a compact JSON (local metres: x east, z south, origin the library)."""
import json, math, sys
OSM, PLACES, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
el = json.load(open(OSM))["elements"]
nodes = {e["id"]: (e["lat"], e["lon"]) for e in el if e["type"] == "node"}
LAT0, LON0 = -38.63351, 145.72774
KX = 111320 * math.cos(math.radians(LAT0))
def xy(lat, lon): return ((lon - LON0) * KX, -(lat - LAT0) * 110540)
def ring(w): return [xy(*nodes[n]) for n in w["nodes"] if n in nodes]
XMIN, XMAX, ZMIN, ZMAX = -260, 260, -210, 210
def inside_box(pts, pad=0): return any(XMIN - pad <= x <= XMAX + pad and ZMIN - pad <= z <= ZMAX + pad for x, z in pts)
def clip_pts(pts): return pts  # roads run off the edge: fine
def pip(pt, poly):
    x, z = pt; c = False; n = len(poly)
    for i in range(n):
        x1, z1 = poly[i]; x2, z2 = poly[(i + 1) % n]
        if (z1 > z) != (z2 > z) and x < (x2 - x1) * (z - z1) / ((z2 - z1) or 1e-9) + x1: c = not c
    return c
def seg_dist(p, a, b):
    ax, az = a; bx, bz = b; px, pz = p; dx, dz = bx - ax, bz - az; L = dx * dx + dz * dz
    t = 0 if L == 0 else max(0, min(1, ((px - ax) * dx + (pz - az) * dz) / L))
    qx, qz = ax + t * dx, az + t * dz
    return math.hypot(px - qx, pz - qz), (qx, qz), t
def poly_dist(p, pts):
    best = (1e9, None)
    for i in range(len(pts) - 1):
        d, q, _ = seg_dist(p, pts[i], pts[i + 1])
        if d < best[0]: best = (d, q)
    return best
def area(poly): return 0.5 * sum(poly[i][0] * poly[(i + 1) % len(poly)][1] - poly[(i + 1) % len(poly)][0] * poly[i][1] for i in range(len(poly)))
def centroid(poly): return (sum(p[0] for p in poly) / len(poly), sum(p[1] for p in poly) / len(poly))
r1 = lambda v: round(v, 1)
flat = lambda pts: [r1(c) for p in pts for c in p]

# ---- streets
WIDTH = {"abeckett street": 20, "williams street": 13, "ramsey boulevard": 13, "the esplanade": 11, "reilly street": 10}
roads, mains, paths = [], {}, []
for e in el:
    t = e.get("tags", {}); h = t.get("highway")
    if e["type"] != "way" or not h: continue
    pts = ring(e)
    if len(pts) < 2 or not inside_box(pts, 40): continue
    name = t.get("name", "").lower().replace("'", "").replace("a beckett", "abeckett")
    if h in ("footway", "path", "cycleway", "pedestrian", "steps", "corridor"):
        if h == "corridor": continue
        roads.append([2.4, 1, flat(pts)]); continue
    if h in ("secondary", "tertiary", "residential", "unclassified", "living_street", "secondary_link", "tertiary_link"):
        w = WIDTH.get(name, 9 if h in ("secondary", "tertiary") and t.get("oneway") != "yes" else 7.5 if t.get("oneway") == "yes" else 8)
        roads.append([w, 0, flat(pts)])
        if name in WIDTH: mains.setdefault(name, []).append(pts)
    elif h == "service":
        roads.append([4.5, 2, flat(pts)])
road_lines = [(r[0], [(r[2][i], r[2][i + 1]) for i in range(0, len(r[2]), 2)]) for r in roads if r[1] in (0, 2)]
main_lines = [pts for v in mains.values() for pts in v]

# ---- areas: parks and lawns, sports grounds, parking, the beach
areas = []
KIND = lambda t: (0 if t.get("leisure") in ("park", "garden", "playground", "dog_park") or t.get("landuse") in ("grass", "recreation_ground", "village_green")
                  else 1 if t.get("leisure") in ("pitch", "sports_centre") else 2 if t.get("amenity") == "parking" else 3 if t.get("natural") in ("beach", "sand") else None)
for e in el:
    t = e.get("tags", {})
    if e["type"] != "way" or "building" in t: continue
    k = KIND(t)
    if k is None: continue
    pts = ring(e)
    if len(pts) < 4 or not inside_box(pts): continue
    if pts[0] == pts[-1]: pts = pts[:-1]
    areas.append([k, flat(pts)])

# ---- buildings
H = {472789109: (7.6, 1), 472789110: (5.6, 1), 472789108: (6.2, 1), 383543325: (5.8, 4), 472789888: (7.5, 3), 472789100: (5.0, 0)}  # the Hub, the library, the hall, Foodworks, the church
blds = []
for e in el:
    t = e.get("tags", {})
    if e["type"] != "way" or "building" not in t: continue
    pts = ring(e)
    if len(pts) < 4 or not inside_box(pts): continue
    if pts[0] == pts[-1]: pts = pts[:-1]
    if area(pts) > 0: pts = pts[::-1]  # one winding for all
    b = t["building"]
    if e["id"] in H: h, kind = H[e["id"]]
    elif b == "roof": h, kind = 3.6, 5
    elif b == "church" or t.get("amenity") == "place_of_worship": h, kind = 7.5, 3
    elif b in ("retail", "commercial") or "shop" in t or t.get("amenity") in ("cafe", "restaurant", "pub", "fast_food", "bank", "pharmacy"): h, kind = 4.6, 0
    elif b in ("house", "terrace", "detached", "residential"): h, kind = 3.4, 2
    else:
        c = centroid(pts); near = poly_dist(c, sum(main_lines, [])) if main_lines else (99, None)
        near_main = min(poly_dist(c, l)[0] for l in main_lines) if main_lines else 99
        h, kind = (4.6, 0) if near_main < 45 and abs(area(pts)) > 120 else (3.4, 2) if abs(area(pts)) < 260 else (4.4, 1)
    if t.get("building:levels"): h = max(h, 3.4 * float(t["building:levels"].split(";")[0]) + 0.8)
    blds.append({"id": e["id"], "pts": pts, "h": h, "kind": kind, "name": t.get("name", "")})

# ---- businesses: Google Maps listings plus named shops on the map, each signed on its own shopfront
places = [(n, la, lo, ty) for n, _, la, lo, ty in json.load(open(PLACES))]
for e in el:
    t = e.get("tags", {})
    if e["type"] == "node" and t.get("name") and ("shop" in t or t.get("amenity") in ("cafe", "restaurant", "fast_food", "pub", "pharmacy", "bank")):
        places.append((t["name"], e["lat"], e["lon"], t.get("shop") or t.get("amenity")))
SKIP = {"Bluette", "Easypill"}
SHORT = {"TerryWhite Chemmart Inverloch": "TERRYWHITE CHEMMART", "Paul The Pieman Bakeries": "PAUL THE PIEMAN", "Paul the Pieman": "PAUL THE PIEMAN",
         "Dot and Lu Boutique Homewares": "DOT & LU", "INVERLOCH GENERAL STORE": "GENERAL STORE", "The Larder Inverloch": "THE LARDER",
         "Mookah Studio Inverloch": "MOOKAH", "A Slice of Paradise Bakery": "SLICE OF PARADISE", "The Beach Box Cafe Inverloch": "BEACH BOX CAFE",
         "The Invy Cafe Al Mare": "INVY CAFE", "Teepees Cafe & Bar": "TEEPEES", "Benny’s Inverloch": "BENNY'S", "The Local Inverloch": "THE LOCAL",
         "Sunni Rae Inverloch": "SUNNI RAE", "Bliss in Inverloch": "BLISS", "Serious Surf Stuff": "SERIOUS SURF STUFF", "Lime and Co Cantina Food van": None,
         "Coffee at Bev's": None, "Paperplay Store": "PAPERPLAY", "Southern Bazaar": "SOUTHERN BAZAAR", "Beachside Bargains": "BEACHSIDE BARGAINS",
         "Stockdale & Leggo Inverloch": "STOCKDALE & LEGGO", "Alex Scott & Staff": "ALEX SCOTT & STAFF", "Barry Plant Inverloch": "BARRY PLANT",
         "Homes & Acreage Bass Coast": "HOMES & ACREAGE", "Esplanade Hotel": None, "Esplanade Hotel - Inverloch": None, "Foodworks": "FOODWORKS", "FoodWorks": "FOODWORKS"}
PAL = {"bakery": 0, "cafe": 1, "restaurant": 1, "coffee_shop": 1, "tapas_restaurant": 1, "fast_food": 2, "pharmacy": 3, "supermarket": 4, "convenience_store": 4,
       "real_estate_agency": 5, "point_of_interest": 6, "clothing_store": 7, "womens_clothing_store": 7, "gift_shop": 8, "home_goods_store": 8, "candy_store": 2, "furniture_store": 6, "discount_store": 2}
signs, used = [], []
facade_cache = {}
def street_edge(b, p):
    """The building's edge that faces the nearest main street, and its outward normal."""
    best = None
    pts = b["pts"]; n = len(pts); c = centroid(pts)
    for i in range(n):
        a, bb = pts[i], pts[(i + 1) % n]; L = math.hypot(bb[0] - a[0], bb[1] - a[1])
        if L < 3: continue
        mid = ((a[0] + bb[0]) / 2, (a[1] + bb[1]) / 2)
        nx, nz = (bb[1] - a[1]) / L, -(bb[0] - a[0]) / L
        if (mid[0] - c[0]) * nx + (mid[1] - c[1]) * nz < 0: nx, nz = -nx, -nz  # outward
        dm = min((poly_dist(mid, l)[0] for l in main_lines), default=99)
        test = (mid[0] + nx * 4, mid[1] + nz * 4)
        if min((poly_dist(test, l)[0] for l in main_lines), default=99) > dm: continue  # faces away from the street
        dp = math.hypot(p[0] - mid[0], p[1] - mid[1]) if p else 0
        score = dm + dp * 0.25
        if best is None or score < best[0]: best = (score, a, bb, nx, nz, L, dm)
    return best
for name, la, lo, ty in places:
    if name in SKIP: continue
    text = SHORT.get(name, name.upper())
    if text is None: continue
    if any(text == u for u in used): continue
    p = xy(la, lo)
    if not (XMIN < p[0] < XMAX and ZMIN < p[1] < ZMAX): continue
    cand = [b for b in blds if pip(p, b["pts"])] or sorted([b for b in blds if b["kind"] in (0, 4, 1)], key=lambda b: poly_dist(p, b["pts"] + b["pts"][:1])[0])[:1]
    if not cand or poly_dist(p, cand[0]["pts"] + cand[0]["pts"][:1])[0] > 15 and not pip(p, cand[0]["pts"]): continue
    b = cand[0]; fe = street_edge(b, p)
    if not fe or fe[6] > 30: continue
    _, a, bb, nx, nz, L, _ = fe
    _, q, t = seg_dist(p, a, bb)
    w = min(7.5, max(3.5, len(text) * 0.42), L - 0.6)
    t = max(w / 2 / L, min(1 - w / 2 / L, t))
    q = (a[0] + (bb[0] - a[0]) * t, a[1] + (bb[1] - a[1]) * t)
    if any(math.hypot(q[0] - s[0], q[1] - s[1]) < (w + s[3]) / 2 + 0.3 for s in signs): continue  # two listings at one address: the first gets the sign
    signs.append([q[0], q[1], round(math.atan2(nx, nz), 3), round(w, 1), text, PAL.get(ty, 6), nx, nz])
    used.append(text); b["kind"] = 0 if b["kind"] == 2 else b["kind"]

# ---- verandahs: along the street side of shops on the main streets
ver = []
for b in blds:
    if b["kind"] not in (0, 4): continue
    pts = b["pts"]; n = len(pts); c = centroid(pts)
    for i in range(n):
        a, bb = pts[i], pts[(i + 1) % n]; L = math.hypot(bb[0] - a[0], bb[1] - a[1])
        if L < 4: continue
        mid = ((a[0] + bb[0]) / 2, (a[1] + bb[1]) / 2)
        nx, nz = (bb[1] - a[1]) / L, -(bb[0] - a[0]) / L
        if (mid[0] - c[0]) * nx + (mid[1] - c[1]) * nz < 0: nx, nz = -nx, -nz
        dm = min((poly_dist(mid, l)[0] for l in main_lines), default=99)
        if dm > 18: continue
        if min((poly_dist((mid[0] + nx * 4, mid[1] + nz * 4), l)[0] for l in main_lines), default=99) > dm - 2: continue
        if any(pip((mid[0] + nx * 1.5, mid[1] + nz * 1.5), o["pts"]) for o in blds if o is not b): continue
        ver.append([r1(a[0]), r1(a[1]), r1(bb[0]), r1(bb[1]), round(nx, 3), round(nz, 3)])

# shopfront and foyer glass on every wall that faces a main street (or the clock's plaza)
glass = []
for b in blds:
    if b["kind"] not in (0, 1, 4): continue
    pts = b["pts"]; n = len(pts); c = centroid(pts)
    for i in range(n):
        a, bb = pts[i], pts[(i + 1) % n]; L = math.hypot(bb[0] - a[0], bb[1] - a[1])
        if L < 4: continue
        mid = ((a[0] + bb[0]) / 2, (a[1] + bb[1]) / 2)
        nx, nz = (bb[1] - a[1]) / L, -(bb[0] - a[0]) / L
        if (mid[0] - c[0]) * nx + (mid[1] - c[1]) * nz < 0: nx, nz = -nx, -nz
        dm = min((poly_dist(mid, l)[0] for l in main_lines), default=99)
        if dm > 45: continue
        if min((poly_dist((mid[0] + nx * 4, mid[1] + nz * 4), l)[0] for l in main_lines), default=99) > dm - 1.5: continue
        glass.append([r1(a[0]), r1(a[1]), r1(bb[0]), r1(bb[1]), round(nx, 3), round(nz, 3), b["kind"]])
# signs sit on the verandah's front edge where there's a verandah, otherwise on the wall
for sg in signs:
    x, z, nx, nz = sg[0], sg[1], sg[6], sg[7]
    on = any(abs((x - v[0]) * v[4] + (z - v[1]) * v[5]) < 0.6 and abs(v[4] * nx + v[5] * nz) > 0.9 and seg_dist((x, z), (v[0], v[1]), (v[2], v[3]))[0] < 1 for v in ver)
    o = 3.15 if on else 0.12
    sg[:] = [r1(x + nx * o), r1(z + nz * o), sg[2], sg[3], sg[4], sg[5], 1 if on else 0]
# the Esplanade Hotel: two storeys, cream, on the corner (its map outline is lumped in with the shops' block)
HOTEL = xy(-38.6341667, 145.7288889)
hl = min(((poly_dist(HOTEL, l)[0], l) for l in main_lines), key=lambda t: t[0])[1]
_, hq = poly_dist(HOTEL, hl)
best = min(range(len(hl) - 1), key=lambda i: seg_dist(HOTEL, hl[i], hl[i + 1])[0])
hdir = math.atan2(hl[best + 1][0] - hl[best][0], hl[best + 1][1] - hl[best][1])
# ---- the clock: on the library side of A'Beckett, in front of the library (Google Maps: library 16 A'Beckett, opposite 5 and 7)
ab = [p for l in mains.get("abeckett street", []) for p in l]
CLOCK = (4.0, 17.0)
d, q = poly_dist(CLOCK, ab)
# ---- houses: the map has few homes, so streets away from the centre get houses either side, facing the road
houses = []
def free(p, r):
    if any(pip(p, b["pts"]) or poly_dist(p, b["pts"] + b["pts"][:1])[0] < r for b in blds): return False
    if any(a[0] in (0, 1, 2, 3) and pip(p, [(a[1][i], a[1][i + 1]) for i in range(0, len(a[1]), 2)]) for a in areas): return False
    if any(poly_dist(p, l)[0] < w / 2 + r for w, l in road_lines): return False
    if any(math.hypot(p[0] - h[0], p[1] - h[1]) < 15 for h in houses): return False
    if -95 < p[0] < 165 and -75 < p[1] < 135: return False  # the town centre is all mapped
    return XMIN < p[0] < XMAX and ZMIN < p[1] < ZMAX
k = 0
for w, l in road_lines:
    if w < 7: continue
    for i in range(len(l) - 1):
        a, bb = l[i], l[i + 1]; L = math.hypot(bb[0] - a[0], bb[1] - a[1])
        if L < 1: continue
        ux, uz = (bb[0] - a[0]) / L, (bb[1] - a[1]) / L
        s = 9.0
        while s < L - 6:
            for side in (1, -1):
                off = w / 2 + 11
                p = (a[0] + ux * s - uz * off * side, a[1] + uz * s + ux * off * side)
                k += 1
                if free(p, 4.5):
                    hw, hd = 10 + (k * 37 % 5), 11 + (k * 53 % 5)
                    houses.append([r1(p[0]), r1(p[1]), hw, hd, round(math.atan2(-uz * side, ux * side) if False else math.atan2(ux, uz), 3), k % 7])
            s += 21
# ---- trees: gums on the lawns and along A'Beckett, Norfolk pines on the foreshore
trees = []
for a in areas:
    if a[0] != 0: continue
    poly = [(a[1][i], a[1][i + 1]) for i in range(0, len(a[1]), 2)]
    xs, zs = [p[0] for p in poly], [p[1] for p in poly]
    n = 0
    for gx in range(int(min(xs)), int(max(xs)), 17):
        for gz in range(int(min(zs)), int(max(zs)), 19):
            p = (gx + (gz * 7 % 6), gz + (gx * 5 % 7))
            if pip(p, poly) and n < 14 and free_tree(p) if False else pip(p, poly) and n < 14:
                trees.append([r1(p[0]), r1(p[1]), 0]); n += 1
for l in mains.get("abeckett street", []):
    for i in range(len(l) - 1):
        a, bb = l[i], l[i + 1]; L = math.hypot(bb[0] - a[0], bb[1] - a[1]); ux, uz = (bb[0] - a[0]) / L, (bb[1] - a[1]) / L; s = 6
        while s < L:
            for side in (1, -1):
                p = (a[0] + ux * s - uz * 11.5 * side, a[1] + uz * s + ux * 11.5 * side)
                if not any(pip(p, b["pts"]) or poly_dist(p, b["pts"] + b["pts"][:1])[0] < 3 for b in blds) and math.hypot(p[0] - CLOCK[0], p[1] - CLOCK[1]) > 9:
                    trees.append([r1(p[0]), r1(p[1]), 1])
            s += 26
# ---- only the area round the clock: everything within R metres of it
R = 170
cx0, cz0 = CLOCK
nearc = lambda x, z, r=R: math.hypot(x - cx0, z - cz0) < r
blds_out = [b for b in blds if nearc(*centroid(b["pts"]))]
roads = [r for r in roads if any(nearc(r[2][i], r[2][i + 1], R + 40) for i in range(0, len(r[2]), 2))]
areas = [a for a in areas if any(nearc(a[1][i], a[1][i + 1], R + 30) for i in range(0, len(a[1]), 2))]
houses = [h for h in houses if nearc(h[0], h[1])]
trees = [t for t in trees if nearc(t[0], t[1])]
signs = [sg for sg in signs if nearc(sg[0], sg[1])]
ver = [v for v in ver if nearc(v[0], v[1])]
glass = [g for g in glass if nearc(g[0], g[1])]
# ---- shopfronts: each verandah'd street front split into separate shops, each with its own parapet, colour and windows
units = []
for vi, v in enumerate(ver):
    x1, z1, x2, z2, nx, nz = v; L = math.hypot(x2 - x1, z2 - z1)
    n = max(1, round(L / 7.5)); w = L / n
    for k in range(n):
        t0, t1 = k / n, (k + 1) / n
        ax, az, bx, bz = x1 + (x2 - x1) * t0, z1 + (z2 - z1) * t0, x1 + (x2 - x1) * t1, z1 + (z2 - z1) * t1
        h = (vi * 7 + k * 13) % 5
        name = ""
        for sg in signs:
            if seg_dist((sg[0] - nx * 3.15, sg[1] - nz * 3.15), (ax, az), (bx, bz))[0] < 1.2: name = sg[4]
        units.append([r1(ax), r1(az), r1(bx), r1(bz), nx, nz, [4.9, 5.4, 6.0, 5.1, 6.6][h], (vi * 3 + k * 5) % 9, (vi + k) % 3, name])
data = {"note": "Inverloch town centre. Map data (c) OpenStreetMap contributors, ODbL; business locations from Google Maps.",
        "b": [[round(b["h"], 1), b["kind"], flat(b["pts"])] for b in blds_out], "u": units,
        "r": roads, "a": areas, "s": signs, "v": ver, "h": houses, "t": trees, "g": glass, "ho": [r1(HOTEL[0]), r1(HOTEL[1]), round(hdir, 3)], "c": [CLOCK[0], CLOCK[1], round(math.atan2(-(q[0] - CLOCK[0]), -(q[1] - CLOCK[1])) if False else math.atan2(q[0] - CLOCK[0], q[1] - CLOCK[1]), 3)]}
json.dump(data, open(OUT, "w"), separators=(",", ":"), ensure_ascii=False)
print("buildings", len(blds), "roads", len(roads), "areas", len(areas), "signs", len(signs), "verandahs", len(ver), "houses", len(houses), "trees", len(trees), "bytes", len(json.dumps(data, separators=(",", ":"))))
print([s[4] for s in signs])
