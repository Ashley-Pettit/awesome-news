"""
rate.py: the AI step of the "Awesome News refresh" scheduled task. Claude reads each new story and judges it three ways,
in this order:

  1. interest   how interesting it is to read, 0 to 10 (0 filler, 3 routine, 5 decent, 7 a good read, 9 to 10 must read)
  2. topic      a short slug for the story it's about; stories from other outlets about the same event get the same
                slug (and an existing slug is reused when it's a topic already covered), so only one of them is shown
  3. negativity how negative or upsetting it is, 0 to 10 (0 uplifting, 3 neutral, 5 worrying, 7 bad news, 9 to 10 tragic)

    python ratings/rate.py todo [max] [--text DIR]   writes ratings/todo.tsv (id, section, outlet, headline, what it says)
                                                     for stories on the site not yet judged, closest stories next to each
                                                     other, and ratings/topics.tsv (topics already covered: slug, headline).
                                                     --text reads the article text from the fetcher's OUT/text folder, so
                                                     Claude judges the article, not just the headline
    python ratings/rate.py merge scores.tsv          adds "id<TAB>interest<TAB>topic<TAB>negativity" lines to ratings/
                                                     interest.json, topics.json and neg.json; drops stories gone from the site
    python ratings/rate.py blank [max] [--text DIR]  writes ratings/blank.tsv: id, outlet, headline, link (and, with --text, what the
                                                     article says, keeping only stories with text) for stories with no
                                                     text at all, for Claude to summarise
    python ratings/rate.py sums file.tsv             adds "id<TAB>summary" lines to ratings/summaries.json

The same headline from another outlet gets the same judgement at merge, without asking Claude twice.
fetcher.py applies all three: dull stories sink (or drop out), only one story per topic is kept, and the app's
"less negative news" dial uses the negativity.
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
INTEREST = os.path.join(HERE, "interest.json")
TOPICS = os.path.join(HERE, "topics.json")
SUMS = os.path.join(HERE, "summaries.json")
COMMUNITY = ("community-moo", "community-logan", "community-inv")  # the local apps' news searches


NEG_STRONG = re.compile(r"""\b(?:kill(?:s|ed|ing)?|dead|deaths?|dies|died|dying|murder\w*|homicide|manslaughter|wars?|warfare|attacks?|attacked|bomb\w*|missiles?|airstrikes?|shooting|gunman|stabb\w*|terror\w*|massacre|genocide|rape\w*|sexual assault|abuse\w*|assault\w*|violen\w*|hostages?|fatal\w*|tragedy|tragic|disaster\w*|catastroph\w*|famine|starv\w*|earthquake|cyclone|tsunami|bushfires?|wildfires?|floods?|flooding|drown\w*|crash\w*|collapse\w*|recession|layoffs?|laid off|sacked|bankrupt\w*|insolven\w*|jailed|prison|sentenced|charged|arrest\w*|convicted|fraud\w*|scam\w*|scandal|corrupt\w*|ransomware|data breach|hack(?:ed|ers?)|outbreak|pandemic|overdose|suicide|victims?|injur\w*|hospitalis\w*|critical condition|missing|evacuat\w*|crisis|crises|deadly|toll|jail\w*|guilty|explosive\w*|lash\w*|hailstones?|severe|thunderstorms?|storms?|hack|hacks|cancer|disease\w*|conflict|invasion|troops|military|chaos|emergenc\w*|horrif\w*|shock\w*|contaminat\w*|recall\w*|choking|hazard\w*)\b""", re.I)
NEG_MILD = re.compile(r"""\b(?:fears?|feared|warn\w*|threat\w*|risk\w*|danger\w*|crackdown|protest\w*|riots?|clash\w*|slump\w*|plunge\w*|tumbl\w*|losses|lose|losing|cuts?|shortage\w*|struggl\w*|decline\w*|worst|fail\w*|blame\w*|lawsuit|sued|fined|penalt\w*|probe|investigat\w*|police|court|accused|allegation\w*|toxic|pollut\w*|extinct\w*|endangered|drought|heatwave|inflation|debt|deficit|backlash|outrage|anger|angry|grief|mourn\w*|condemn\w*|sanctions?|tariffs?|strikes?|delay\w*|outage|vulnerab\w*|malware|spyware|leak\w*|pain|hikes?|rate rises?|denies|denied|dispute\w*|tension\w*|slams?|furious|fury|aghast|exposure|closures?|shut\w*|targets?|trial|appeal\w*|apolog\w*|worse|alert\w*|sick|illness|concern\w*|controvers\w*|critic\w*|attack\w*|row|close|closing|fall|falls|falling|fell|poverty|poor|dent\w*|refused|bail|chase|battle\w*|blindsided|guns?|loses|lost|fall short|bankrupt\w*|stoush|surge in crime)\b""", re.I)


def tkey(t):
    return re.sub(r"[^a-z0-9 ]+", "", (t or "").lower())[:90]


def load(path=NEG, key="ratings"):
    try:
        return json.load(open(path, encoding="utf-8")).get(key, {})
    except Exception:
        return {}


STOP = set("a an the and or but of to in on at for with from by as is are was were be been it its this that these those after over "
           "into about up out new says say said will would can could how why what who when where than more most not no".split())


def words(t):
    return {w for w in re.findall(r"[a-z0-9']+", (t or "").lower()) if len(w) > 2 and w not in STOP}


def order_by_likeness(rows):
    """Put stories that share most of their headline words next to each other, so Claude sees likely twins together."""
    ws = [words(r[3]) for r in rows]
    used, out = set(), []
    for n, r in enumerate(rows):
        if n in used:
            continue
        used.add(n); out.append(r)
        for m in range(n + 1, len(rows)):
            if m in used or not ws[n] or not ws[m]:
                continue
            c = len(ws[n] & ws[m])
            if c >= 2 and c / min(len(ws[n]), len(ws[m])) >= 0.5:
                used.add(m); out.append(rows[m])
    return out


def article_text(d, most=700):
    """{id: the start of the article (most characters)} from the fetcher's OUT/text/*.json."""
    out = {}
    if not d or not os.path.isdir(d):
        return out
    for fn in sorted(os.listdir(d)):
        if not fn.endswith(".json"):
            continue
        try:
            doc = json.load(open(os.path.join(d, fn), encoding="utf-8"))
        except Exception:
            continue
        for sid, t in (doc.items() if isinstance(doc, dict) else []):
            ps = t.get("paras") if isinstance(t, dict) else None
            if not isinstance(ps, list):
                continue
            txt = " ".join(p if isinstance(p, str) else str(p.get("t") or p.get("text") or "") if isinstance(p, dict) else "" for p in ps)
            txt = re.sub(r"<[^>]+>|\s+", " ", txt).strip()
            if txt:
                out[sid] = txt[:most]
    return out


def local_feeds(d):
    """Stories in the fetcher's own OUT/feeds folder (this run's news): id -> (section, title, summary, outlet)."""
    out = {}
    for fn in sorted(os.listdir(d)) if d and os.path.isdir(d) else []:
        if not fn.endswith(".json"):
            continue
        try:
            doc = json.load(open(os.path.join(d, fn), encoding="utf-8"))
        except Exception:
            continue
        for i in doc.get("items", []) if isinstance(doc, dict) else []:
            if isinstance(i, dict) and i.get("id") and i.get("title"):
                out.setdefault(i["id"], (doc.get("section") or fn[:-5], i["title"], re.sub(r"<[^>]+>|\s+", " ", i.get("summary") or "").strip()[:400], i.get("source", "")))
    return out


FEEDS = ""  # --feeds OUT/feeds: judge this run's stories, and keep ratings for them as well as the website's


def current():
    """Every story on the site now (and in --feeds): id -> (section, title, summary, outlet)."""
    out = local_feeds(FEEDS)  # this run's stories first, so they're judged first
    try:
        for k, v in site_now().items():
            out.setdefault(k, v)
    except Exception:
        pass
    return out


def site_now():
    get = lambda u: json.loads(urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "AwesomeNews rater"}), timeout=30).read())
    status = get(SITE + "status.json")
    out = {}
    for sec in status.get("sections", []):
        try:
            for i in get(SITE + f"feeds/{sec}.json").get("items", []):
                out.setdefault(i["id"], (sec, i.get("title", ""), re.sub(r"<[^>]+>|\s+", " ", i.get("summary") or "").strip()[:400], i.get("source", "")))
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
    global FEEDS
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    if "--feeds" in sys.argv:
        FEEDS = sys.argv[sys.argv.index("--feeds") + 1]
    if cmd == "todo":
        args = sys.argv[2:]
        tdir = args[args.index("--text") + 1] if "--text" in args else ""
        nums = [a for a in args if a.isdigit()]
        most = int(nums[0]) if nums else 400
        neg, intr, tps, cur = load(), load(INTEREST), load(TOPICS, "topics"), current()
        texts = article_text(tdir)
        done = lambda k: k in neg and k in intr and k in tps
        twins = {tkey(cur[k][1]) for k in cur if done(k)}
        rows, asked = [], set()
        for k, (sec, t, s, src) in cur.items():
            tk = tkey(t)
            if done(k) or tk in twins or tk in asked:
                continue  # judged already, or a twin of one that is (it gets the same judgement at merge)
            asked.add(tk)
            say = texts.get(k) or s
            rows.append((k, sec, src, t, re.sub(r"[\t\r\n]+", " ", say)[:700]))
        rows = order_by_likeness(rows[:most])
        with open(os.path.join(HERE, "todo.tsv"), "w", encoding="utf-8") as f:
            for r in rows:
                f.write("\t".join(x.replace("\t", " ").replace("\n", " ") for x in r) + "\n")
        known = {}
        for k, slug in tps.items():
            if k in cur and slug not in known:
                known[slug] = cur[k][1]
        with open(os.path.join(HERE, "topics.tsv"), "w", encoding="utf-8") as f:
            for slug, t in sorted(known.items()):
                f.write(f"{slug}\t{t}\n".replace("\r", " "))
        print(json.dumps({"onSite": len(cur), "judged": sum(1 for k in cur if done(k)), "todo": len(rows), "withText": sum(1 for r in rows if r[0] in texts), "knownTopics": len(known)}))
    elif cmd == "merge":
        neg, intr, tps, cur = load(), load(INTEREST), load(TOPICS, "topics"), current()
        added = 0
        for line in (open(sys.argv[2], encoding="utf-8") if os.path.exists(sys.argv[2]) else []):
            p = [x.strip() for x in line.rstrip("\n").split("\t")]
            if len(p) < 4 or not re.fullmatch(r"[0-9a-f]{12}", p[0]) or not re.fullmatch(r"\d+(\.\d+)?", p[1]) or not re.fullmatch(r"\d+(\.\d+)?", p[3]):
                continue
            slug = re.sub(r"[^a-z0-9]+", "-", p[2].lower()).strip("-")[:48] or p[0]
            intr[p[0]] = max(0, min(10, round(float(p[1]))))
            tps[p[0]] = slug
            neg[p[0]] = max(0, min(10, round(float(p[3]))))
            added += 1
        # twins (the same headline from another outlet) take what Claude said about the first one
        by_title = {}
        for k in cur:
            if k in intr and k in tps and k in neg:
                by_title.setdefault(tkey(cur[k][1]), k)
        for k, v in cur.items():
            src = by_title.get(tkey(v[1]))
            if src and src != k and not (k in intr and k in tps and k in neg):
                intr[k], tps[k], neg[k] = intr[src], tps[src], neg[src]; added += 1
        stamp = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        keep = lambda d: {k: v for k, v in d.items() if k in cur} if cur else d
        json.dump({"updated": stamp, "scale": "0 uplifting, 3 neutral, 5 worrying, 7 bad, 10 tragic", "ratings": keep(neg)},
                  open(NEG, "w", encoding="utf-8"), separators=(",", ":"))
        json.dump({"updated": stamp, "scale": "0 filler, 3 routine, 5 decent, 7 a good read, 10 must read", "ratings": keep(intr)},
                  open(INTEREST, "w", encoding="utf-8"), separators=(",", ":"))
        json.dump({"updated": stamp, "topics": keep(tps)}, open(TOPICS, "w", encoding="utf-8"), separators=(",", ":"))
        print(json.dumps({"added": added, "kept": len(keep(neg)), "topics": len(set(keep(tps).values()))}))
    elif cmd == "apply":
        # Lay the ratings just merged over this run's news (OUT/feeds), before it's written to the private copy:
        # one story per topic, dull ones out, negativity for the "less negative news" dial. fetcher.judge does it.
        d = os.path.join(sys.argv[2], "feeds")
        sys.path.insert(0, os.path.dirname(HERE))
        import fetcher
        docs = {fn: json.load(open(os.path.join(d, fn), encoding="utf-8")) for fn in sorted(os.listdir(d)) if fn.endswith(".json")}
        secs = {fn: [i for i in doc.get("items", []) if isinstance(i, dict) and i.get("id")] for fn, doc in docs.items() if isinstance(doc, dict) and isinstance(doc.get("items"), list)}
        ratings = {"int": load(INTEREST), "tp": load(TOPICS, "topics"), "neg": load()}
        stories = [i for items in secs.values() for i in items]
        same, dull = fetcher.judge(secs, lambda i: bool(i.get("text") or i.get("ptext") or i.get("feed")), stories, ratings)
        for fn, items in secs.items():
            docs[fn]["items"] = items
            json.dump(docs[fn], open(os.path.join(d, fn), "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
        print(json.dumps({"sameTopicDropped": same, "dullDropped": dull, "files": len(secs)}))
    elif cmd == "blank":
        args = sys.argv[2:]
        tdir = args[args.index("--text") + 1] if "--text" in args else ""
        nums = [a for a in args if a.isdigit()]
        most = int(nums[0]) if nums else 15
        texts = article_text(tdir, 1500) if tdir else {}
        try:
            have = json.load(open(SUMS, encoding="utf-8")).get("summaries", {})
        except Exception:
            have = {}
        bare, _ = bare_now()
        todo = [(k, v) for k, v in bare.items() if k not in have and (not tdir or len(texts.get(k, "")) >= 200)][:most]
        with open(os.path.join(HERE, "blank.tsv"), "w", encoding="utf-8") as f:
            for k, (src, t, u) in todo:  # with --text: a 5th column, what the article says (so no web fetching is needed)
                say = re.sub(r"[\t\r\n]+", " ", texts.get(k, ""))
                f.write((f"{k}\t{src}\t{t}\t{u}" + (f"\t{say}" if tdir else "")).replace("\r", " ") + "\n")
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
