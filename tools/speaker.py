"""Listen for a smart speaker: the news read by Emma as one MP3 at a fixed web address, plus a podcast feed.

A Google speaker can't open the app, but it can play an audio file (cast it) or a podcast. So after every news
update (pages.yml, once the audio's made) this puts together the same kind of listen the app plays, for the people
in local/speakers.json, from Emma's recorded pieces:

    listen/<name>.mp3         about an hour: the day's opening and weather, then the stories, most interesting first
    listen/<name>.xml         a podcast feed with that one episode (YouTube Music can add it by RSS)
    listen/<name>/index.html  a plain page with a player, to cast from a phone

Only the open versions of stories are used (Creative Commons articles, feed text, summaries): locked full articles
stay locked, the same as on the website.

    python tools/speaker.py _site
"""
import hashlib, html, json, os, re, shutil, subprocess, sys, tempfile
from datetime import datetime, timedelta, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)
import voice  # noqa: E402  plan(), key_of(), the pieces Emma has recorded

SITE_URL = "https://ashley-pettit.github.io/awesome-news/"
BNE = timezone(timedelta(hours=10))
GAP_PIECE, GAP_STORY = 0.35, 1.1     # seconds of quiet between pieces of a story, and between stories


def ts(i):
    try:
        return datetime.fromisoformat(i.get("published", "").replace("Z", "+00:00")).timestamp()
    except Exception:
        return 0


def words(t):
    return {w for w in re.findall(r"[a-z0-9']+", (t or "").lower()) if len(w) > 3}


def pick(prof, feeds, ready, minutes, secs_of):
    """The stories, in the order the app's Listen would play them for these sections (driveList() in app.html)."""
    interest = lambda i: i.get("int", 5) if isinstance(i.get("int"), (int, float)) else 5
    depth = lambda i: 2 if i.get("text") else 1 if i.get("feed") else 0
    out, seen_tp, seen_words = [], set(), []

    def same(i):
        if i.get("tp") and i["tp"] in seen_tp:
            return True
        w = words(i.get("title"))
        return any(len(w & s) >= 3 and len(w & s) / max(1, min(len(w), len(s))) >= 0.6 for s in seen_words)

    total = 0.0

    def add(i):
        nonlocal total
        if i["id"] in {x["id"] for x in out} or i["id"] not in ready or same(i):
            return False
        out.append(i)
        if i.get("tp"):
            seen_tp.add(i["tp"])
        seen_words.append(words(i.get("title")))
        total += secs_of(i["id"]) + GAP_STORY
        return True

    # Top stories: the headlines that most outlets ran, ABC's top stories and the most interesting, first.
    heads = feeds.get("headlines", [])
    score = lambda n, i: (i.get("outlets", 1) - 1) * 3 + (3 if i.get("top") else 0) + (interest(i) - 5) * 0.8 + (12 - n) / 4
    tops = [i for _, i in sorted(((score(n, i), i) for n, i in enumerate(heads[:20])), key=lambda x: -x[0])][:6]
    for i in tops:
        if depth(i) and interest(i) > 2:
            add(i)
    # Then every section in turn, the most interesting with a proper article first; dull ones only at the end.
    lanes = []
    for sec in prof["sections"]:
        items = sorted(feeds.get(sec, []), key=lambda i: -(ts(i) + (interest(i) - 5) * 3 * 3600))
        items = [x for _, x in sorted(((n + (0 if depth(i) == 2 else 10 if depth(i) else 60) - (interest(i) - 5) * 4, i) for n, i in enumerate(items)), key=lambda t: t[0])]
        items = [i for i in items if not set(prof.get("skip", [])) & {i.get("tp", ""), i.get("section", "")}]
        cap = prof.get("caps", {}).get(sec)  # "a little politics": only that many from a section
        lanes.append((sec, items[:cap] if cap else items))
    for dull_ok in (False, True):
        for r in range(40):
            for sec, items in lanes:
                if total >= minutes * 60:
                    return out
                for j in range(prof.get("lead", {}).get(sec, 1)):
                    k = r * prof.get("lead", {}).get(sec, 1) + j
                    if k < len(items) and (dull_ok or (interest(items[k]) > 2 and depth(items[k]))):
                        add(items[k])
    return out


def build(site, name, prof):
    data = os.path.join(site, "data")
    vdir = os.path.join(data, "voice")
    idx = json.load(open(os.path.join(vdir, "index.json")))
    have = set(idx.get("c", {}))
    status, _jobs, stories, opens, _heads = voice.plan(data, None)  # open versions only (no passphrase)
    feeds = {}
    for sec in prof["sections"]:
        p = os.path.join(data, "feeds", sec + ".json")
        if os.path.exists(p):
            d = json.load(open(p))
            feeds[sec] = [dict(i, section=sec) for i in (d.get("items") or [])
                          if not (prof.get("skipVideo") and i.get("video") and (i.get("source") or "").startswith("ABC"))]  # ABC's video stories
    feeds.setdefault("headlines", [])

    mp3 = lambda k: os.path.join(vdir, k + ".mp3")
    good = {}

    def ok(k):  # recorded, and really an MP3 (not an error page)
        if k not in good:
            try:
                with open(mp3(k), "rb") as f:
                    head = f.read(3)
                good[k] = k in have and (head == b"ID3" or head[:1] == b"\xff")
            except OSError:
                good[k] = False
        return good[k]
    more = voice.key_of(voice.MORE)
    # Brief: the headline and the first couple of pieces (a sentence or three), never "There's more on that one".
    keep = prof.get("brief")
    pieces_of = lambda sid: [k for k in ((stories.get(sid) or {}).get("o") or []) if k != more][: (1 + keep) if keep else None]
    ready = {sid for sid in stories if pieces_of(sid) and all(ok(k) for k in pieces_of(sid))}
    rate = {}

    def secs(k):
        if k not in rate:
            rate[k] = os.path.getsize(mp3(k)) / BYTES_PER_SEC
        return rate[k]

    first = next((mp3(k) for sid in ready for k in pieces_of(sid)), None)
    if not first:
        print(name, "no stories ready"); return False
    br = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "stream=bit_rate,sample_rate,channels", "-of", "json", first], capture_output=True, text=True)
    st = json.loads(br.stdout)["streams"][0]
    global BYTES_PER_SEC
    BYTES_PER_SEC = max(2000, int(st.get("bit_rate") or 48000) / 8)
    sr, ch = st.get("sample_rate", "24000"), int(st.get("channels") or 1)

    chosen = pick(prof, feeds, ready, prof.get("minutes", 60), lambda sid: sum(secs(k) + GAP_PIECE for k in pieces_of(sid)))

    # The opening: Emma's day and weather (tonight's listen gives tomorrow's), then the temperature right now.
    now = datetime.now(BNE)
    o = opens.get(prof.get("region", "qld")) or {}
    today = now.strftime("%Y-%m-%d")
    lines = []
    if o.get("day") == today:
        lines.append(o["night"] if now.hour >= 18 and o.get("night") else o["text"])
    elif (o.get("next") or {}).get("day") == today:
        lines.append(o["next"]["text"])
    cur = (((status.get("weather") or {}).get(prof.get("region", "qld")) or {}).get("current") or {}).get("temperature_2m")
    if cur is not None:
        t = round(cur)
        lines.append(f"It's currently {'minus ' + str(-t) if t < 0 else t} degree{'' if abs(t) == 1 else 's'}.")
    opening = [voice.key_of(t) for t in lines if ok(voice.key_of(t))]

    tmp = tempfile.mkdtemp()
    gap = {}
    for g in (GAP_PIECE, GAP_STORY):
        gap[g] = os.path.join(tmp, f"gap{g}.mp3")
        subprocess.run(["ffmpeg", "-v", "error", "-f", "lavfi", "-i", f"anullsrc=r={sr}:cl={'mono' if ch == 1 else 'stereo'}", "-t", str(g),
                        "-c:a", "libmp3lame", "-b:a", "48k", gap[g]], check=True)
    seq = []
    for k in opening:
        seq += [mp3(k), gap[GAP_STORY]]
    for i in chosen:
        for k in pieces_of(i["id"]):
            seq += [mp3(k), gap[GAP_PIECE]]
        seq.append(gap[GAP_STORY])
    lst = os.path.join(tmp, "list.txt")
    with open(lst, "w") as f:
        for p in seq:
            f.write("file '" + os.path.abspath(p).replace("'", "'\\''") + "'\n")
    outdir = os.path.join(site, "listen")
    os.makedirs(os.path.join(outdir, name), exist_ok=True)
    out = os.path.join(outdir, name + ".mp3")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", lst, "-ac", "1", "-ar", "24000", "-c:a", "libmp3lame", "-b:a", "48k",
                    "-metadata", f"title={prof['title']} {now:%-d %b %-I%p}".replace("AM", "am").replace("PM", "pm"), "-metadata", "artist=Awesome News", out], check=True)
    dur = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", out], capture_output=True, text=True).stdout or 0)
    shutil.rmtree(tmp, ignore_errors=True)

    # The podcast feed (one episode, the latest) and a page with a player.
    when = now.strftime("%A %-d %B, %-I%p").replace("AM", "am").replace("PM", "pm")
    ep = hashlib.sha1(f"{name}|{now:%Y%m%d%H}".encode()).hexdigest()[:12]
    url = f"{SITE_URL}listen/{name}.mp3"
    size = os.path.getsize(out)
    desc = f"{len(chosen)} stories from {', '.join(prof['labels'])}. Read by Emma from Awesome News."
    rss = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
<channel>
<title>{html.escape(prof['title'])}</title>
<link>{SITE_URL}</link>
<language>en-au</language>
<description>{html.escape(prof['about'])}</description>
<itunes:author>Awesome News</itunes:author>
<itunes:image href="{SITE_URL}icons/icon-512.png"/>
<itunes:explicit>false</itunes:explicit>
<itunes:category text="News"/>
<item>
<title>{html.escape(f"{prof['title']}, {when}")}</title>
<description>{html.escape(desc)}</description>
<guid isPermaLink="false">{name}-{ep}</guid>
<pubDate>{now.strftime('%a, %d %b %Y %H:%M:%S +1000')}</pubDate>
<enclosure url="{url}?e={ep}" length="{size}" type="audio/mpeg"/>
<itunes:duration>{int(dur)}</itunes:duration>
</item>
</channel>
</rss>
"""
    open(os.path.join(outdir, name + ".xml"), "w", encoding="utf-8").write(rss)
    page = f"""<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(prof['title'])}</title>
<style>body{{font:16px/1.5 system-ui,sans-serif;margin:0;padding:24px 16px;background:#f6f4ef;color:#1d1d1f}}main{{max-width:560px;margin:auto}}
h1{{font-size:1.5rem;margin:0 0 4px}}p{{color:#555}}audio{{width:100%;margin:16px 0}}a{{color:#1f5fa8}}
@media (prefers-color-scheme:dark){{body{{background:#141414;color:#eee}}p{{color:#aaa}}a{{color:#7fb3ff}}}}</style></head>
<body><main><h1>{html.escape(prof['title'])}</h1><p>{html.escape(when)}. {html.escape(desc)} About {round(dur / 60)} minutes.</p>
<audio controls preload="none" src="../{name}.mp3?e={ep}"></audio>
<p>To play it on a Google speaker, tap the cast button on the player (in Chrome) and pick the speaker. Or add the podcast feed to YouTube Music: <a href="../{name}.xml">{url[:-4]}.xml</a></p></main></body></html>
"""
    open(os.path.join(outdir, name, "index.html"), "w", encoding="utf-8").write(page)
    print(json.dumps({"name": name, "stories": len(chosen), "minutes": round(dur / 60, 1), "mb": round(size / 1e6, 1), "opening": len(opening)}))
    return True


BYTES_PER_SEC = 6000

if __name__ == "__main__":
    site = sys.argv[1]
    profs = json.load(open(os.path.join(ROOT, "local", "speakers.json"), encoding="utf-8"))
    for name, prof in profs.items():
        try:
            build(site, name, prof)
        except Exception as e:
            print(name, "failed:", e)
