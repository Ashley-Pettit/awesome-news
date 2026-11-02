#!/usr/bin/env python3
"""Make the news audio ahead of time, in a natural voice (Kokoro, run on the build server).

Phones just play the files, so there's no 90 MB voice to download and nothing heavy to run on
the phone. The audio is cut into exactly the same pieces the app speaks (headline, "ABC News reports.",
then the story a few sentences at a time), so captions, highlighting, pause and skip all work as
before. Each piece is saved as data/voice/<key>.mp3, where key = sha1("<voice tag>|<text>")[:16].
Pieces of locked full articles are saved encrypted (<key>.bin) with the NEWS_KEY passphrase.

The index also lists which stories are complete ("s"), so the app only plays a story in this voice
when every piece of it is ready, and never switches voice part way through.

Runs as several shards side by side (each makes its share of the pieces), then --merge joins them:
  python voice.py _site/data --shard 0/4 --reuse-from https://.../awesome-news/ --budget 900
  python voice.py _site/data --merge
"""
import argparse
import concurrent.futures as cf
import glob
import hashlib
import json
import os
import re
import sys
import time
import urllib.request
from datetime import datetime, timedelta, timezone

import fetcher  # CITIES, vault_key, the passphrase scheme

VOICE, LANG = "bf_emma", "en-gb"
TAG = VOICE + ".3"     # goes up when the audio changes, so older files aren't reused
DRIVE_WORDS = 420      # stories are read to about here (keep in step with DRIVE_WORDS in app.html)
MORE = "There's more on that one in the app."
SAMPLE = "This is Awesome News. Here's your briefing, read in a natural voice."
CORE_LABELS = ["Politics", "Finance", "Tech", "AI"]  # SECTIONS in app.html, after Local and Headlines
LEAD = ["local-qld", "headlines", "politics", "finance", "tech", "ai", "copilot"]
CUE = re.compile(r"^(Now, .*|Here are the top stories\.|Story \d+\.)$")

# Said differently from how it's written. Only the sound changes; the key stays on the app's text.
SAY = [(r"\b7NEWS\b", "Seven News"), (r"\b9News\b", "Nine News"), (r"\b10 News\b", "Ten News"), (r"\biTnews\b", "I.T. News"),
       (r"\$(\d[\d,.]*) ?bn\b", r"$\1 billion"), (r"\b(\d[\d,.]*) ?bn\b", r"\1 billion"), (r"\$(\d[\d,.]*) ?m\b", r"$\1 million"),
       (r"\$(\d[\d,.]*) ?k\b", r"$\1 thousand"), (r"\bkm/h\b", "kilometres an hour"), (r"\bkm\b", "kilometres"),
       (r"\bAI\b", "A.I."), (r"\bEVs?\b", lambda m: "E.V." + ("s" if m.group(0).endswith("s") else "")), (r"\bQld\b", "Queensland"),
       (r"\bASX\b", "A.S.X."), (r"\bRBA\b", "R.B.A."), (r"\bCEO\b", "C.E.O."), (r"\bLNP\b", "L.N.P."), (r"\bSBS\b", "S.B.S."),
       (r"\bABC\b", "A.B.C."), (r"\bBBC\b", "B.B.C."), (r"\bNSW\b", "New South Wales"), (r"\bEFF\b", "E.F.F."),
       (r"\bM365\b", "M three six five"), (r"\bSEQ\b", "south-east Queensland"), (r"\bPM\b", "Prime Minister")]
WMO = {0: "clear skies", 1: "mostly sunny", 2: "partly cloudy", 3: "cloudy", 45: "foggy", 48: "foggy", 51: "light drizzle", 53: "drizzle",
       55: "heavy drizzle", 61: "light rain", 63: "rain", 65: "heavy rain", 80: "showers", 81: "showers", 82: "heavy showers",
       95: "storms", 96: "storms with hail", 99: "storms with hail"}


# ---- The app's own text rules (clean(), speakable() and chunks() in app.html), copied exactly ----
def clean(t):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", str(t or ""))).strip()


URL = re.compile(r"\bhttps?://\S+|\bwww\.\S+", re.A)
PROMO = re.compile(r"\b(sign up|subscribe)\b.{0,60}\b(newsletter|here|now|inbox|updates|today)\b|don't miss a story|podcast platforms|"
                   r"learn where to watch|submit a response|in your inbox|fact-checked, and edited|^advertisement$|"
                   r"^(read|watch|listen) (more|now)\b|^related\b", re.I | re.A)
WEBBITS = re.compile(r"\b(min-resolution|webkit|dppx|\d+vw)\b", re.I | re.A)
ENDS = re.compile(r"[.!?][\"”’)]*$")


def speakable(p):
    """A paragraph worth reading out: no links, sign-up blurbs, menu lines or bits of web page."""
    t = clean(URL.sub(" ", clean(p)))
    if not t or PROMO.search(t) or " : " in t or WEBBITS.search(t):
        return ""
    if len(t.split(" ")) < 4 and not ENDS.search(t):
        return ""
    return t


SAY_PUB = {"Microsoft blogs": "Microsoft", "Microsoft 365 Roadmap": "The Microsoft 365 roadmap"}


def reports(pub):
    """Said after the headline, then straight into the story (reports() in app.html)."""
    return f"{SAY_PUB.get(pub, pub)} reports."


def jslen(s):
    return len(s.encode("utf-16-le")) // 2


SENT = re.compile(r"[^.!?]+[.!?]+[\"”’)]*\s*|[^.!?]+$")


def chunks(text):
    out, cur = [], ""
    for s in SENT.findall(clean(text)):
        if jslen(cur + s) > 220 and cur:
            out.append(cur.strip())
            cur = ""
        cur += s
    if cur.strip():
        out.append(cur.strip())
    return out


def key_of(text):
    return hashlib.sha1(f"{TAG}|{text}".encode()).hexdigest()[:16]


def lock_fp(vkey):
    """Changes when the passphrase does, so locked audio from an old passphrase isn't reused."""
    return hashlib.sha256(b"voice" + vkey).hexdigest()[:12]


def publishers(app_path):
    src = open(app_path, encoding="utf-8").read()
    block = src[src.index("const PUBLISHERS = ["):]
    block = block[:block.index("];")]
    return re.findall(r'\{ id: "([^"]+)", label: "([^"]+)" \}', block)


def ordinal(n):
    return f"{n}{'th' if 11 <= n % 100 <= 13 else {1: 'st', 2: 'nd', 3: 'rd'}.get(n % 10, 'th')}"


def opening(region, w):
    """The start of the 30-minute listen, from the forecast saved with the news."""
    d = w["daily"]
    off = timedelta(seconds=w.get("utc_offset_seconds", 36000))
    today = (datetime.now(timezone.utc) + off).strftime("%Y-%m-%d")
    if today not in d["time"]:
        return None, None
    k = d["time"].index(today)
    day = datetime.strptime(today, "%Y-%m-%d")
    city = fetcher.CITIES[region][0]
    sky = WMO.get(d["weather_code"][k], "mixed weather")
    text = (f"This is Awesome News for {day:%A} the {ordinal(day.day)} of {day:%B}. First, the weather in {city}. "
            f"Today, {sky}, with a top of {round(d['temperature_2m_max'][k])} degrees and a low of {round(d['temperature_2m_min'][k])}.")
    rain = d.get("precipitation_probability_max", [None] * (k + 1))[k]
    if rain is not None and rain >= 20:
        text += f" There's a {rain} percent chance of rain."
    return today, text


# ---------------------------------------------------------------------------
# What to say
# ---------------------------------------------------------------------------
def plan(data, vkey):
    """Every piece to make, most useful first, plus the pieces each story needs to be complete."""
    status = json.load(open(os.path.join(data, "status.json")))
    feeds = {os.path.basename(p)[:-5]: json.load(open(p)).get("items", []) for p in glob.glob(os.path.join(data, "feeds", "*.json"))}
    texts, locked = {}, {}
    for p in glob.glob(os.path.join(data, "text", "t*.json")):
        texts.update(json.load(open(p)).get("articles", {}))
    if vkey:
        import base64
        from cryptography.hazmat.primitives.ciphers.aead import AESGCM
        for p in glob.glob(os.path.join(data, "text", "p*.json")):
            box = json.load(open(p))
            raw = AESGCM(vkey).decrypt(base64.b64decode(box["iv"]), base64.b64decode(box["data"]), None)
            locked.update(json.loads(raw).get("articles", {}))
    pubs = publishers(os.path.join(os.path.dirname(os.path.abspath(__file__)), "app.html"))
    publisher_of = lambda s: next((lbl for pid, lbl in pubs if s.startswith(pid)), s)

    jobs, seen = [], set()  # (key + "L" if locked, text, lock)
    stories = {}            # id -> {"o": [keys], "l": [keys]}
    heads = set()           # headline pieces (they get a breath in front)

    def want(text, lock=False):
        k = key_of(text) + ("L" if lock else "")
        if text and k not in seen:
            seen.add(k)
            jobs.append((k, text, lock))
        return k

    opens = {}
    for r, w in (status.get("weather") or {}).items():
        try:
            day, text = opening(r, w)
            if text:
                opens[r] = {"day": day, "text": text}
                want(text)
        except Exception:
            pass
    for t in ["Here are the top stories.", "Now, local news.", "Now, more headlines.", SAMPLE, MORE]:
        want(t)
    for lbl in CORE_LABELS + [x["label"] for x in status.get("interests", [])]:
        want(f"Now, {lbl}.")
    for n in range(1, 9):
        want(f"Story {n}.")

    def paras_of(i, which):
        """which: 'open' (CC or feed text, else the summary) or 'lock' (the locked full article)."""
        t = locked.get(i["id"]) if which == "lock" else (texts.get(i["id"]) if i.get("text") or i.get("feed") else None)
        ps = [x for x in (speakable(p) for p in (t or {}).get("paras") or []) if x]
        if not ps and i.get("summary"):
            ps = [x for x in [speakable(i["summary"])] if x]
        return ps

    def body(ps, cap):
        out, w = [], 0
        for n, p in enumerate(ps):
            if w >= cap:
                out.append(MORE)
                break
            out += chunks(p)
            w += len(p.split(" "))
        return out

    # Main sections go deepest, other interests about half as deep, other states' local news last.
    ranked = []
    for s, items in feeds.items():
        w = 1 if s in LEAD else 4 if s.startswith("local-") else 2
        for r, i in enumerate(items[:30]):
            ranked.append((r * w + (w - 1), LEAD.index(s) if s in LEAD else 99, r, i))
    ranked.sort(key=lambda x: x[:3])
    rounds = [[x[3] for x in ranked[n:n + 25]] for n in range(0, len(ranked), 25)]
    later = []  # second versions, for phones without the passphrase
    for r, row in enumerate(rounds):
        for i in row:
            if i["id"] in stories:
                continue
            head = [want(f"{clean(i['title'])}."), want(reports(publisher_of(i.get('source', ''))))]
            heads.add(head[0])
            st = stories[i["id"]] = {}
            has_lock = bool(vkey and i.get("ptext") and i["id"] in locked)
            first = paras_of(i, "lock" if has_lock else "open")
            st["l" if has_lock else "o"] = head + [want(c, has_lock and c != MORE) for c in body(first, DRIVE_WORDS)]
            if has_lock:
                second = [(c, False) for c in body(paras_of(i, "open"), DRIVE_WORDS)]
                st["o"] = head + [key_of(c) for c, _ in second]
                later.append(second)
        if r % 3 == 2:  # every few rounds, catch up on the second versions
            for group in later:
                for c, lock in group:
                    want(c, lock and c != MORE)
            later = []
    for group in later:
        for c, lock in group:
            want(c, lock and c != MORE)
    return status, jobs, stories, opens, heads


# ---------------------------------------------------------------------------
# Making it
# ---------------------------------------------------------------------------
def make(a, data, vkey):
    t0 = time.time()
    status, jobs, stories, opens, heads = plan(data, vkey)
    n_of, shards = (int(x) for x in a.shard.split("/"))
    mine = [j for j in jobs if int(j[0][:16], 16) % shards == n_of]
    if a.dry:
        mins = sum(len(t) / 14.5 / 60 for _, t, _ in mine)
        print(f"{len(mine)} of {len(jobs)} pieces, about {mins:.0f} minutes of audio, {len(stories)} stories")
        return
    out_dir = os.path.join(data, "voice")
    os.makedirs(out_dir, exist_ok=True)
    have = {}

    # Reuse what earlier runs made.
    if a.reuse_from:
        base = a.reuse_from.rstrip("/") + "/data/voice/"
        prev = {}
        try:
            pidx = json.loads(urllib.request.urlopen(base + f"index.json?v={int(t0)}", timeout=20).read())
            if pidx.get("v") == TAG and pidx.get("lk") == (lock_fp(vkey) if vkey else None):
                prev = pidx.get("c", {})
        except Exception as e:
            print("no earlier audio:", e)

        def grab(job):
            k, text, lock = job
            h, want_t = k[:16], 2 if lock else 1
            got_t = prev.get(h)
            if got_t is None or (got_t == 2 and not lock):
                return None
            try:
                b = urllib.request.urlopen(f"{base}{h}.{'bin' if got_t == 2 else 'mp3'}", timeout=30).read()
                with open(os.path.join(out_dir, f"{h}.{'bin' if got_t == 2 else 'mp3'}"), "wb") as f:
                    f.write(b)
                return h, got_t
            except Exception:
                return None
        with cf.ThreadPoolExecutor(16) as ex:
            for got in ex.map(grab, mine):
                if got and have.get(got[0]) != 1:
                    have[got[0]] = got[1]
    reused = len(have)

    # Make the rest, until the time runs out.
    made, secs = 0, 0.0
    todo = [j for j in mine if j[0][:16] not in have]
    if todo and time.time() - t0 < a.budget:
        import lameenc
        import numpy as np
        from kokoro_onnx import Kokoro
        model = Kokoro(os.path.join(a.models, "kokoro-v1.0.onnx"), os.path.join(a.models, "voices-v1.0.bin"))
        aes = None
        if vkey:
            from cryptography.hazmat.primitives.ciphers.aead import AESGCM
            aes = AESGCM(vkey)
        for k, text, lock in todo:
            if time.time() - t0 > a.budget:
                break
            h = k[:16]
            if h in have:  # the same words were already made (open beats locked)
                continue
            say = text
            for pat, rep in SAY:
                say = re.sub(pat, rep, say)
            try:
                audio, sr = model.create(say, voice=VOICE, speed=1.0, lang=LANG)
            except Exception as e:
                print("skip:", text[:60], e)
                continue
            # Trim the voice's own silence so pieces flow straight on, then a breath before section cues
            # and headlines so one story doesn't run into the next.
            loud = np.flatnonzero(np.abs(audio) > 0.01)
            if loud.size:
                audio = audio[max(0, loud[0] - int(sr * 0.06)):loud[-1] + int(sr * (0.32 if k in heads else 0.12))]
            lead = 0.55 if CUE.match(text) else 0.3 if k in heads else 0
            if lead:
                audio = np.concatenate([np.zeros(int(sr * lead), dtype=audio.dtype), audio])
            enc = lameenc.Encoder()
            enc.set_bit_rate(48)
            enc.set_in_sample_rate(sr)
            enc.set_channels(1)
            enc.set_quality(2)
            mp3 = bytes(enc.encode((audio.clip(-1, 1) * 32767).astype("<i2").tobytes()) + enc.flush())
            if lock:
                iv = os.urandom(12)
                with open(os.path.join(out_dir, f"{h}.bin"), "wb") as f:
                    f.write(iv + aes.encrypt(iv, mp3, None))
                have[h] = 2
            else:
                with open(os.path.join(out_dir, f"{h}.mp3"), "wb") as f:
                    f.write(mp3)
                have[h] = 1
            made += 1
            secs += len(audio) / sr
    with open(os.path.join(out_dir, f"part-{n_of}.json"), "w") as f:
        json.dump(have, f)
    print(json.dumps({"shard": a.shard, "pieces": len(mine), "reused": reused, "made": made, "madeMinutes": round(secs / 60, 1),
                      "missing": len(mine) - len(have), "seconds": round(time.time() - t0)}))


def merge(data, vkey):
    """Join the shards' lists into data/voice/index.json, with which stories are complete."""
    status, jobs, stories, opens, heads = plan(data, vkey)
    out_dir = os.path.join(data, "voice")
    os.makedirs(out_dir, exist_ok=True)
    have = {}
    for p in glob.glob(os.path.join(out_dir, "part-*.json")):
        for h, t in json.load(open(p)).items():
            if have.get(h) != 1:
                have[h] = t
        os.remove(p)
    done = {}
    for sid, st in stories.items():
        bits = 0
        if st.get("o") and all(have.get(k[:16]) == 1 for k in st["o"]):
            bits |= 1
        if st.get("l") and all(have.get(k[:16]) in (1, 2) for k in st["l"]):
            bits |= 2
        if bits:
            done[sid] = bits
    index = {"v": TAG, "voice": VOICE, "at": status.get("updatedAt", ""), "lk": lock_fp(vkey) if vkey else None,
             "open": {r: o for r, o in opens.items() if key_of(o["text"]) in have}, "sample": SAMPLE, "c": have, "s": done}
    with open(os.path.join(out_dir, "index.json"), "w") as f:
        json.dump(index, f, separators=(",", ":"))
    print(json.dumps({"pieces": len(jobs), "have": len(have), "stories": len(stories), "complete": len(done),
                      "completeOpen": sum(1 for b in done.values() if b & 1), "completeLocked": sum(1 for b in done.values() if b & 2)}))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("data")
    ap.add_argument("--reuse-from", default="", help="the live site, to reuse audio made on earlier runs")
    ap.add_argument("--budget", type=float, default=900, help="seconds to spend making new audio")
    ap.add_argument("--models", default=os.environ.get("KOKORO_DIR", "."))
    ap.add_argument("--key-env", default="NEWS_KEY")
    ap.add_argument("--shard", default="0/1", help="this shard / how many shards")
    ap.add_argument("--merge", action="store_true", help="join the shards' lists into index.json")
    ap.add_argument("--dry", action="store_true", help="just say how much audio there is to make")
    a = ap.parse_args()
    status = json.load(open(os.path.join(a.data, "status.json")))
    passphrase = os.environ.get(a.key_env, "")
    vkey = fetcher.vault_key(passphrase) if passphrase and status.get("vault") else None
    if a.merge:
        merge(a.data, vkey)
    else:
        make(a, a.data, vkey)


if __name__ == "__main__":
    sys.exit(main())
