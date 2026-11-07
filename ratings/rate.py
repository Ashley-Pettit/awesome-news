"""
rate.py: helps the "Awesome News: rate headlines" scheduled task rate how negative each story is.

    python ratings/rate.py todo [max]        writes ratings/todo.tsv: id, section, headline, summary for stories not yet rated
    python ratings/rate.py merge scores.tsv  adds "id<TAB>score" lines (0 to 10) to ratings/neg.json and drops stories
                                             no longer on the site
    python ratings/rate.py blank [max]       writes ratings/blank.tsv: id, outlet, headline, link for stories with no text at
                                             all (not even the publisher's own preview), for Claude to summarise
    python ratings/rate.py sums file.tsv     adds "id<TAB>summary" lines to ratings/summaries.json, drops ones gone from the site

The scale (Claude rates each one): 0 uplifting or good news, 2 pleasant, 3 neutral (most politics, business, tech),
5 mildly worrying (prices up, job cuts, disputes), 7 bad news (crime, crashes, storms damage, court cases),
9 to 10 tragic or distressing (deaths, violence, war, abuse, disasters).

To keep Claude's reading down, "todo" settles the easy ones itself (written to ratings/auto.tsv, merged with Claude's):
  - a story with no worrying word at all in its headline or summary (the app's own word lists) is neutral: 3, or 1 in
    Good news
  - the same headline from another outlet gets the score already given
Only the rest go in todo.tsv for Claude.
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
SUMS = os.path.join(HERE, "summaries.json")
COMMUNITY = ("community-moo", "community-logan", "community-inv")  # the local apps' news searches


NEG_STRONG = re.compile(r"""\b(?:kill(?:s|ed|ing)?|dead|deaths?|dies|died|dying|murder\w*|homicide|manslaughter|wars?|warfare|attacks?|attacked|bomb\w*|missiles?|airstrikes?|shooting|gunman|stabb\w*|terror\w*|massacre|genocide|rape\w*|sexual assault|abuse\w*|assault\w*|violen\w*|hostages?|fatal\w*|tragedy|tragic|disaster\w*|catastroph\w*|famine|starv\w*|earthquake|cyclone|tsunami|bushfires?|wildfires?|floods?|flooding|drown\w*|crash\w*|collapse\w*|recession|layoffs?|laid off|sacked|bankrupt\w*|insolven\w*|jailed|prison|sentenced|charged|arrest\w*|convicted|fraud\w*|scam\w*|scandal|corrupt\w*|ransomware|data breach|hack(?:ed|ers?)|outbreak|pandemic|overdose|suicide|victims?|injur\w*|hospitalis\w*|critical condition|missing|evacuat\w*|crisis|crises|deadly|toll|jail\w*|guilty|explosive\w*|lash\w*|hailstones?|severe|thunderstorms?|storms?|hack|hacks|cancer|disease\w*|conflict|invasion|troops|military|chaos|emergenc\w*|horrif\w*|shock\w*|contaminat\w*|recall\w*|choking|hazard\w*)\b""", re.I)
NEG_MILD = re.compile(r"""\b(?:fears?|feared|warn\w*|threat\w*|risk\w*|danger\w*|crackdown|protest\w*|riots?|clash\w*|slump\w*|plunge\w*|tumbl\w*|losses|lose|losing|cuts?|shortage\w*|struggl\w*|decline\w*|worst|fail\w*|blame\w*|lawsuit|sued|fined|penalt\w*|probe|investigat\w*|police|court|accused|allegation\w*|toxic|pollut\w*|extinct\w*|endangered|drought|heatwave|inflation|debt|deficit|backlash|outrage|anger|angry|grief|mourn\w*|condemn\w*|sanctions?|tariffs?|strikes?|delay\w*|outage|vulnerab\w*|malware|spyware|leak\w*|pain|hikes?|rate rises?|denies|denied|dispute\w*|tension\w*|slams?|furious|fury|aghast|exposure|closures?|shut\w*|targets?|trial|appeal\w*|apolog\w*|worse|alert\w*|sick|illness|concern\w*|controvers\w*|critic\w*|attack\w*|row|close|closing|fall|falls|falling|fell|poverty|poor|dent\w*|refused|bail|chase|battle\w*|blindsided|guns?|loses|lost|fall short|bankrupt\w*|stoush|surge in crime)\b""", re.I)


def tkey(t):
    return re.sub(r"[^a-z0-9 ]+", "", (t or "").lower())[:90]


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


def bare_now():
    """Stories on the site now with no text of their own: id -> (outlet, title, link). Also every id on the site."""
    get = lambda u: json.loads(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "AwesomeNews rater"}), timeout=30).read())
    status = get(SITE + "status.json")
    out, ids = {}, set()
    docs = []
    for sec in status.get("sections", []):
        try:
            docs.append(get(SITE + f"feeds/{sec}.json").get("items", []))
        except Exception:
            pass
    for c in COMMUNITY:
        try:
            docs.append(get(SITE + f"feeds/{c}.json").get("news", []))
        except Exception:
            pass
    for items in docs:
        for i in items:
            ids.add(i["id"])
            if len(re.sub(r"\s+", " ", i.get("summary") or "").strip()) < 40 and not i.get("text") and not i.get("feed") and i.get("url", "").startswith("http"):
                out.setdefault(i["id"], (i.get("source", ""), i.get("title", ""), i["url"]))
    return out, ids


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    if cmd == "todo":
        most = int(sys.argv[2]) if len(sys.argv) > 2 else 300
        have, cur = load(), current()
        by_title = {tkey(cur[k][1]): v for k, v in have.items() if k in cur}
        auto, todo, asked = [], [], set()
        for k, (sec, t, s) in cur.items():
            if k in have:
                continue
            tk = tkey(t)
            if tk in by_title:
                auto.append((k, by_title[tk])); continue
            if not NEG_STRONG.search(f"{t} {s}") and not NEG_MILD.search(f"{t} {s}"):
                auto.append((k, 1 if sec == "goodnews" else 3)); continue
            if tk in asked:
                continue  # its twin is already on the list: it gets the same score at merge
            asked.add(tk); todo.append((k, sec, t, s))
        todo = todo[:most]
        with open(os.path.join(HERE, "todo.tsv"), "w", encoding="utf-8") as f:
            for k, sec, t, s in todo:
                f.write(f"{k}\t{sec}\t{t}\t{s}\n".replace("\r", " "))
        with open(os.path.join(HERE, "auto.tsv"), "w", encoding="utf-8") as f:
            for k, v in auto:
                f.write(f"{k}\t{v}\n")
        print(json.dumps({"onSite": len(cur), "rated": sum(1 for k in cur if k in have), "auto": len(auto), "todo": len(todo)}))
    elif cmd == "merge":
        have, cur = load(), current()
        added = 0
        lines = list(open(sys.argv[2], encoding="utf-8")) if os.path.exists(sys.argv[2]) else []
        auto_f = os.path.join(HERE, "auto.tsv")
        if os.path.exists(auto_f):
            lines += list(open(auto_f, encoding="utf-8"))
        for line in lines:
            parts = line.strip().split("\t")
            if len(parts) >= 2 and re.fullmatch(r"[0-9a-f]{12}", parts[0]) and re.fullmatch(r"\d+(\.\d+)?", parts[1]):
                have[parts[0]] = max(0, min(10, round(float(parts[1]))))
                added += 1
        by_title = {tkey(cur[k][1]): v for k, v in have.items() if k in cur}  # twins of what Claude just rated
        for k, (sec, t, s) in cur.items():
            if k not in have and tkey(t) in by_title:
                have[k] = by_title[tkey(t)]; added += 1
        keep = {k: v for k, v in have.items() if k in cur} if cur else have
        json.dump({"updated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"), "scale": "0 uplifting, 3 neutral, 5 worrying, 7 bad, 10 tragic",
                   "ratings": keep}, open(NEG, "w", encoding="utf-8"), separators=(",", ":"))
        print(json.dumps({"added": added, "kept": len(keep), "dropped": len(have) - len(keep)}))
    elif cmd == "blank":
        most = int(sys.argv[2]) if len(sys.argv) > 2 else 15
        try:
            have = json.load(open(SUMS, encoding="utf-8")).get("summaries", {})
        except Exception:
            have = {}
        bare, _ = bare_now()
        todo = [(k, v) for k, v in bare.items() if k not in have][:most]
        with open(os.path.join(HERE, "blank.tsv"), "w", encoding="utf-8") as f:
            for k, (src, t, u) in todo:
                f.write(f"{k}\t{src}\t{t}\t{u}\n".replace("\r", " "))
        print(json.dumps({"blank": len(bare), "todo": len(todo)}))
    elif cmd == "sums":
        try:
            have = json.load(open(SUMS, encoding="utf-8")).get("summaries", {})
        except Exception:
            have = {}
        _, ids = bare_now()
        added = 0
        for line in (open(sys.argv[2], encoding="utf-8") if os.path.exists(sys.argv[2]) else []):
            parts = line.rstrip("\n").split("\t")
            if len(parts) >= 2 and re.fullmatch(r"[0-9a-f]{12}", parts[0]) and 40 <= len(parts[1].strip()) <= 400:
                have[parts[0]] = parts[1].strip(); added += 1
        keep = {k: v for k, v in have.items() if k in ids} if ids else have
        json.dump({"updated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"), "summaries": keep},
                  open(SUMS, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
        print(json.dumps({"added": added, "kept": len(keep)}))
    else:
        print(__doc__)


if __name__ == "__main__":
    main()
