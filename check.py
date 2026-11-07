import json, os, urllib.request, urllib.parse
os.makedirs("out", exist_ok=True)
UA = {"User-Agent": "AwesomeNewsTownModel/1.0 (github.com/Ashley-Pettit/awesome-news)"}
def get(u): return urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=40).read()
found = {}
for q in ["Inverloch clock", "Inverloch A'Beckett Street", "Inverloch town centre", "Inverloch Victoria street", "Inverloch shops", "Inverloch Rotary", "Inverloch"]:
    u = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode({"action": "query", "generator": "search", "gsrsearch": q, "gsrnamespace": 6, "gsrlimit": 40,
        "prop": "imageinfo", "iiprop": "url|extmetadata", "iiurlwidth": 900, "format": "json"})
    try:
        d = json.loads(get(u))
        for p in (d.get("query", {}).get("pages", {}) or {}).values():
            ii = (p.get("imageinfo") or [{}])[0]
            found[p["title"]] = {"thumb": ii.get("thumburl"), "desc": (ii.get("extmetadata", {}).get("ImageDescription", {}) or {}).get("value", "")[:200]}
    except Exception as e:
        print("fail", q, e)
json.dump(found, open("out/list.json", "w"), indent=1)
n = 0
for t, v in found.items():
    if not v["thumb"] or not any(k in (t + v["desc"]).lower() for k in ("clock", "beckett", "town", "street", "shops", "main", "centre", "center", "rotary", "hub", "library", "esplanade")): continue
    try:
        open(f"out/img{n:02d}.jpg", "wb").write(get(v["thumb"])); v["file"] = f"img{n:02d}.jpg"; n += 1
    except Exception as e: print("img fail", t, e)
    if n >= 30: break
json.dump(found, open("out/list.json", "w"), indent=1)
print("found", len(found), "downloaded", n)
