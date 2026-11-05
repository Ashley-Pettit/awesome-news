import json, urllib.request, time, os, gzip, io, math, csv
UA = {"User-Agent": "AwesomeNews forecast check (github.com/Ashley-Pettit/awesome-news)"}
def get(u, raw=False):
    for t in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=120) as r:
                b = r.read(); return b if raw else json.loads(b)
        except Exception as e:
            print("retry", u[:140], e); time.sleep(5)
    return None
os.makedirs("out/obs", exist_ok=True)
APP = {"inv": (-38.63, 145.73), "moo": (-27.535, 153.024)}
def km(a, b):
    return 6371 * math.acos(min(1, math.sin(math.radians(a[0])) * math.sin(math.radians(b[0])) + math.cos(math.radians(a[0])) * math.cos(math.radians(b[0])) * math.cos(math.radians(a[1] - b[1]))))
st = json.loads(gzip.decompress(get("https://bulk.meteostat.net/v2/stations/lite.json.gz", raw=True)))
near = []
for s in st:
    la, lo = s["location"]["latitude"], s["location"]["longitude"]
    for k, p in APP.items():
        d = km(p, (la, lo))
        if d < 45:
            near.append({"app": k, "id": s["id"], "name": s["name"].get("en"), "lat": la, "lon": lo, "elev": s["location"].get("elevation"), "km": round(d, 1)})
print(json.dumps(near, indent=0))
json.dump(near, open("out/stations.json", "w"))
for s in near:
    b = get(f"https://bulk.meteostat.net/v2/hourly/2026/{s['id']}.csv.gz", raw=True)
    if not b: continue
    rows = [r for r in csv.reader(io.StringIO(gzip.decompress(b).decode())) if r and r[0] >= "2026-09-25"]
    print(s["id"], s["name"], len(rows))
    with open(f"out/obs/{s['id']}.csv", "w") as f: csv.writer(f).writerows(rows)
v = ",".join(["temperature_2m"] + [f"temperature_2m_previous_day{d}" for d in (1, 3, 5)] + ["precipitation_previous_day1", "precipitation_previous_day3", "wind_speed_10m_previous_day1"])
pts = {f"app_{k}": p for k, p in APP.items()}
pts.update({f"st_{s['id']}": (s["lat"], s["lon"]) for s in near})
res = {}
for k, (la, lo) in pts.items():
    u = f"https://previous-runs-api.open-meteo.com/v1/forecast?latitude={la}&longitude={lo}&hourly={v}&start_date=2026-09-28&end_date=2026-11-04&timezone=GMT"
    res[k] = get(u); print(k, bool(res[k] and not res[k].get("error")), (res[k] or {}).get("reason", "")); time.sleep(2)
json.dump(res, open("out/om.json", "w"))
