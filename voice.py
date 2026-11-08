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
# "Update now" in the app, after someone picks something new (wildlife, another area's news): those go first.
FOCUS = [x for x in re.split(r"[,\s]+", os.environ.get("FOCUS", "")) if re.fullmatch(r"[a-z0-9-]{2,30}", x)]
# How a new section is introduced, taking turns so it doesn't always start "Now, ..." (CUE_WAYS in app.html).
CUE_WAYS = ["Now, {}.", "Next, {}.", "On to {}.", "Moving on to {}.", "Over to {}."]
CUE = re.compile(r"^(Now, .*|Next, .*|On to .*|Moving on to .*|Over to .*|Here are the top stories\.|Story \d+\.)$")

# Clock times said the way people say them: "10.30am" is "ten thirty in the morning", never "ten point three zero".
_ONES = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split()
_TENS = {2: "twenty", 3: "thirty", 4: "forty", 5: "fifty"}


def _num(n):
    return _ONES[n] if n < 20 else _TENS[n // 10] + ("" if n % 10 == 0 else " " + _ONES[n % 10])


def _clock(h, m, ap=""):
    h, m, ap = int(h), int(m or 0), (ap or "").lower().replace(".", "")
    if ap and h == 12 and m == 0:
        return "midday" if ap == "pm" else "midnight"
    said = _num(h) + ("" if m == 0 and ap else " o'clock" if m == 0 else " oh " + _ONES[m] if m < 10 else " " + _num(m))
    if ap == "am":
        return said + " in the morning"
    if ap == "pm":
        return said + (" in the afternoon" if h == 12 or h < 5 else " in the evening" if h < 9 else " at night")
    return said


TIME_AP = re.compile(r"\b(1[0-2]|0?[1-9])(?:[.:]([0-5]\d))?\s?([ap](?:\.m(?:\.(?=\s+[a-z]|,))?|m))(?![a-z])", re.I)
TIME_AT = re.compile(r"\b((?:at|until|till|by|before|after|since) )([01]?\d|2[0-3])[.:]([0-5]\d)\b(?![.:]?\d)"
                     r"(?!\s*(?:per|%|million|billion|trillion|metres|kilo|km|kg|dollars|cents?|points?|seconds|minutes|hours|years|times))", re.I)
# Said differently from how it's written. Only the sound changes; the key stays on the app's text.
SAY = [(TIME_AP, lambda m: _clock(m.group(1), m.group(2), m.group(3))),
       (TIME_AT, lambda m: m.group(1) + _clock(m.group(2), m.group(3))),
       (r"\b7NEWS\b", "Seven News"), (r"\b9News\b", "Nine News"), (r"\b10 News\b", "Ten News"), (r"\biTnews\b", "IT News"),
       (r"\$(\d[\d,.]*) ?bn\b", r"$\1 billion"), (r"\b(\d[\d,.]*) ?bn\b", r"\1 billion"), (r"\$(\d[\d,.]*) ?m\b", r"$\1 million"),
       (r"\$(\d[\d,.]*) ?k\b", r"$\1 thousand"), (r"\bkm/h\b", "kilometres an hour"), (r"\bkm\b", "kilometres"),
       (r"\bAI\b", "AI"), (r"\bEVs\b", "E-V's"), (r"\bEV\b", "E-V"), (r"\bQld\b", "Queensland"),
       (r"\bASX\b", "A-S-X"),
       (r"\bNSW\b", "New South Wales"),
       (r"\bM365\b", "M three six five"), (r"\bSEQ\b", "south-east Queensland"), (r"\bPM\b", "Prime Minister"),
       # Letters read as letters without full stops ("A.I." made her pause: "A. I."); plain caps already read right.
       # Said the Aussie way, "Queens-lend" (kwˈiːnzlɛnd), not "Queens-land".
       (r"\bQueensland(er|ers)?\b", r"Queenzlend\1"),
       # Loganholme ("Logan home") and Loganlea ("Logan lee"), so Logan in them is said the same as on its own (SOUNDS).
       (r"\bLoganholme\b", "Logan home"), (r"\bLoganlea\b", "Logan lee"),
       # Money read in plain order: "$400 million" is "400 million dollars" (the voice otherwise says "dollar 400 million").
       (r"\b(?:A|AU|US|NZ)?\$\s?(\d[\d,]*(?:\.\d+)?)(\s(?:thousand|million|billion|trillion))?", r"\1\2 dollars"),
       (r"(?<![\w])\$\s?(\d[\d,]*(?:\.\d+)?)(\s(?:thousand|million|billion|trillion))?", r"\1\2 dollars"),
       (r"£\s?(\d[\d,]*(?:\.\d+)?)(\s(?:thousand|million|billion|trillion))?", r"\1\2 pounds"),
       (r"€\s?(\d[\d,]*(?:\.\d+)?)(\s(?:thousand|million|billion|trillion))?", r"\1\2 euros")]
# Words no spelling gets right: once the text is turned into sounds, theirs are swapped in.
# Logan the Aussie way, "Loh-gn" (lˈoʊɡən). Bump SOUNDSV when any of these (or LEXICON) change, to remake the pieces with them.
SOUNDS = [(re.compile(r"\bLogan"), re.compile(r"(?<![^\s.,;:!?\"“”‘’'(—–-])lˈəʊɡən"), "lˈoʊɡən"),
          # Inverloch the local way, "in-ver-LOCK"
          (re.compile(r"\bInverloch"), re.compile(r"(?<![^\s.,;:!?\"“”‘’'(—–-])ɪnvˈɜːlɒk"), "ɪnvəlˈɒk"),
          # Bass (Bass Coast, Bass Strait, the seat of Bass) the Aussie way, "bas" like the fish (bˈæs), never "base"
          (re.compile(r"\bBass\b"), re.compile(r"(?<![^\s.,;:!?\"“”‘’'(—–-])bˈ?(?:eɪ|æ|ɑː|a)s(?![^\s.,;:!?\"“”‘’')—–-])"), "bˈæs")]
# Aussie names, places and letters the voice gets wrong (it reads with a British dictionary). Each is how it's said, in
# the voice's sound alphabet; at recording time the voice's own guess for the word is swapped for this.
LEXICON = {
    # places
    "Brisbane": "bɹˈɪzbən", "Moorooka": "məɹˈuːkə", "Mackay": "məkˈaɪ", "Beaudesert": "bəʊdˈɛzət", "Indooroopilly": "ˌɪndəɹˈuːpɪli",
    "Coolangatta": "kˌuːlənɡˈatə", "Caboolture": "kəbˈuːltʃə", "Maroochydore": "məɹˈuːtʃidˌɔː", "Gympie": "ɡˈɪmpi",
    "Rockhampton": "ɹɒkhˈamptən", "Launceston": "lˈɒnsɛstən", "Geelong": "dʒəlˈɒŋ", "Wagga": "wˈɒɡə", "Kalgoorlie": "kalɡˈʊəli",
    "Wonthaggi": "wɒnθˈaɡi", "Korumburra": "kˌɒɹəmbˈʌɹə", "Traralgon": "tɹəɹˈalɡən", "Pakenham": "pˈakənəm", "Bunurong": "bˈʌnəɹɒŋ",
    "Murrumbidgee": "mˌʌɹəmbˈɪdʒi", "Kosciuszko": "kˌɒziˈɒskəʊ", "Toowong": "tuːwˈɒŋ", "Yeronga": "jəɹˈɒŋɡə", "Rocklea": "ɹˈɒkliː",
    "Murray": "mˈʌɹi", "Gippsland": "ɡˈɪpslənd", "Gipps": "ɡˈɪps",
    # First Nations
    "Kaurna": "ɡˈɑːnə", "Wurundjeri": "wəɹˈʌndʒəɹi", "Ngunnawal": "nˈʌnəwɒl", "Kulin": "kˈuːlɪn", "Wiradjuri": "wɪɹˈadʒəɹi",
    # people
    "Albanese": "ˌalbənˈiːzi", "Crisafulli": "kɹˌɪsəfˈʊli", "Jacinta": "dʒəsˈɪntə", "Pocock": "pˈəʊkɒk", "Malinauskas": "mˌalɪnˈaʊskəs",
    "Finocchiaro": "fˌɪnəkiˈɑːɹəʊ",
    # letters and short names
    "ACCC": "ˌeɪ tɹˈɪpəl sˈiː", "ASIC": "ˈeɪsɪk", "APRA": "ˈapɹə", "NDIS": "ˌɛndˌiːˌaɪˈɛs", "AFP": "ˌeɪˌɛfpˈiː", "ATO": "ˌeɪtˌiːˈəʊ",
    "ALP": "ˌeɪˌɛlpˈiː",
}
_B = "(?<![^\\s.,;:!?\"“”‘’'(—–-])"


def add_lexicon(tok):
    """Once the voice is loaded: swap its own guess at each word above for how it's really said."""
    for word, snd in LEXICON.items():
        guess = tok.phonemize(word, LANG).strip()
        if guess and guess != snd:
            SOUNDS.append((re.compile(rf"\b{re.escape(word)}\b"), re.compile(_B + re.escape(guess)), snd))  # (no end check: "Brisbane's", a linking r)


SOUNDSV = 3
SOUNDW = re.compile(r"\b(Logan|Inverloch)|\b(" + "|".join(map(re.escape, ["Bass", *LEXICON])) + r")\b")
# Pieces with these words were made before the pronunciation above was fixed: remake them once.
# Bump SAYV (and add the words) whenever another pronunciation fix is added.
SAYV, RESAY = 4, re.compile(r"\d[.:]\d\d|\d ?[ap]\.?m\b|Logan|Queensland|\bQld\b|\bSEQ\b|[$£€]|\b(?:AI|EVs?|ASX|RBA|CEO|LNP|SBS|ABC|BBC|EFF|iTnews)\b")
# Read as "Expect ... today": "Expect light drizzle today", "Expect clear skies today".
WMO = {0: "clear skies", 1: "mostly sunny skies", 2: "partly cloudy skies", 3: "cloudy skies", 45: "fog", 48: "fog", 51: "light drizzle", 53: "some drizzle",
       55: "heavy drizzle", 56: "freezing drizzle", 57: "freezing drizzle", 61: "light rain", 63: "rain", 65: "heavy rain", 80: "a few showers", 81: "showers",
       82: "heavy showers", 95: "storms", 96: "storms with hail", 99: "storms with hail"}


# ---- The app's own text rules (clean(), speakable() and chunks() in app.html), copied exactly ----
def clean(t):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", str(t or ""))).strip()


URL = re.compile(r"\bhttps?://\S+|\bwww\.\S+", re.A)
PROMO = re.compile(r"\b(sign up|subscribe)\b.{0,60}\b(newsletter|here|now|inbox|updates|today)\b|don't miss a story|podcast platforms|"
                   r"learn where to watch|submit a response|in your inbox|fact-checked, and edited|^advertisement$|"
                   r"^(read|watch|listen) (more|now)\b|^related\b", re.I | re.A)
WEBBITS = re.compile(r"\b(min-resolution|webkit|dppx|\d+vw)\b", re.I | re.A)
# Bits of web page that aren't the story (JUNK in app.html, same pattern): app plugs, "Watch the video above", sign-ups.
JUNK = re.compile(r"""\b(download (the|our) [^.]{0,30}app|know the news with|download (it |the app )?(today|now)(?=[.!]?$)|(stream|watch)[^.]{0,40}\b(7plus|9now|10 ?play|iview|sbs on demand)|watch the (video|full|latest|interview|moment|clip)|(the )?video (above|below)|click here|tap here|get (the )?(latest|breaking) news|news alerts|sign up|subscribe|newsletter|follow us|follow [^.]{0,25} on (facebook|instagram|x|twitter|tiktok|threads|youtube)|got a (news )?tip|send us (your|a) (tip|story)|contact the newsroom|all rights reserved|copyright)\b|©|^(watch|listen|video|more|related|recommended|trending|popular|read next)\b[:\s-]""", re.I)
ENDS = re.compile(r"[.!?][\"”’)]*$")


def speakable(p):
    """A paragraph worth reading out: no links, sign-up blurbs, menu lines or bits of web page."""
    t = clean(URL.sub(" ", clean(p)))
    if not t or (len(t) < 240 and JUNK.search(t)) or PROMO.search(t) or " : " in t or WEBBITS.search(t):
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


def rain_line(p, when):
    """Rain said like a person would: "It's going to rain today", not "a 100 percent chance". rainLine() in app.html."""
    return (f" It's going to rain {when}." if p >= 90 else f" Rain is likely {when}." if p >= 70
            else f" There's a {p} percent chance of rain.")


def clock(h):
    """Hour of the day as said aloud: 8am, midday, 3pm, midnight (clock() in app.html)."""
    return "midnight" if h % 24 == 0 else "midday" if h == 12 else f"{h % 12}{'am' if h < 12 else 'pm'}"


def rain_when(w, date, when, start=5):
    """When the rain is due on a day, from the hourly forecast: " Rain is forecast from 8am to 10am."
    None when no hour that day is likely to be wet (then the day's chance of rain is said instead).
    rainWhen() in app.html."""
    hr = w.get("hourly") or {}
    times, probs, codes = hr.get("time") or [], hr.get("precipitation_probability") or [], hr.get("weather_code") or []
    wet = [(int(t[11:13]), codes[k] if k < len(codes) else 0) for k, t in enumerate(times)
           if t[:10] == date and int(t[11:13]) >= start and k < len(probs) and (probs[k] or 0) >= 50]
    if not wet:
        return None
    spans = []  # runs of wet hours, a one-hour dry gap still counts as the same rain
    for h, _ in wet:
        if spans and h - spans[-1][1] <= 2:
            spans[-1][1] = h
        else:
            spans.append([h, h])
    what = "Storms are" if any(c >= 95 for _, c in wet) else "Rain is"
    day = f" {when}" if when != "today" else ""
    if len(wet) >= 14:
        return f" {what} forecast most of the day{day}."
    if len(spans) > 2:
        return f" {what} forecast on and off{day}, from {clock(spans[0][0])} to {clock(spans[-1][1] + 1)}."
    said = " and again ".join(f"from {clock(a)} to {clock(b + 1)}" for a, b in spans)
    return f" {what} forecast{day} {said}."


def rain_say(w, d, n, when):
    """The rain line for a day: when it's due if the hours show it, else the day's chance of rain."""
    t = rain_when(w, d["time"][n], when)
    if t:
        return t
    p = (d.get("precipitation_probability_max") or [None] * (n + 1))[n]
    if p is None or p < 20:
        return ""
    line = rain_line(p, when)
    part = rain_part(w, d["time"][n])
    return line[:-1] + f", most likely {part}." if part and line.endswith(".") else line


def rain_part(w, date, start=5):
    """The part of the day the rain is most likely: in the morning, in the afternoon, in the evening."""
    hr = w.get("hourly") or {}
    hrs = [(hr["precipitation_probability"][k] or 0, int(t[11:13])) for k, t in enumerate(hr.get("time") or [])
           if t[:10] == date and int(t[11:13]) >= start and k < len(hr.get("precipitation_probability") or [])]
    if not hrs:
        return ""
    peak, h = max(hrs)
    return "" if peak < 20 else "in the morning" if h < 12 else "in the afternoon" if h < 18 else "in the evening"


# The local apps' own openings (OPEN_KEY in app.html, local/brands.json): key -> (whose weather, what Emma calls the app).
BRAND_OPENS = {"fence": ("moo", "This is Moorooka News"), "wire": ("logan", "This is The Logan Wire"), "inlet": ("inv", "This is The Coastline News")}


def opening(region, w, brand=None):
    """The start of the 30-minute listen, from the forecast saved with the news."""
    d = w["daily"]
    off = timedelta(seconds=w.get("utc_offset_seconds", 36000))
    today = (datetime.now(timezone.utc) + off).strftime("%Y-%m-%d")
    if today not in d["time"]:
        return None, None
    k = d["time"].index(today)
    day = datetime.strptime(today, "%Y-%m-%d")
    city = fetcher.CITIES[w.get("borrowed") or region][0]  # a suburb using its city's forecast says the city
    brand = brand or ("This is Logan news, from Awesome News," if region == "logan" else "This is Awesome News")  # Logan news has its own opening
    sky = WMO.get(d["weather_code"][k], "mixed weather")
    text = (f"{brand} for {day:%A} the {ordinal(day.day)} of {day:%B}. First, the weather in {city}. "
            f"Expect {sky} today, with a top of {round(d['temperature_2m_max'][k])} degrees and a low of {round(d['temperature_2m_min'][k])}.")
    text += rain_say(w, d, k, "today")
    # Listening at night (6pm on), the opening gives tomorrow's weather instead.
    night = None
    if k + 1 < len(d["time"]):
        n = k + 1
        night = (f"{brand} for {day:%A} the {ordinal(day.day)} of {day:%B}. First, tomorrow's weather in {city}. "
                 f"Expect {WMO.get(d['weather_code'][n], 'mixed weather')} tomorrow, with a top of {round(d['temperature_2m_max'][n])} degrees "
                 f"and a low of {round(d['temperature_2m_min'][n])}.")
        night += rain_say(w, d, n, "tomorrow")
        # Listening just after midnight, before the morning update: tomorrow's own opening.
        nd = day + timedelta(days=1)
        nxt = (f"{brand} for {nd:%A} the {ordinal(nd.day)} of {nd:%B}. First, the weather in {city}. "
               f"Expect {WMO.get(d['weather_code'][n], 'mixed weather')} today, with a top of {round(d['temperature_2m_max'][n])} degrees "
               f"and a low of {round(d['temperature_2m_min'][n])}.")
        nxt += rain_say(w, d, n, "today")
        night = (night, {"day": nd.strftime("%Y-%m-%d"), "text": nxt})
    return today, text, night


WEEK_INTRO = "Here's the weather for the week ahead."


def week(w):
    """The longer weather briefing, a day at a time, for the "Week ahead" button while the weather plays (weekItems() in app.html)."""
    d = w["daily"]
    off = timedelta(seconds=w.get("utc_offset_seconds", 36000))
    today = (datetime.now(timezone.utc) + off).strftime("%Y-%m-%d")
    if today not in d["time"]:
        return None
    k, items = d["time"].index(today), []
    for n in range(k, min(k + 7, len(d["time"]))):
        date = d["time"][n]
        name = "Today" if n == k else "Tomorrow" if n == k + 1 else datetime.strptime(date, "%Y-%m-%d").strftime("%A")
        t = (f"{name}, {WMO.get(d['weather_code'][n], 'mixed weather')}, with a top of {round(d['temperature_2m_max'][n])} degrees "
             f"and a low of {round(d['temperature_2m_min'][n])}.")
        p = (d.get("precipitation_probability_max") or [None] * (n + 1))[n]
        if p is not None:
            t += " Rain is almost certain." if p >= 90 else " Rain is likely." if p >= 70 else f" A {p} percent chance of rain." if p >= 30 else ""
        items.append({"date": date, "text": t})
    return {"day": today, "items": items}


# ---------------------------------------------------------------------------
# What to say
# ---------------------------------------------------------------------------
def same_as_title(p, title):
    """A paragraph that mostly repeats the headline: short, and most of its words are the headline's."""
    words = lambda t: re.findall(r"[a-z0-9']+", t.lower())
    pw, tw = words(p), set(words(title))
    if not pw or not tw:
        return False
    hit = sum(1 for w in pw if w in tw)
    return len(pw) <= len(tw) * 1.6 + 3 and hit / len(pw) >= 0.7


FIRST_SENT = re.compile(r"^(.+?[.!?])\s+(?=[A-Z\"“‘])")  # (not "Nov. 4": a capital or quote must follow)


def drop_repeat(ps, title):
    """The story's opening often says the headline again ("A MAN has been charged after a crash near Geelong on
    Thursday night. Police say..."): leave out a first paragraph that does, or just its first sentence when the
    paragraph goes on. Must match dropRepeat() in app.html exactly, or the recordings won't line up."""
    out, done = [], False
    for n, p in enumerate(ps):
        if n < 2 and not done:
            if same_as_title(p, title):
                done = True
                continue
            m = FIRST_SENT.match(p)
            if m and close_to_title(m.group(1), title):
                done = True
                p = p[m.end():].strip()
                if not p:
                    continue
        out.append(p)
    return out


def close_to_title(s, title):
    """One sentence that's mostly the headline, maybe with a detail or two added."""
    words = lambda t: re.findall(r"[a-z0-9']+", t.lower())
    sw, tw = words(s), set(words(title))
    if len(sw) < 6 or len(tw) < 4:  # a real sentence, not "On Nov."
        return False
    return len(sw) <= len(tw) * 1.6 + 3 and sum(1 for w in sw if w in tw) / len(sw) >= 0.6


def plan(data, vkey):
    """Every piece to make, most useful first, plus the pieces each story needs to be complete."""
    status = json.load(open(os.path.join(data, "status.json")))
    # Every story the app can read out: the sections, plus the local apps' community news (community-moo), which
    # Awesome News and Moorooka News add to Local news.
    feeds = {}
    for p in glob.glob(os.path.join(data, "feeds", "*.json")):
        d = json.load(open(p))
        feeds[os.path.basename(p)[:-5]] = d.get("items") or [dict(i, summary=i.get("summary") or "") for i in d.get("news") or [] if i.get("id") and i.get("title")]
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
    wxs = status.get("weather") or {}
    places = [(r, r, w, None) for r, w in wxs.items()] + [(k, r, wxs[r], b) for k, (r, b) in BRAND_OPENS.items() if r in wxs]
    for r, src, w, brand in places:
        try:
            day, text, both = opening(src, w, brand)
            night, nxt = both if both else (None, None)
            if text:
                opens[r] = {"day": day, "text": text, "night": night, "next": nxt}
                want(text)
                if night:
                    want(night)
                if nxt:
                    want(nxt["text"])
            wk = week(w)
            if wk and r in opens:
                opens[r]["week"] = wk
                want(WEEK_INTRO)
                for it in wk["items"]:
                    want(it["text"])
        except Exception:
            pass
    # Weather warnings from the Bureau (said straight after the weather), recorded before any story.
    for ws in (status.get("warnings") or {}).values():
        for w in ws:
            want(w["say"])
    # No section cues ("Next, tech.") any more: the app goes straight from one headline to the next.
    for t in ["Welcome back. Picking up where you left off.", "Welcome back. Here's what's new.", SAMPLE, MORE]:
        want(t)
    # Beta: your commute after the weather (trafficParts() in beta/app.html). Fixed lines, so Emma can say them for anyone.
    for t in (["Onto traffic.", "Now, your drive to work.", "Now, your drive home.", "Nothing's been reported on your way.", "There's a crash on your way.",
               "There are crashes on your way.", "There's flooding on your way.", "There's a hazard on your way.", "There are hazards on your way.",
               "There's heavy traffic on your way.", "There are roadworks on your way.", "There's an event on your way.", "Allow some extra time.",
               "The details are on screen."]
              + [f"It usually takes about {n} minutes." for n in list(range(2, 21)) + list(range(25, 125, 5))]
              # Your drive (trafficParts() in app.html): when to leave, then how long it takes to get there.
              + [f"Leave at {w}." for w in ("seven", "a quarter past seven", "half past seven", "a quarter to eight", "eight", "a quarter past eight", "half past eight")]
              + [f"Leave in about {n} minutes." for n in list(range(2, 21)) + list(range(25, 125, 5))]
              + [f"It's about {n} minutes to get {w}." for w in ("to work", "home", "into Inverloch") for n in list(range(2, 21)) + list(range(25, 125, 5))]
              # the temperature right now, after the forecast (wxNowParts() in app.html)
              + [f"It's currently {'minus ' + str(-t) if t < 0 else t} degree{'' if abs(t) == 1 else 's'}." for t in range(-10, 51)]
              + ["No crashes or roadworks reported, so it should be a clear run.", "No crashes or roadworks reported, but it'll be a bit slow.",
                 "No crashes or roadworks reported, but expect heavy traffic.", "Best to allow some extra time."]):
        want(t)
    for n in range(1, 9):
        want(f"Story {n}.")

    def paras_of(i, which):
        """which: 'open' (CC or feed text, else the summary) or 'lock' (the locked full article)."""
        t = locked.get(i["id"]) if which == "lock" else (texts.get(i["id"]) if i.get("text") or i.get("feed") else None)
        ps = [x for x in (speakable(p) for p in (t or {}).get("paras") or []) if x]
        if not ps and i.get("summary"):
            ps = [x for x in [speakable(i["summary"])] if x]
        # A first line that just says the headline again isn't read twice (sameAsTitle() in app.html).
        return drop_repeat(ps, i.get("title", ""))

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
    lead = FOCUS + [x for x in LEAD if x not in FOCUS]
    for s, items in feeds.items():
        w = 1 if s in lead else 4 if s.startswith(("local-", "community-")) else 2
        for r, i in enumerate(items):  # every story in the list, so none is left without Emma's voice
            ranked.append((r * w + (w - 1) - (60 if s in FOCUS else 0), lead.index(s) if s in lead else 99, r, i))
    ranked.sort(key=lambda x: x[:3])
    rounds = [[x[3] for x in ranked[n:n + 25]] for n in range(0, len(ranked), 25)]
    later = []  # second versions, for phones without the passphrase
    for r, row in enumerate(rounds):
        for i in row:
            if i["id"] in stories:
                continue
            head = [want(f"{clean(i['title'])}.")]  # the publisher isn't read out: it's on screen
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
# A more human read
# ---------------------------------------------------------------------------
# The voice can't be told where to put emphasis, so each piece is read a sentence at a time with the small changes a
# person makes without thinking: a touch slower or quicker, the pitch lifting or settling a hair, a little louder on
# a headline, trailing off slightly at the end of a sentence, and breaths of natural length between sentences. All of
# it is tiny and seeded from the words, so the same text always sounds the same. Bump STYLEV when this changes:
# pieces made the old way are kept (so nothing goes missing) and remade in the background, newest stories first.
STYLEV = 9
PACE = 1.02  # her overall pace: 2% quicker than the voice's own
SENT_SPLIT = re.compile(r"(?<=[.!?…])[\"”’)]?\s+(?=[A-Z0-9\"“‘(])")


# Some outlets start a story in capitals ("A MAN has been charged", "IT was a night to remember", "THE INVERLOCH
# community"). The voice spells short ones out ("M-A-N"), so in an article's first sentence a word in capitals is read
# as a word when it's a real one: one the day's news also writes in normal case. Real acronyms stay letters.
KEEP_CAPS = {"US", "UK", "UN", "EU", "AI", "NZ", "PM", "AFL", "NRL", "ABC", "SBS", "BBC", "CEO", "GP", "IVF", "CCTV", "NASA", "WHO", "AM", "OK"}
LEDE = re.compile(r"^(\W*)((?:[A-Z][A-Z'’]*(?:[\s,]+|$))+)(?=[a-z])")


def word_forms(texts):
    """Every word the day's news writes in normal case, by its lower case: the form it's usually written in."""
    seen = {}
    for t in texts:
        for w in re.findall(r"\b[A-Za-z][a-z]+(?:['’][a-z]+)?\b", t):
            seen.setdefault(w.lower(), {}).setdefault(w, 0)
            seen[w.lower()][w] += 1
    return {k: max(v, key=v.get) for k, v in seen.items()}


def unshout(say, forms):
    m = LEDE.match(say)
    if not m:
        return say
    run, out = m.group(2), []
    for n, tok in enumerate(re.split(r"(\s+|,)", run)):
        bare = tok.strip("'’")
        if bare.isalpha() and bare.isupper() and bare not in KEEP_CAPS and (bare.lower() in forms or len(bare) == 1):
            w = forms.get(bare.lower(), bare.lower())
            tok = tok.replace(bare, w[:1].upper() + w[1:] if not out or not "".join(out).strip() else w)
        out.append(tok)
    return m.group(1) + "".join(out) + say[m.end():]


def speak(model, np, say, seed, head):
    import random
    rng = random.Random(seed)
    parts = [p for p in SENT_SPLIT.split(say) if p.strip()] or [say]
    out, sr = [], 24000
    for n, sent in enumerate(parts):
        words = len(sent.split())
        speed = 0.97 if head else 1.0 + rng.uniform(-0.0125, 0.0125)
        if sent.rstrip().endswith("?"):
            speed -= 0.0075
        if words < 6:
            speed -= 0.0075        # short sentences land a little slower
        elif words > 26:
            speed += 0.006         # long ones move along
        if not head and n == len(parts) - 1 and len(parts) > 1:
            speed -= 0.006         # easing off at the end of a thought
        speed *= PACE
        pitch = 1.002 if head else 1 + rng.uniform(-0.0045, 0.0045)  # tape-style nudge, made up for in the speed (kept small: more sounds like someone else)
        if any(w.search(sent) for w, _, _ in SOUNDS):
            ph = model.tokenizer.phonemize(sent, LANG)
            for w, pat, snd in SOUNDS:
                if w.search(sent):
                    ph = pat.sub(snd, ph, count=len(w.findall(sent)))
            audio, sr = model.create(ph, voice=VOICE, speed=speed / pitch, lang=LANG, is_phonemes=True)
        else:
            audio, sr = model.create(sent, voice=VOICE, speed=speed / pitch, lang=LANG)
        audio = np.asarray(audio, dtype=np.float32)
        loud = np.flatnonzero(np.abs(audio) > 0.01)
        if loud.size:
            audio = audio[max(0, loud[0] - int(sr * 0.04)):loud[-1] + int(sr * 0.06)]
        if audio.size > 10:
            # The pitch nudge, plus a very slow, very small drift within the sentence (about 0.5%, every 2 to 3 seconds),
            # the way a voice never holds exactly level.
            m = int(len(audio) / pitch)
            t = np.arange(m) / sr
            rate = pitch * (1 + 0.005 * np.sin(2 * np.pi * t / rng.uniform(1.8, 3.2) + rng.uniform(0, 6.283)))
            pos = np.concatenate([[0.0], np.cumsum(rate[:-1])])
            pos = pos[pos < len(audio) - 1]
            audio = np.interp(pos, np.arange(len(audio)), audio).astype(np.float32)
        gain = 1.035 if head else 1 + rng.uniform(-0.05, 0.05)
        audio = audio * np.linspace(gain * 1.035, gain * 0.96, len(audio), dtype=np.float32)  # a person trails off a little
        fade = min(len(audio) // 4, int(sr * 0.008))
        if fade:
            audio[:fade] *= np.linspace(0, 1, fade, dtype=np.float32)
            audio[-fade:] *= np.linspace(1, 0, fade, dtype=np.float32)
        if out:
            gap = 0.21 + rng.uniform(0, 0.1) + (0.04 if out_end.endswith("?") else 0)
            out.append(np.zeros(int(sr * gap), dtype=np.float32))
        out.append(audio)
        out_end = sent.rstrip()
    return np.concatenate(out) if out else np.zeros(1, dtype=np.float32), sr


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
        prev, fixed, sfixed = {}, set(), set()
        styled_prev = set()
        try:
            pidx = json.loads(urllib.request.urlopen(base + f"index.json?v={int(t0)}", timeout=20).read())
            if pidx.get("v") == TAG and pidx.get("lk") == (lock_fp(vkey) if vkey else None):
                prev = pidx.get("c", {})
                fixed = set(pidx.get("fx", [])) if pidx.get("sayv") == SAYV else set()
                sfixed = set(pidx.get("sfx", [])) if pidx.get("sndv") == SOUNDSV else set()
                styled_prev = set(pidx.get("stx", [])) if pidx.get("stv") == STYLEV else set()
        except Exception as e:
            print("no earlier audio:", e)

        def grab(job):
            k, text, lock = job
            h, want_t = k[:16], 2 if lock else 1
            got_t = prev.get(h)
            if got_t is None or (got_t == 2 and not lock):
                return None
            if RESAY.search(text) and h not in fixed:
                return None  # made with the old pronunciation
            if SOUNDW.search(text) and h not in sfixed:
                return None  # made before its words' sounds were fixed
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
    styled = {h for h in have if h in (styled_prev if a.reuse_from else set())}

    # Make the rest, until the time runs out.
    made, secs = 0, 0.0
    # An open piece is still wanted when only a locked recording of the same words exists: phones without the
    # passphrase can't play the locked one, so whole stories stayed unready for them.
    todo = [j for j in mine if j[0][:16] not in have or (not j[2] and have.get(j[0][:16]) != 1)]
    forms = word_forms(t for _, t, _ in jobs)
    firsts = {st[v][1] for st in stories.values() for v in ("o", "l") if len(st.get(v) or []) > 1}  # each article's opening
    # Then pieces made in an older style, remade in the background (the old recording stays until the new one is in).
    restyle = [j for j in mine if j[0][:16] in have and j[0][:16] not in styled and (j[2] or have.get(j[0][:16]) == 1)]
    todo += restyle
    redo = {j[0][:16] for j in restyle}
    if todo and time.time() - t0 < a.budget:
        import lameenc
        import numpy as np
        from kokoro_onnx import Kokoro
        model = Kokoro(os.path.join(a.models, "kokoro-v1.0.onnx"), os.path.join(a.models, "voices-v1.0.bin"))
        add_lexicon(model.tokenizer)
        aes = None
        if vkey:
            from cryptography.hazmat.primitives.ciphers.aead import AESGCM
            aes = AESGCM(vkey)
        for k, text, lock in todo:
            if time.time() - t0 > a.budget:
                break
            h = k[:16]
            if h in have and (lock or have[h] == 1) and (h not in redo or h in styled):  # already made (open beats locked)
                continue
            say = text
            if k in firsts:
                say = unshout(say, forms)
            for pat, rep in SAY:
                say = re.sub(pat, rep, say)
            try:
                audio, sr = speak(model, np, say, int(h, 16), k in heads)
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
            styled.add(h)
            made += 1
            secs += len(audio) / sr
    with open(os.path.join(out_dir, f"part-{n_of}.json"), "w") as f:
        json.dump(have, f)
    # Which of this shard's pieces carry the current pronunciation fixes.
    with open(os.path.join(out_dir, f"fx-{n_of}.json"), "w") as f:
        json.dump([j[0][:16] for j in mine if j[0][:16] in have and RESAY.search(j[1])], f)
    with open(os.path.join(out_dir, f"snd-{n_of}.json"), "w") as f:
        json.dump([j[0][:16] for j in mine if j[0][:16] in have and SOUNDW.search(j[1])], f)
    with open(os.path.join(out_dir, f"sty-{n_of}.json"), "w") as f:
        json.dump(sorted(h for h in styled if h in have), f)
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
    fx = set()
    for p in glob.glob(os.path.join(out_dir, "fx-*.json")):
        fx.update(json.load(open(p)))
        os.remove(p)
    sfx = set()
    for p in glob.glob(os.path.join(out_dir, "snd-*.json")):
        sfx.update(json.load(open(p)))
        os.remove(p)
    stx = set()
    for p in glob.glob(os.path.join(out_dir, "sty-*.json")):
        stx.update(json.load(open(p)))
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
             "open": {r: {**o, "night": o["night"] if o.get("night") and key_of(o["night"]) in have else None,
                          "next": o["next"] if o.get("next") and key_of(o["next"]["text"]) in have else None}
                      for r, o in opens.items() if key_of(o["text"]) in have}, "sample": SAMPLE, "c": have, "s": done,
             "sayv": SAYV, "fx": sorted(h for h in fx if h in have), "sndv": SOUNDSV, "sfx": sorted(h for h in sfx if h in have),
             "stv": STYLEV, "stx": sorted(h for h in stx if h in have)}
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
