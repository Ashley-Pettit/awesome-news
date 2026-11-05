import json, urllib.request, urllib.parse, time, os
UA = {"User-Agent": "AwesomeNews forecast check (github.com/Ashley-Pettit/awesome-news)"}
def get(u, raw=False):
    for t in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60) as r:
                b = r.read(); return b if raw else json.loads(b)
        except Exception as e:
            print("retry", u[:120], e); time.sleep(5)
    return None
os.makedirs("out/bom", exist_ok=True)
pts = {"app": (-38.63, 145.73), "wonthaggi": (-38.61, 145.59), "inland": (-38.59, 145.78)}
v = ",".join(["temperature_2m"] + [f"temperature_2m_previous_day{d}" for d in (1, 2, 3)] + ["precipitation", "precipitation_previous_day1", "precipitation_previous_day2"])
res = {}
for k, (la, lo) in pts.items():
    for m in ("best_match", "bom_access_global", "ecmwf_ifs025"):
        u = f"https://previous-runs-api.open-meteo.com/v1/forecast?latitude={la}&longitude={lo}&hourly={v}&models={m}&start_date=2026-09-28&end_date=2026-11-04&timezone=Australia%2FMelbourne"
        res[f"{k}|{m}"] = get(u); time.sleep(1)
json.dump(res, open("out/om.json", "w"))
# Bureau town forecast pages archived by the Wayback Machine during October
cdx = get("https://web.archive.org/cdx/search/cdx?url=bom.gov.au/places/vic/inverloch/forecast/&from=20260925&to=20261105&output=json&filter=statuscode:200&collapse=timestamp:10")
print("cdx", cdx and len(cdx))
json.dump(cdx, open("out/cdx.json", "w"))
for row in (cdx or [])[1:]:
    ts = row[1]
    b = get(f"https://web.archive.org/web/{ts}id_/{row[2]}", raw=True)
    if b: open(f"out/bom/{ts}.html", "wb").write(b)
    time.sleep(1)
