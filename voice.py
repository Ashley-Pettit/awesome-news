#!/usr/bin/env python3
"""Make the news audio ahead of time, in a natural voice (Kokoro, run on the build server).

Phones just play the files, so there's no 90 MB voice to download and nothing heavy to run on
the phone. The audio is cut into exactly the same pieces the app speaks (headline, "From ...",
then the story a few sentences at a time), so captions, highlighting, pause and skip all work as
before. Each piece is saved as data/voice/<key>.mp3, where key = sha1("<voice>|<text>")[:16].
Pieces of locked full articles are saved encrypted (<key>.bin) with the NEWS_KEY passphrase.

Usage: python voice.py _site/data --reuse-from https://.../awesome-news/ --budget 900
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
DRIVE_WORDS = 420      # the app trims drive stories here (keep in step with DRIVE_WORDS in app.html)
DEEP_WORDS = 900       # top stories get more, for reading one story right through
MORE = "There's more on that one in the app."
SAMPLE = "This is Awesome News. Here's your briefing, read in a natural voice."
CORE_LABELS = ["Politics", "Finance", "Tech", "AI"]  # SECTIONS in app.html, after Local and Headlines
LEAD = ["local-qld", "headlines", "politics", "finance", "tech", "ai", "copilot"]

# Said differently from how it's written. Only the sound changes; the key stays on the app's text.
SAY = [(r"\b7NEWS\b", "Seven News"), (r"\b9News\b", "Nine News"), (r"\b10 News\b", "Ten News"), (r"\biTnews\b", "I.T. News"),
       (r"\bAI\b", "A.I."), (r"\bEVs?\b", lambda m: "E.V." + ("s" if m.group(0).endswith("s") else "")), (r"\bQld\b", "Queensland"),
       (r"\bASX\b", "A.S.X."), (r"\bRBA\b", "R.B.A."), (r"\bCEO\b", "C.E.O."), (r"\bLNP\b", "L.N.P."), (r"\bSBS\b", "S.B.S."),
       (r"\bABC\b", "A.B.C."), (r"\bBBC\b", "B.B.C."), (r"\bNSW\b", "New South Wales"), (r"\bEFF\b", "E.F.F."), (r"\bM365\b", "M three six five")]
WMO = {0: "clear skies", 1: "mostly sunny", 2: "partly cloudy", 3: "cloudy", 45: "foggy", 48: "foggy", 51: "light drizzle", 53: "drizzle",
       55: "heavy drizzle", 61: "light rain", 63: "rain", 65: "heavy rain", 80: "showers", 81: "showers", 82: "heavy showers",
       95: "storms", 96: "storms with hail", 99: "storms with hail"}


# ---- The app's own text rules (clean() and chunks() in app.html), copied exactly ----
def clean(t):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", str(t or ""))).strip()


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
    return hashlib.sha1(f"{VOICE}|{text}".encode()).hexdigest()[:16]


def publishers(app_path):
    src = open(app_path, encoding="utf-8").read()
    block = src[src.index("const PUBLISHERS = ["):]
    block = block[:block.index("];")]
    return re.findall(r'\{ id: "([^"]+)", label: "([^"]+)" \}', block)


def ordinal(n):
    return f"{n}{'th' if 11 <= n % 100 <= 13 else {1: 'st', 2: 'nd', 3: 'rd'}.get(n % 10, 'th')}"


def opening(region, w):
    """The start of the 30-minute drive, from the forecast saved with the news."""
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


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("data")
    ap.add_argument("--reuse-from", default="", help="the live site, to reuse audio made on earlier runs")
    ap.add_argument("--budget", type=float, default=900, help="seconds to spend making new audio")
    ap.add_argument("--models", default=os.environ.get("KOKORO_DIR", "."))
    ap.add_argument("--key-env", default="NEWS_KEY")
    ap.add_argument("--dry", action="store_true", help="just say how much audio there is to make")
    a = ap.parse_args()
    t0 = time.time()
    data = a.data
    status = json.load(open(os.path.join(data, "status.json")))
    passphrase = os.environ.get(a.key_env, "")
    vkey = fetcher.vault_key(passphrase) if passphrase and status.get("vault") else None

    # ---- Read today's stories and their text ----
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

    # ---- What to say, most useful first ----
    jobs, seen = [], set()  # (key, text, lock)

    def want(text, lock=False):
        k = key_of(text) + ("L" if lock else "")
        if text and k not in seen:
            seen.add(k)
            jobs.append((k, text, lock))

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
    sources = {i.get("source", "") for items in feeds.values() for i in items}
    for s in sorted({publisher_of(s) for s in sources if s}):
        want(f"From {s}.")

    def body(paras, cap):
        out, w = [], 0
        for p in paras:
            if w >= cap:
                break
            out += chunks(p)
            w += len(p.split())
        return out

    def story_parts(i, which):
        """which: 'open' (CC or feed text, else the summary) or 'lock' (the locked full article)."""
        if which == "lock":
            t = locked.get(i["id"])
        else:
            t = texts.get(i["id"]) if i.get("text") else None
            if not t and i.get("feed"):
                t = texts.get(i["id"])
        paras = (t or {}).get("paras") or ([clean(i["summary"])] if i.get("summary") else [])
        return paras

    # Main sections go deepest, other interests about half as deep, other states' local news last.
    ranked = []
    for s, items in feeds.items():
        w = 1 if s in LEAD else 4 if s.startswith("local-") else 2
        for r, i in enumerate(items[:30]):
            ranked.append((r * w + (w - 1), LEAD.index(s) if s in LEAD else 99, r, i))
    ranked.sort(key=lambda x: x[:3])
    rounds = [[x[3] for x in ranked[n:n + 25]] for n in range(0, len(ranked), 25)]
    done_ids = set()
    later = []  # second versions (no passphrase) and the rest of long stories
    for r, row in enumerate(rounds):
        for i in row:
            if i["id"] in done_ids:
                continue
            done_ids.add(i["id"])
            want(f"{clean(i['title'])}.")
            has_lock = vkey and i.get("ptext") and i["id"] in locked
            paras = story_parts(i, "lock" if has_lock else "open")
            for c in body(paras, DRIVE_WORDS):
                want(c, lock=bool(has_lock))
            if sum(len(p.split()) for p in paras) > DRIVE_WORDS:
                want(MORE)
                if r < 3:
                    later.append([(c, bool(has_lock)) for c in body(paras, DEEP_WORDS)])
            if has_lock:
                later.append([(c, False) for c in body(story_parts(i, "open"), DRIVE_WORDS)])
        if r % 3 == 2:  # every few rounds, catch up on the second versions
            for group in later:
                for c, lock in group:
                    want(c, lock)
            later = []
    for group in later:
        for c, lock in group:
            want(c, lock)

    if a.dry:
        mins, at = 0.0, []
        for n, (k, text, lock) in enumerate(jobs):
            mins += len(text) / 14.5 / 60
            if n in (100, 300, 600, 1000, 1500, 2000, 3000):
                at.append(f"{n} pieces: {mins:.0f} min")
        print(f"{len(jobs)} pieces, about {mins:.0f} minutes of audio;", "; ".join(at))
        return

    # ---- Reuse what earlier runs made ----
    out_dir = os.path.join(data, "voice")
    os.makedirs(out_dir, exist_ok=True)
    have = {}
    prev = {}
    if a.reuse_from:
        base = a.reuse_from.rstrip("/") + "/data/voice/"
        try:
            pidx = json.loads(urllib.request.urlopen(base + f"index.json?v={int(t0)}", timeout=20).read())
            if pidx.get("v") == VOICE and pidx.get("lk") == (lock_fp(vkey) if vkey else None):
                prev = pidx.get("c", {})
        except Exception as e:
            print("no earlier audio:", e)

        def grab(job):
            k, text, lock = job
            h = k[:16]
            if prev.get(h) != (2 if lock else 1):
                return None
            ext = "bin" if lock else "mp3"
            try:
                b = urllib.request.urlopen(f"{base}{h}.{ext}", timeout=30).read()
                with open(os.path.join(out_dir, f"{h}.{ext}"), "wb") as f:
                    f.write(b)
                return h, 2 if lock else 1
            except Exception:
                return None
        with cf.ThreadPoolExecutor(16) as ex:
            for got in ex.map(grab, jobs):
                if got and have.get(got[0]) != 1:
                    have[got[0]] = got[1]
    reused = len(have)

    # ---- Make the rest, until the time runs out ----
    todo = [j for j in jobs if j[0][:16] not in have]
    made, secs = 0, 0.0
    if todo and time.time() - t0 < a.budget:
        import lameenc
        from kokoro_onnx import Kokoro
        model = Kokoro(os.path.join(a.models, "kokoro-v1.0.onnx"), os.path.join(a.models, "voices-v1.0.bin"))
        aes = None
        if vkey:
            from cryptography.hazmat.primitives.ciphers.aead import AESGCM
            aes = AESGCM(vkey)
        for k, text, lock in todo:
            if time.time() - t0 > a.budget:
                break
            if k[:16] in have:  # the same words were already made (open beats locked)
                continue
            say = text
            for pat, rep in SAY:
                say = re.sub(pat, rep, say)
            try:
                audio, sr = model.create(say, voice=VOICE, speed=1.0, lang=LANG)
            except Exception as e:
                print("skip:", text[:60], e)
                continue
            enc = lameenc.Encoder()
            enc.set_bit_rate(48)
            enc.set_in_sample_rate(sr)
            enc.set_channels(1)
            enc.set_quality(2)
            pcm = (audio.clip(-1, 1) * 32767).astype("<i2").tobytes()
            mp3 = bytes(enc.encode(pcm) + enc.flush())
            h = k[:16]
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

    index = {"v": VOICE, "at": status.get("updatedAt", ""), "lk": lock_fp(vkey) if vkey else None,
             "open": {r: o for r, o in opens.items() if key_of(o["text"]) in have}, "sample": SAMPLE, "c": have}
    with open(os.path.join(out_dir, "index.json"), "w") as f:
        json.dump(index, f, separators=(",", ":"))
    print(json.dumps({"pieces": len(jobs), "reused": reused, "made": made, "madeMinutes": round(secs / 60, 1),
                      "missing": len(jobs) - len(have), "seconds": round(time.time() - t0)}))


def lock_fp(vkey):
    """Changes when the passphrase does, so locked audio from an old passphrase isn't reused."""
    return hashlib.sha256(b"voice" + vkey).hexdigest()[:12]


if __name__ == "__main__":
    sys.exit(main())
