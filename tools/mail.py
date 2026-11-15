"""Letters between players in the town models: keep what's posted.

A player at the Moorooka Post Office in Explore can write a letter to another player by name. The app posts it to a public ntfy.sh
topic (no account), which only holds messages for 12 hours. This runs with the hourly chat job (.github/workflows/chat.yml) and
files every letter in chat/mail.json on the `chat` branch for 30 days, so a player who wasn't about still finds it waiting
(the app reads the file, plus the last 12 hours live from ntfy). Letters aren't private: anyone with the topic could read them.

    python3 tools/mail.py FILE      archive the topic into FILE
"""
import json, os, sys, time, urllib.request

TOPIC = "awesome-news-town-mail-k4p9"
KEEP, MAX = 30 * 86400, 3000
UA = "awesome-news-mail/1.0 (github.com/Ashley-Pettit/awesome-news)"


def ok(ev):
    """A message the app would read as a letter (same shape it sends)."""
    msg = ev.get("message") or ""
    if len(msg) > 1024: return False
    try: b = json.loads(msg)
    except Exception: return False
    return isinstance(b, dict) and b.get("k") == "mail" and isinstance(b.get("to"), str) and bool(b["to"].strip()) and isinstance(b.get("text"), str)


def archive(path):
    try: d = json.load(open(path, encoding="utf-8"))
    except Exception: d = {}
    kept = {m["id"]: m for m in d.get("m", []) if isinstance(m, dict) and m.get("id")}
    req = urllib.request.Request(f"https://ntfy.sh/{TOPIC}/json?poll=1&since=all", headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        events = [json.loads(l) for l in r.read().decode("utf-8", "replace").splitlines() if l.strip()]
    for ev in events:
        if ev.get("event") == "message" and ok(ev):
            kept.setdefault(str(ev["id"])[:20], {"id": str(ev["id"])[:20], "time": int(ev["time"]), "message": ev["message"]})
    now = time.time()
    keep = sorted((m for m in kept.values() if now - m["time"] < KEEP), key=lambda m: m["time"])[-MAX:]
    os.makedirs(os.path.dirname(path) or ".", exist_ok=True)
    json.dump({"at": int(now), "m": keep}, open(path, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    print(len(events), "events,", len(keep), "kept")


if __name__ == "__main__":
    archive(sys.argv[1])
