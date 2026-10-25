#!/usr/bin/env python3
"""Wrap app.html into a full web page for GitHub Pages.

app.html is written as a page body (the same file also runs as a private Claude
artifact). This adds the document head, home-screen icon and manifest.

Usage: python3 build.py SITE_DIR
"""
import os
import re
import shutil
import sys

site = sys.argv[1] if len(sys.argv) > 1 else "_site"
here = os.path.dirname(os.path.abspath(__file__))
app = open(os.path.join(here, "app.html"), encoding="utf-8").read()

m = re.search(r"<title>(.*?)</title>", app)
title = m.group(1) if m else "Daily Brief"
body = re.sub(r"<title>.*?</title>\s*", "", app, count=1)
body = re.sub(r'<meta name="claude:[^"]+"[^>]*>\s*', "", body)

head = f"""<!doctype html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="Brisbane and Australian news, politics, finance, tech and AI from free, full-article sources. No paywalls, no sport.">
<meta name="theme-color" content="#f4f3f1" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0f0e11" media="(prefers-color-scheme: dark)">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Daily Brief">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" href="icons/favicon-64.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<style>
:root{{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}
body{{margin:0;font:14px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}}
img{{max-width:100%}}
[hidden]{{display:none!important}}
</style>
</head>
<body>
"""

os.makedirs(site, exist_ok=True)
with open(os.path.join(site, "index.html"), "w", encoding="utf-8") as f:
    f.write(head + body.strip() + "\n</body>\n</html>\n")
shutil.copytree(os.path.join(here, "icons"), os.path.join(site, "icons"), dirs_exist_ok=True)
shutil.copy(os.path.join(here, "manifest.webmanifest"), site)
open(os.path.join(site, ".nojekyll"), "w").close()
print(f"Built {site}/index.html")
