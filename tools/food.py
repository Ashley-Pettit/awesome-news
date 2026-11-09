"""Food in the area: places to eat or drink around Moorooka, from OpenStreetMap (ODbL, credited in the app).

Run by .github/workflows/food.yml once a week. It asks the Overpass API for cafes, restaurants, takeaways, pubs, bars,
bakeries and the like within 2 km of the Moorooka shops, and writes them into app.html as the one line
`const MOO_FOOD = {...};`, so every copy of the app (and the private one) carries the list with no extra download.
"""
import json, math, os, re, sys, time, urllib.parse, urllib.request
from datetime import datetime, timezone, timedelta

HERE = os.path.dirname(os.path.abspath(__file__))
APP = os.path.join(HERE, "..", "app.html")
LAT, LON, R = -27.5345, 153.0240, 2000          # the Moorooka shops on Beaudesert Road, 2 km round
SERVERS = ["https://overpass-api.de/api/interpreter", "https://overpass.kumi.systems/api/interpreter",
           "https://maps.mail.ru/osm/tools/overpass/api/interpreter"]
Q = f"""[out:json][timeout:90];
(nwr["amenity"~"^(cafe|restaurant|fast_food|pub|bar|ice_cream|food_court|biergarten)$"](around:{R},{LAT},{LON});
 nwr["shop"~"^(bakery|pastry|coffee|bubble_tea)$"](around:{R},{LAT},{LON}););
out center tags;"""

KIND = {"cafe": "cafe", "restaurant": "restaurant", "fast_food": "takeaway", "food_court": "food court", "pub": "pub",
        "bar": "bar", "biergarten": "bar", "ice_cream": "ice cream", "bakery": "bakery", "pastry": "bakery",
        "coffee": "cafe", "bubble_tea": "bubble tea"}
DRINK = {"cafe", "pub", "bar", "bubble tea"}


def fetch():
    body = urllib.parse.urlencode({"data": Q}).encode()
    for attempt in range(3):
        for url in SERVERS:
            try:
                req = urllib.request.Request(url, data=body, headers={"User-Agent": "awesome-news-food/1.0 (github.com/Ashley-Pettit/awesome-news)"})
                with urllib.request.urlopen(req, timeout=120) as r:
                    return json.load(r)["elements"]
            except Exception as e:
                print("overpass", url, e, file=sys.stderr)
        time.sleep(20)
    sys.exit("Overpass didn't answer")


def nice(s):
    s = (s or "").split(";")[0].replace("_", " ").strip()
    return s[:1].upper() + s[1:] if s else ""


def place(el):
    t = el.get("tags", {})
    name = (t.get("name") or t.get("brand") or "").strip()
    if not name or t.get("disused") or t.get("access") == "private": return None
    kind = KIND.get(t.get("amenity") or t.get("shop"))
    if not kind: return None
    lat = el.get("lat") or el.get("center", {}).get("lat"); lon = el.get("lon") or el.get("center", {}).get("lon")
    if lat is None: return None
    ta, ins, outs = t.get("takeaway"), t.get("indoor_seating"), t.get("outdoor_seating")
    # Takeaway and dine in from the tags, else what that kind of place usually does
    take = True if ta in ("yes", "only") else False if ta == "no" else kind in ("takeaway", "cafe", "bakery", "ice cream", "bubble tea") or None
    dine = False if ta == "only" or (ins == "no" and outs in ("no", None) and kind == "takeaway") else \
           True if ins == "yes" or outs == "yes" or kind in ("restaurant", "cafe", "pub", "bar", "food court") else None
    if t.get("amenity") == "restaurant" and ta is None: take = None   # many do; don't promise it
    cuisine = ", ".join(nice(c) for c in (t.get("cuisine") or "").split(";")[:2] if c.strip())
    addr = " ".join(x for x in (t.get("addr:housenumber"), t.get("addr:street")) if x)
    d = 2 * 6371000 * math.asin(math.sqrt(math.sin(math.radians(lat - LAT) / 2) ** 2 + math.cos(math.radians(LAT)) * math.cos(math.radians(lat)) * math.sin(math.radians(lon - LON) / 2) ** 2))
    p = {"n": name, "k": kind, "la": round(lat, 5), "lo": round(lon, 5), "m": int(d)}
    if cuisine: p["c"] = cuisine
    if addr: p["a"] = addr
    if t.get("opening_hours"): p["h"] = t["opening_hours"][:160]
    if take is not None: p["t"] = 1 if take else 0
    if dine is not None: p["d"] = 1 if dine else 0
    if kind in DRINK or t.get("drink:coffee") == "yes" or "coffee" in (t.get("cuisine") or ""): p["dr"] = 1
    if t.get("delivery") == "yes": p["dl"] = 1
    w = t.get("website") or t.get("contact:website")
    if w and re.match(r"^https?://", w): p["w"] = w[:200]
    ph = t.get("phone") or t.get("contact:phone")
    if ph: p["p"] = ph.split(";")[0][:30]
    return p


def main():
    seen, out = set(), []
    for el in fetch():
        p = place(el)
        if not p: continue
        key = (p["n"].lower(), round(p["la"], 3), round(p["lo"], 3))
        if key in seen: continue
        seen.add(key); out.append(p)
    out.sort(key=lambda p: p["m"])
    if len(out) < 10: sys.exit(f"only {len(out)} places, keeping the old list")
    now = datetime.now(timezone(timedelta(hours=10))).strftime("%-d %b %Y")
    line = "  const MOO_FOOD = " + json.dumps({"at": now, "c": [LAT, LON], "p": out}, ensure_ascii=False, separators=(",", ":")) + ";  // tools/food.py (OpenStreetMap)"
    s = open(APP, encoding="utf-8").read()
    s2, n = re.subn(r"^  const MOO_FOOD = .*$", lambda m: line, s, count=1, flags=re.M)
    if not n: sys.exit("no MOO_FOOD line in app.html")
    open(APP, "w", encoding="utf-8").write(s2)
    print(len(out), "places")


if __name__ == "__main__":
    main()
