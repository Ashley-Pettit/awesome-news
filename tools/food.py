"""Food in the area: places to eat or drink around Moorooka, from OpenStreetMap (ODbL, credited in the app).

Run by .github/workflows/food.yml once a week. It asks the Overpass API for cafes, restaurants, takeaways, pubs, bars,
bakeries and the like within 2 km of the Moorooka shops, and writes them into app.html as the one line
`const MOO_FOOD = {...};`, so every copy of the app (and the private one) carries the list with no extra download.
"""
import html as H, json, math, os, re, sys, time, urllib.parse, urllib.request
from datetime import datetime, timezone, timedelta

HERE = os.path.dirname(os.path.abspath(__file__))
APP = os.path.join(HERE, "..", "app.html")
EDITS = os.path.join(HERE, "..", "local", "food-edits.json")   # Admin's ticks in the app ("Delivers", order link, phone), by place id
UA = "Mozilla/5.0 (compatible; awesome-news-food/1.0; +https://github.com/Ashley-Pettit/awesome-news)"
# Chains that take orders and deliver through their own website
BRANDS = {r"^domino'?s": "https://www.dominos.com.au/", r"^pizza hut": "https://www.pizzahut.com.au/", r"^red rooster": "https://www.redrooster.com.au/"}
APPS = re.compile(r"ubereats\.com|doordash\.com|menulog\.com|deliveroo", re.I)
# Online ordering systems restaurants use for their own orders (pickup or delivery)
ORDERING = re.compile(r"order|bopple|mryum|meandu|hungryhungry|abacus|tabsquare|mobi2go|square\.site|squareup\.com/store|gloriafood|foodbooking|tuckerfox|ordermate|hey ?you|orderup|deliverect|liven|chownow|toasttab|flipdish|quickorder|menu-?online", re.I)
DELIVER = re.compile(r"\b(?:we deliver|home delivery|free delivery|delivery (?:available|area|zone|radius|fee|hours|service)|deliver(?:ing)? to|order (?:online )?for delivery|delivery (?:or|and|&) (?:pick ?up|takeaway|collection)|(?:pick ?up|takeaway|collection) (?:or|and|&) delivery)\b", re.I)
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
    p = {"id": el["type"][0] + str(el["id"]), "n": name, "k": kind, "la": round(lat, 5), "lo": round(lon, 5), "m": int(d)}
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


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html"})
    with urllib.request.urlopen(req, timeout=15) as r:
        if "html" not in (r.headers.get("Content-Type") or "html"): return "", r.geturl()
        return r.read(1_500_000).decode("utf-8", "replace"), r.geturl()


def check_site(url):
    """Read a place's own website: does it deliver itself, and where do you order? -> {"dd": 1, "ol": url} / {"va": 1} / {}"""
    if re.search(r"facebook\.com|instagram\.com|tiktok\.com|google\.", url, re.I): return {}
    out, pages, seen = {}, [url], set()
    while pages and len(seen) < 3:
        u = pages.pop(0)
        if u in seen: continue
        seen.add(u)
        try: page, final = get(u)
        except Exception as e:
            print("  site", u, e, file=sys.stderr); continue
        text = re.sub(r"\s+", " ", H.unescape(re.sub(r"(?is)<(script|style|noscript)[^>]*>.*?</\1>|<[^>]+>", " ", page)))
        links = [(H.unescape(h), H.unescape(re.sub(r"<[^>]+>", " ", t)).strip()) for h, t in re.findall(r'(?is)<a\b[^>]*href=["\']([^"\'#]+)["\'][^>]*>(.*?)</a>', page)]
        if any(APPS.search(h) for h, _ in links): out["va"] = 1
        host = urllib.parse.urlparse(final).netloc
        for h, t in links:
            full = urllib.parse.urljoin(final, h)
            if not full.startswith("http") or APPS.search(full): continue
            if re.search(r"\border(?:ing)?\s*(?:online|now|here|for (?:pick ?up|delivery))|\bonline order|\bdelivery\b", t, re.I) or (ORDERING.search(full) and urllib.parse.urlparse(full).netloc != host):
                out.setdefault("ol", full[:200])
                if urllib.parse.urlparse(full).netloc == host and len(seen) + len(pages) < 3: pages.append(full)
        if DELIVER.search(text):
            # "delivery" talk that's only about Uber Eats and the like isn't their own delivery
            near = " ".join(text[max(0, m.start() - 120): m.end() + 120] for m in DELIVER.finditer(text))
            if not APPS.search(near) and not re.search(r"uber ?eats|door ?dash|menulog|deliveroo", near, re.I): out["dd"] = 1
    return out


def main():
    seen, out = set(), []
    for el in fetch():
        p = place(el)
        if not p: continue
        key = (p["n"].lower(), round(p["la"], 3), round(p["lo"], 3))
        if key in seen: continue
        seen.add(key); out.append(p)
    out.sort(key=lambda p: p["m"])
    for p in out:
        for pat, url in BRANDS.items():
            if re.search(pat, p["n"], re.I): p["dd"], p["ol"] = 1, url
        if "dd" not in p and p.get("w"):
            got = check_site(p["w"]); p.update(got)
            if got: print(" ", p["n"], got)
    if len(out) < 10: sys.exit(f"only {len(out)} places, keeping the old list")
    now = datetime.now(timezone(timedelta(hours=10))).strftime("%-d %b %Y")
    line = "  const MOO_FOOD = " + json.dumps({"at": now, "c": [LAT, LON], "p": out}, ensure_ascii=False, separators=(",", ":")) + ";  // tools/food.py (OpenStreetMap)"
    s = open(APP, encoding="utf-8").read()
    s2, n = re.subn(r"^  const MOO_FOOD = .*$", lambda m: line, s, count=1, flags=re.M)
    if not n: sys.exit("no MOO_FOOD line in app.html")
    open(APP, "w", encoding="utf-8").write(s2)
    write_edits()
    print(len(out), "places")


def write_edits():
    """Carry local/food-edits.json into app.html as `const FOOD_EDITS = {...};` (the app lays them over the list)."""
    ed = json.load(open(EDITS, encoding="utf-8")) if os.path.exists(EDITS) else {}
    line = "  const FOOD_EDITS = " + json.dumps(ed, ensure_ascii=False, separators=(",", ":"), sort_keys=True) + ";  // local/food-edits.json (Admin)"
    s = open(APP, encoding="utf-8").read()
    s2, n = re.subn(r"^  const FOOD_EDITS = .*$", lambda m: line, s, count=1, flags=re.M)
    if not n: sys.exit("no FOOD_EDITS line in app.html")
    open(APP, "w", encoding="utf-8").write(s2)


def edit(pid, dd, ol, ph):
    """One place's Admin edit from the app (food-edit.yml): dd "1" delivers itself, "0" doesn't, "" not sure."""
    if not re.match(r"^[nwr]\d{1,12}$", pid): sys.exit("bad place id")
    if ol and not re.match(r"^https://[^\s<>\"']{3,200}$", ol): sys.exit("bad order link")
    if ph and not re.match(r"^[\d +()-]{6,20}$", ph): sys.exit("bad phone")
    ed = json.load(open(EDITS, encoding="utf-8")) if os.path.exists(EDITS) else {}
    e = {k: v for k, v in (("dd", int(dd) if dd in ("0", "1") else None), ("ol", ol or None), ("p", ph or None)) if v is not None}
    if e: ed[pid] = e
    else: ed.pop(pid, None)
    json.dump(ed, open(EDITS, "w", encoding="utf-8"), indent=1, sort_keys=True, ensure_ascii=False); open(EDITS, "a").write("\n")
    write_edits()


if __name__ == "__main__":
    if sys.argv[1:2] == ["edit"]: edit(*(sys.argv[2:6] + [""] * 4)[:4])
    else: main()
