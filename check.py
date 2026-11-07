import json, os, sys, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fetcher as F, community as C
from datetime import datetime, timezone
os.makedirs("out", exist_ok=True)
now = datetime.now(timezone.utc)
log = []
t = time.time()
errs = []
for pid in ("logan", "inv"):
    try:
        news = C.searched(C.PLACES[pid]["search"], C.PLACES[pid], now, errs)
    except Exception as e:
        news = []; errs.append(str(e))
    log.append({"place": pid, "n": len(news), "with_summary": sum(1 for x in news if x["summary"]),
                "items": [{"t": x["title"], "src": x["source"], "u": x["url"], "s": x["summary"], "img": x.get("image", "")} for x in news]})
log.append({"errors": errs, "secs": round(time.time() - t)})
json.dump(log, open("out/blurbs.json", "w"), indent=1)
