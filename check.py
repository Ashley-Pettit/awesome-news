import json, urllib.request, urllib.parse, time
UA = {"User-Agent": "AwesomeNews forecast check (github.com/Ashley-Pettit/awesome-news)"}
def get(u):
    for t in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=120) as r: return json.loads(r.read() or b"[]")
        except Exception as e: print("retry", u[:120], e); time.sleep(5)
urls = ["bom.gov.au/places/vic/inverloch", "bom.gov.au/places/vic/wonthaggi", "bom.gov.au/places/vic/leongatha", "bom.gov.au/places/qld/moorooka", "bom.gov.au/places/qld/brisbane",
        "bom.gov.au/vic/forecasts/", "bom.gov.au/qld/forecasts/brisbane", "bom.gov.au/vic/forecasts/westgippsland", "bom.gov.au/vic/forecasts/wonthaggi",
        "willyweather.com.au/vic/gippsland/inverloch", "willyweather.com.au/vic/gippsland/wonthaggi", "willyweather.com.au/qld/brisbane/moorooka", "willyweather.com.au/qld/brisbane/brisbane",
        "weatherzone.com.au/vic/central/inverloch", "weatherzone.com.au/vic/central/wonthaggi", "weatherzone.com.au/qld/brisbane/brisbane", "weatherzone.com.au/qld/brisbane/moorooka",
        "ftp.bom.gov.au/anon/gen/fwo/IDV10753.xml", "ftp.bom.gov.au/anon/gen/fwo/IDQ10095.xml", "reg.bom.gov.au/places/vic/inverloch", "abc.net.au/news/weather",
        "theweatherchaser.com/vic/inverloch", "weather.com/en-AU/weather/tenday/l/Inverloch", "inverlochweather"]
out = {}
for u in urls:
    q = "https://web.archive.org/cdx/search/cdx?" + urllib.parse.urlencode({"url": u, "matchType": "prefix", "from": "20260920", "to": "20261105", "output": "json", "filter": "statuscode:200", "fl": "timestamp,original", "limit": "2000"})
    r = get(q) or []; rows = r[1:]
    out[u] = rows; print(f"{len(rows):5d}  {u}  days={len(set(x[0][:8] for x in rows))}  e.g. {rows[0] if rows else ''}")
    time.sleep(2)
json.dump(out, open("cdx.json", "w"))
