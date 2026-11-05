import json, urllib.request, time, os, gzip, io, csv
UA = {"User-Agent": "AwesomeNews forecast check (github.com/Ashley-Pettit/awesome-news)"}
def get(u, raw=False):
    for t in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=180) as r:
                b = r.read(); return b if raw else json.loads(b)
        except Exception as e:
            print("retry", u[:140], e); time.sleep(5)
    return None
os.makedirs("out/obs", exist_ok=True)
ids = ["94886", "95881", "94892", "94576", "94575", "94578", "95581"]
for i in ids:
    b = get(f"https://bulk.meteostat.net/v2/hourly/2026/{i}.csv.gz", raw=True)
    if b:
        rows = list(csv.reader(io.StringIO(gzip.decompress(b).decode())))
        print("meteostat", i, len(rows), rows[-1][:6] if rows else "")
    b = get(f"https://www.ncei.noaa.gov/access/services/data/v1?dataset=global-hourly&stations={i}099999&startDate=2026-09-28&endDate=2026-11-05&format=csv", raw=True)
    if b:
        open(f"out/obs/{i}.csv", "wb").write(b)
        print("ncei", i, b.count(b"\n"), b[:200])
