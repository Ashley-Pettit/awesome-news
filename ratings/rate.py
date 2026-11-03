"""
rate.py: helps the "Awesome News: rate headlines" scheduled task rate how negative each story is.

    python ratings/rate.py todo [max]        writes ratings/todo.tsv: id, section, headline, summary for stories not yet rated
    python ratings/rate.py merge scores.tsv  adds "id<TAB>score" lines (0 to 10) to ratings/neg.json and drops stories
                                             no longer on the site

The scale (Claude rates each one): 0 uplifting or good news, 2 pleasant, 3 neutral (most politics, business, tech),
5 mildly worrying (prices up, job cuts, disputes), 7 bad news (crime, crashes, storms damage, court cases),
9 to 10 tragic or distressing (deaths, violence, war, abuse, disasters).
"""
import json
import os
import re
import sys
import urllib.request
from datetime import datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = "https://ashley-pettit.github.io/awesome-news/data/"
NEG = os.path.join(HERE, "neg.json")


def load():
    try:
        return json.load(open(NEG, encoding="utf-8")).get("ratings", {})
    except Exception:
        return {}


def current():
    """Every story on the site now: id -> (section, title, summary)."""
    get = lambda u: json.loads(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "AwesomeNews rater"}), timeout=30).read())
    status = get(SITE + "status.json")
    out = {}
    for sec in status.get("sections", []):
        try:
            for i in get(SITE + f"feeds/{sec}.json").get("items", []):
                out.setdefault(i["id"], (sec, i.get("title", ""), re.sub(r"<[^>]+>|\s+", " ", i.get("summary") or "").strip()[:220]))
        except Exception:
            pass
    return out


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    if cmd == "todo":
        most = int(sys.argv[2]) if len(sys.argv) > 2 else 300
        have, cur = load(), current()
        todo = [(k, *v) for k, v in cur.items() if k not in have][:most]
        with open(os.path.join(HERE, "todo.tsv"), "w", encoding="utf-8") as f:
            for k, sec, t, s in todo:
                f.write(f"{k}\t{sec}\t{t}\t{s}\n".replace("\r", " "))
        print(json.dumps({"onSite": len(cur), "rated": sum(1 for k in cur if k in have), "todo": len(todo)}))
    elif cmd == "merge":
        have, cur = load(), current()
        added = 0
        for line in open(sys.argv[2], encoding="utf-8"):
            parts = line.strip().split("\t")
            if len(parts) >= 2 and re.fullmatch(r"[0-9a-f]{12}", parts[0]) and re.fullmatch(r"\d+(\.\d+)?", parts[1]):
                have[parts[0]] = max(0, min(10, round(float(parts[1]))))
                added += 1
        keep = {k: v for k, v in have.items() if k in cur} if cur else have
        json.dump({"updated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"), "scale": "0 uplifting, 3 neutral, 5 worrying, 7 bad, 10 tragic",
                   "ratings": keep}, open(NEG, "w", encoding="utf-8"), separators=(",", ":"))
        print(json.dumps({"added": added, "kept": len(keep), "dropped": len(have) - len(keep)}))
    else:
        print(__doc__)


if __name__ == "__main__":
    main()
