#!/usr/bin/env python3
"""Wrap app.html into a full web page for GitHub Pages.

app.html is written as a page body (the same file also runs as a private Claude
artifact). This adds the document head, home-screen icon and manifest.

Usage: python3 build.py SITE_DIR
"""
import hashlib
import json
import os
import re
import shutil
import sys

site = sys.argv[1] if len(sys.argv) > 1 else "_site"
here = os.path.dirname(os.path.abspath(__file__))
app = open(os.path.join(here, "app.html"), encoding="utf-8").read()

m = re.search(r"<title>(.*?)</title>", app)
title = m.group(1) if m else "Awesome News"
# Public address, used for the link preview when someone shares the site.
repo = os.environ.get("GITHUB_REPOSITORY", "Ashley-Pettit/awesome-news")
owner, name = repo.split("/", 1)
site_url = os.environ.get("SITE_URL", f"https://{owner.lower()}.github.io/{name}/")
desc = "News that's all about you and what you're interested in. Customise your news feed, full articles, TV and listen modes. Optionally decrease negative news."
body = re.sub(r"<title>.*?</title>\s*", "", app, count=1)
body = re.sub(r'<meta name="claude:[^"]+"[^>]*>\s*', "", body)
body = re.sub(r'<meta name="theme-color"[^>]*>\s*', "", body)  # the head sets light and dark colours

head = f"""<!doctype html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{site_url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{title}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{site_url}">
<meta property="og:image" content="{site_url}icons/share-card.png?v=3">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Awesome News app icon and name">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="{site_url}icons/share-card.png?v=3">
<meta name="theme-color" content="#f6f5fa" media="(prefers-color-scheme: light)">
<meta name="format-detection" content="telephone=no">
<meta name="theme-color" content="#0e0d16" media="(prefers-color-scheme: dark)">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="{title}">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" href="icons/favicon-64.png?v=2">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png?v=2">
<style>
:root{{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}
body{{margin:0;font:14px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}}
img{{max-width:100%}}
[hidden]{{display:none!important}}
</style>
</head>
<body>
"""

# A build stamp: the app checks version.json against it and reloads itself when the site has a newer app
# (phones keep a home-screen app open for days without reloading).
def stamped(hd, bd, folder):
    build = hashlib.sha1((hd + bd).encode()).hexdigest()[:12]
    with open(os.path.join(folder, "version.json"), "w") as f:
        json.dump({"build": build}, f)
    from datetime import datetime, timedelta, timezone
    built = datetime.now(timezone(timedelta(hours=10))).strftime("%-d %b %H:%M")  # Brisbane time, shown to Rod and Ash
    return hd.replace("<head>\n", f'<head>\n<meta name="an-build" content="{build}">\n<meta name="an-built" content="{built}">\n', 1)


os.makedirs(site, exist_ok=True)
with open(os.path.join(site, "index.html"), "w", encoding="utf-8") as f:
    f.write(stamped(head, body, site) + body.strip() + "\n</body>\n</html>\n")

# The beta: beta/app.html, at /beta/, sharing the same news, voice and icons (everything resolves from the main folder).
beta_src = os.path.join(here, "beta", "app.html")
if os.path.exists(beta_src):
    bapp = open(beta_src, encoding="utf-8").read()
    bbody = re.sub(r"<title>.*?</title>\s*", "", bapp, count=1)
    bbody = re.sub(r'<meta name="claude:[^"]+"[^>]*>\s*', "", bbody)
    bbody = re.sub(r'<meta name="theme-color"[^>]*>\s*', "", bbody)
    bhead = (head.replace("<head>\n", '<head>\n<base href="../">\n', 1)
                 .replace(f"<title>{title}</title>", f"<title>{title} Beta</title>")
                 .replace('<link rel="canonical"', '<meta name="robots" content="noindex">\n<link rel="canonical"'))
    os.makedirs(os.path.join(site, "beta"), exist_ok=True)
    with open(os.path.join(site, "beta", "index.html"), "w", encoding="utf-8") as f:
        f.write(stamped(bhead, bbody, os.path.join(site, "beta")) + bbody.strip() + "\n</body>\n</html>\n")
    print(f"Built {site}/beta/index.html")
shutil.copytree(os.path.join(here, "icons"), os.path.join(site, "icons"), dirs_exist_ok=True)
shutil.copy(os.path.join(here, "manifest.webmanifest"), site)
shutil.copy(os.path.join(here, "sw.js"), site)
# Council news pictures sent from the work PC (council_news.py), served next to the app.
if os.path.isdir(os.path.join(here, "council", "img")):
    shutil.copytree(os.path.join(here, "council", "img"), os.path.join(site, "council", "img"), dirs_exist_ok=True)
# The local news apps ("Moorooka News", "The Logan Wire"): copies of Awesome News with their own name, icon and
# install details, whose Local news is tailored to the area (local/brands.json; LOCAL_APP in app.html). Each sits in its own
# folder but reads the same news, voice and pictures as the main app (<base href="../">), like the beta.
if os.path.exists(os.path.join(here, "local", "brands.json")):
    import base64
    brands = json.load(open(os.path.join(here, "local", "brands.json"), encoding="utf-8"))
    for slug, b in brands.items():
        d, nm = b["dir"], b["name"]
        out = os.path.join(site, d)
        os.makedirs(out, exist_ok=True)
        url = f"{site_url}{d}/"
        icon = "data:image/png;base64," + base64.b64encode(open(os.path.join(here, "local", slug, "icon-120.png"), "rb").read()).decode()
        lbody = body.replace("Awesome News", nm)
        cfg = {"extra": b["local"].get("extra", "")}
        cfg.update({k: v for k, v in b["local"].items() if k != "extra" and v})
        for a, z in [('const DEFAULT_REGION = "qld";', f'const DEFAULT_REGION = {json.dumps(b["region"])};'),
                     ("const LOCAL_APP = null;", f"const LOCAL_APP = {json.dumps(cfg)};"),
                     ('const OPEN_KEY = "";', f'const OPEN_KEY = {json.dumps(b["open_key"])};'),
                     ('const KEY_PREFIX = "";', f'const KEY_PREFIX = {json.dumps(b["prefix"])};')]:
            assert lbody.count(a) == 1, a
            lbody = lbody.replace(a, z)
        lbody = re.sub(r'const APP_ICON = "data:image/png;base64,[^"]+";', lambda m: f'const APP_ICON = "{icon}";', lbody, count=1)
        lhead = (head.replace("<head>\n", '<head>\n<base href="../">\n', 1)
                     .replace(f"<title>{title}</title>", f"<title>{nm}</title>")
                     .replace(f'content="{title}"', f'content="{nm}"')
                     .replace(desc, b["tagline"])
                     .replace(f'href="{site_url}"', f'href="{url}"').replace(f'content="{site_url}"', f'content="{url}"')
                     .replace(f"{site_url}icons/share-card.png?v=3", f"{url}share.png?v=1")
                     .replace("Awesome News app icon and name", f"{nm} app icon and name")
                     .replace('href="manifest.webmanifest"', f'href="{d}/manifest.webmanifest"')
                     .replace('href="icons/favicon-64.png?v=2"', f'href="{d}/icon-192.png?v=1"')
                     .replace('href="icons/apple-touch-icon.png?v=2"', f'href="{d}/icon-180.png?v=1"'))
        with open(os.path.join(out, "index.html"), "w", encoding="utf-8") as f:
            f.write(stamped(lhead, lbody, out) + lbody.strip() + "\n</body>\n</html>\n")
        for fn in ("icon-180.png", "icon-192.png", "icon-512.png", "share.png"):
            shutil.copy(os.path.join(here, "local", slug, fn), out)
        with open(os.path.join(out, "manifest.webmanifest"), "w", encoding="utf-8") as f:
            json.dump({"name": nm, "short_name": b["short"], "description": b["tagline"], "start_url": "./", "scope": "./", "id": "./",
                       "display": "standalone", "background_color": "#f6f5fa", "theme_color": "#f6f5fa",
                       "icons": [{"src": "icon-192.png", "sizes": "192x192", "type": "image/png"}, {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"}]}, f)
        print(f"Built {out}/index.html")
open(os.path.join(site, ".nojekyll"), "w").close()
print(f"Built {site}/index.html")
