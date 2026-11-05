#!/usr/bin/env python3
"""share.py: a link-preview page for every story, so a shared story looks great in Messages, WhatsApp, Facebook and Slack.

    python share.py SITE_DIR

Reads the stories the site already has (SITE_DIR/data/feeds/*.json and the six-month archive in SITE_DIR/data/archive/)
and writes SITE_DIR/s/<id>.html for each one. A shared link is https://.../awesome-news/s/<id>: apps that build a preview
read its tags (the story's photo, headline, outlet and summary, with "Awesome News" as the site), and a person who taps it
lands on a small card that opens the story straight away in the app (and still works for a story that has dropped out of
today's news). Also writes SITE_DIR/404.html, so an old link whose page has gone still opens the app at that story.

The pages only describe the story and link to it: no article text is copied. They're kept out of search engines.
"""
import glob
import html
import json
import os
import re
import sys
from datetime import datetime, timedelta, timezone
from urllib.parse import quote

SITE = sys.argv[1] if len(sys.argv) > 1 else "_site"
REPO = os.environ.get("GITHUB_REPOSITORY", "Ashley-Pettit/awesome-news")
OWNER, NAME = REPO.split("/", 1)
BASE = os.environ.get("SITE_URL", f"https://{OWNER.lower()}.github.io/{NAME}/")
BRIS = timezone(timedelta(hours=10))
JUNK_IMG = re.compile(r"(placeholder|default[-_]?image|logo|spacer|pixel)\.", re.I)


def bigger(img):
    """Ask for a larger version of a few outlets' thumbnails, so the preview shows a big photo, not a small square."""
    img = re.sub(r"(ichef\.bbci\.co\.uk/(?:ace/standard|news))/\d+/", r"\1/976/", img)  # BBC
    img = re.sub(r"(i\.ytimg\.com/vi/[^/]+/)(?:default|mqdefault|hqdefault)\.jpg", r"\1hqdefault.jpg", img)  # YouTube
    img = re.sub(r"([?&](?:w|width))=\d{2,3}\b", r"\1=1200", img)  # ?w=240 style resizers
    return img


def when(p):
    try:
        d = datetime.fromisoformat(str(p).replace("Z", "+00:00")).astimezone(BRIS)
    except Exception:
        return ""
    return f"{d.day} {d:%b %Y}"


def app_link(s):
    q = [("story", s["id"]), ("u", s["url"]), ("t", s["title"][:300]), ("s", s["source"]), ("d", s["published"])]
    return BASE + "#" + "&".join(f"{k}={quote(v or '', safe='')}" for k, v in q)


def page(s):
    e = lambda x: html.escape(x or "", quote=True)
    title, src, summ = s["title"].strip(), (s["source"] or "").strip(), re.sub(r"\s+", " ", s["summary"] or "").strip()
    if len(summ) > 220:
        summ = summ[:217].rsplit(" ", 1)[0] + "..."
    desc = f"{src}: {summ}" if src and summ else (summ or f"A story from {src or 'the news'}, shared from Awesome News.")
    img = s["image"] if s["image"].startswith("https://") and not JUNK_IMG.search(s["image"]) else ""
    og_img = bigger(img) if img else BASE + "icons/share-card.png?v=3"
    url, go, day = BASE + f"s/{s['id']}", app_link(s), when(s["published"])
    meta = " · ".join(x for x in (src, day) if x)
    hero = f'<div class="hero"><img src="{e(bigger(img))}" alt="" referrerpolicy="no-referrer" onerror="this.parentNode.remove()"></div>' if img else ""
    return f"""<!doctype html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{e(title)} | Awesome News</title>
<meta name="description" content="{e(desc)}">
<meta name="robots" content="noindex">
<link rel="canonical" href="{e(url)}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Awesome News">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{e(url)}">
<meta property="og:image" content="{e(og_img)}">
<meta property="og:image:alt" content="{e(title)}">
<meta property="article:published_time" content="{e(s['published'])}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{e(title)}">
<meta name="twitter:description" content="{e(desc)}">
<meta name="twitter:image" content="{e(og_img)}">
<meta name="theme-color" content="#0e0d16">
<link rel="icon" type="image/png" href="../icons/favicon-64.png?v=2">
<link rel="apple-touch-icon" href="../icons/apple-touch-icon.png?v=2">
<link rel="stylesheet" href="share.css?v=1">
</head>
<body>
<main>
<div class="brand"><img src="../icons/apple-touch-icon.png?v=2" alt="">Awesome News</div>
{hero}
<div class="body">
<p class="meta">{e(meta)}</p>
<h1>{e(title)}</h1>
{f'<p class="sum">{e(summ)}</p>' if summ else ''}
<a class="go" href="{e(go)}">Read it in Awesome News</a>
<a class="alt" href="{e(s['url'])}" rel="noopener">Or read it at {e(src or 'the source')}</a>
</div>
</main>
<script>setTimeout(function(){{location.replace({json.dumps(go)})}},350)</script>
</body>
</html>
"""


NOT_FOUND = f"""<!doctype html>
<html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Awesome News</title><meta name="robots" content="noindex">
<style>body{{margin:0;min-height:100vh;display:grid;place-items:center;background:#0e0d16;color:#f5f3fb;font:16px system-ui,-apple-system,sans-serif}}a{{color:#b9aefc}}</style>
</head><body><p>Opening Awesome News... <a href="{BASE}">Tap here</a> if it doesn't.</p>
<script>
// An old shared link whose page has gone (s/<id>): open the app at that story, which it finds in its six-month archive.
var m = location.pathname.match(/\\/s\\/([A-Za-z0-9_-]+?)(?:\\.html)?\\/?$/);
location.replace({json.dumps(BASE)} + (m ? "#story=" + m[1] : ""));
</script></body></html>
"""


CSS = """:root{color-scheme:dark;--bg:#0e0d16;--card:#1a1826;--ink:#f5f3fb;--dim:#b4afc6;--accent:#8b7cf6}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px 16px;background:radial-gradient(120% 80% at 50% 0%,#2a2350 0%,var(--bg) 60%);color:var(--ink);font:16px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
main{width:100%;max-width:520px;background:var(--card);border-radius:22px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.45)}
.brand{display:flex;align-items:center;gap:10px;padding:14px 18px;font-weight:800;letter-spacing:.01em}
.brand img{width:30px;height:30px;border-radius:8px}
.hero{aspect-ratio:16/9;background:#000;overflow:hidden}
.hero img{width:100%;height:100%;object-fit:cover;display:block}
.body{padding:18px 20px 22px}
.meta{margin:0 0 6px;color:var(--dim);font-size:.85rem;font-weight:600}
h1{margin:0 0 10px;font-size:1.45rem;line-height:1.25}
p.sum{margin:0 0 18px;color:var(--dim)}
a.go{display:flex;justify-content:center;align-items:center;gap:8px;min-height:48px;border-radius:14px;background:var(--accent);color:#fff;font-weight:800;text-decoration:none}
a.alt{display:block;margin-top:12px;text-align:center;color:var(--dim);font-size:.9rem}
a:focus-visible{outline:2px solid #fff;outline-offset:3px}
"""


def main():
    stories = {}
    for f in sorted(glob.glob(os.path.join(SITE, "data", "archive", "*.json"))):  # six months of headlines (older first)
        try:
            for it in json.load(open(f)).get("items", []):
                if it.get("id") and it.get("u") and it.get("t"):
                    stories[it["id"]] = {"id": it["id"], "title": it["t"], "summary": it.get("s", ""), "url": it["u"], "source": it.get("src", ""),
                                         "published": it.get("p", ""), "image": it.get("img", "")}
        except Exception as ex:
            print("archive", f, ex)
    for f in sorted(glob.glob(os.path.join(SITE, "data", "feeds", "*.json"))):  # today's news wins (bigger photos)
        try:
            for it in json.load(open(f)).get("items", []):
                if it.get("id") and it.get("url") and it.get("title"):
                    stories[it["id"]] = {"id": it["id"], "title": it["title"], "summary": it.get("summary", ""), "url": it["url"],
                                         "source": it.get("source", ""), "published": it.get("published", ""), "image": it.get("image", "") or ""}
        except Exception as ex:
            print("feed", f, ex)
    out = os.path.join(SITE, "s")
    os.makedirs(out, exist_ok=True)
    n = 0
    for s in stories.values():
        if not re.fullmatch(r"[A-Za-z0-9_-]{4,40}", s["id"]) or not s["url"].startswith("http"):
            continue
        with open(os.path.join(out, f"{s['id']}.html"), "w", encoding="utf-8") as f:
            f.write(page(s))
        n += 1
    with open(os.path.join(out, "share.css"), "w", encoding="utf-8") as f:
        f.write(CSS)
    with open(os.path.join(SITE, "404.html"), "w", encoding="utf-8") as f:
        f.write(NOT_FOUND)
    print(f"Share pages: {n}")


if __name__ == "__main__":
    main()
