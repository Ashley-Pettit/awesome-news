"""Neighbourhood chat and jobs (Moorooka): keep what's posted.

Posts go to a public ntfy.sh topic straight from the app (no account or key), and ntfy keeps them for 12 hours. This runs
every hour (.github/workflows/chat.yml), reads the topic and files everything in chat/moo.json, which lives on its own
branch, `chat`, rewritten as one commit each time, so a removed post is gone rather than kept in history. The app reads
that file (raw.githubusercontent.com) plus the last 12 hours live from ntfy.

    python3 tools/chat.py FILE            archive the topic into FILE
    python3 tools/chat.py FILE hide ID    Admin's remove (from chat-hide.yml); "unhide ID" puts it back
"""
import json, os, re, sys, time, urllib.request

TOPIC = "awesome-news-moorooka-chat-q7m2"
KEEP_CHAT, KEEP_JOBS, MAX = 30 * 86400, 45 * 86400, 3000
UA = "awesome-news-chat/1.0 (github.com/Ashley-Pettit/awesome-news)"


def load(path):
    try: d = json.load(open(path, encoding="utf-8"))
    except Exception: d = {}
    return {"at": d.get("at", 0), "m": d.get("m", []), "r": d.get("r", {}), "h": d.get("h", [])}


def clean(ev):
    """One ntfy event -> a post, a report, or None. Same rules as the app."""
    try: b = json.loads(ev.get("message") or "")
    except Exception: return None
    if not isinstance(b, dict): return None
    s = lambda k, n: str(b.get(k) or "").strip()[:n]
    base = {"id": str(ev["id"])[:20], "time": int(ev["time"])}
    if b.get("k") == "r" and s("r", 20): return dict(base, k="r", r=s("r", 20))
    if b.get("k") == "m" and s("n", 30) and s("t", 500):
        p = dict(base, k="m", n=s("n", 30), t=s("t", 500))
        if s("re", 20): p["re"] = s("re", 20)
        return p
    if b.get("k") == "j" and s("n", 30) and s("t", 120):
        p = dict(base, k="j", n=s("n", 30), t=s("t", 120))
        for k, n in (("d", 800), ("c", 100), ("w", 40)):
            if s(k, n): p[k] = s(k, n)
        return p
    return None


def archive(path):
    d = load(path)
    req = urllib.request.Request(f"https://ntfy.sh/{TOPIC}/json?poll=1&since=all", headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        events = [json.loads(l) for l in r.read().decode("utf-8", "replace").splitlines() if l.strip()]
    posts = {p["id"]: p for p in d["m"]}
    reports = {k: set(v) for k, v in d["r"].items()}
    for ev in events:
        if ev.get("event") != "message": continue
        p = clean(ev)
        if not p: continue
        if p["k"] == "r": reports.setdefault(p["r"], set()).add(p["id"])
        else: posts.setdefault(p["id"], p)
    now = time.time()
    keep = sorted((p for p in posts.values() if now - p["time"] < (KEEP_JOBS if p["k"] == "j" else KEEP_CHAT)), key=lambda p: p["time"])[-MAX:]
    ids = {p["id"] for p in keep}
    d["m"] = keep
    d["r"] = {k: sorted(v) for k, v in reports.items() if k in ids}
    d["h"] = [h for h in d["h"] if h in ids]
    d["at"] = int(now)
    save(path, d)
    print(len(events), "events,", len(keep), "kept")


def save(path, d):
    os.makedirs(os.path.dirname(path) or ".", exist_ok=True)
    json.dump(d, open(path, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))


def hide(path, pid, on=True):
    if not re.match(r"^[A-Za-z0-9]{6,20}$", pid): sys.exit("bad id")
    d = load(path)
    h = set(d["h"]); (h.add if on else h.discard)(pid)
    d["h"] = sorted(h)
    if on: d["m"] = [p for p in d["m"] if p["id"] != pid]   # gone from the file, not just hidden
    save(path, d)


if __name__ == "__main__":
    f = sys.argv[1]
    if sys.argv[2:3] == ["hide"]: hide(f, sys.argv[3])
    elif sys.argv[2:3] == ["unhide"]: hide(f, sys.argv[3], False)
    else: archive(f)
