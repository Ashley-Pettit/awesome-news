"""Suggestions from construction workers in the town models: keep what's sent.

A player who picks "Construction worker" in Explore's Settings can paint the ground and Send it to the town planner (Ash).
The app posts it to a public ntfy.sh topic (no account), which only holds messages for 12 hours. This runs with the hourly
chat job (.github/workflows/chat.yml) and files every suggestion in chat/plans.json on the `chat` branch, where Ash's app
reads it (plus the last 12 hours live from ntfy). Nothing here changes the model: Ash adds what he wants and Saves it.

    python3 tools/plans.py FILE      archive the topic into FILE
"""
import json, os, sys, time, urllib.request

TOPIC = "awesome-news-town-plans-r8k3"
KEEP, MAX, TOWNS = 60 * 86400, 2000, {"moorooka", "inverloch", "logan", "town3d"}
UA = "awesome-news-plans/1.0 (github.com/Ashley-Pettit/awesome-news)"


def ok(ev):
    """A message the app would read as part of a suggestion (same shape it sends)."""
    msg = ev.get("message") or ""
    if len(msg) > 4096: return False
    try: b = json.loads(msg)
    except Exception: return False
    return isinstance(b, dict) and b.get("k") == "plan" and str(b.get("town")) in TOWNS and bool(str(b.get("id") or "").strip())


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
