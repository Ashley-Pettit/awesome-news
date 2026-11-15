"""Link-preview pictures for the local apps (Ash, 16 November 2026: "Improve sharing link images").

    python3 tools/share_cards.py

Writes, for Moorooka News, The Logan Wire and Coastline News:
- local/<slug>/share.png (1200 x 630): the town, the app's icon, name and tagline, on its colours (the app's link preview);
- local/<slug>/explore-share.jpg (1200 x 630): the town full size with "Explore <town> in 3D" (the 3D model's link preview,
  Ash, 16 November 2026: "Better share links 4 explores").
Both are made from local/<slug>/explore-shot.jpg, a 1200 x 630 view of the town from its 3D model (a render from Explore at
high quality, with the place names showing). Uses Playwright's Chromium and the Inter font. build.py puts them in the pages'
og:image (share.png?v=2, explore-share.jpg?v=2).
"""
import base64, json, os
from playwright.sync_api import sync_playwright

here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
brands = json.load(open(os.path.join(here, "local", "brands.json"), encoding="utf-8"))
LOOK = {  # the app's colour, its accent, and what the second chip says
    "moo": ("#5e1430", "#f2c7d3", "Moorooka"),
    "logan": ("#0d4f51", "#f0c140", "Logan"),
    "inv": ("#0c435f", "#bfe6f5", "Inverloch"),
}
b64 = lambda p: base64.b64encode(open(p, "rb").read()).decode()

def card(slug):
    b, (col, acc, town) = brands[slug], LOOK[slug]
    d = os.path.join(here, "local", slug)
    page = f"""<!doctype html><html><head><meta charset="utf-8"><style>
    * {{ margin: 0; box-sizing: border-box; }}
    body {{ width: 1200px; height: 630px; overflow: hidden; font-family: Inter, sans-serif; color: #fff; background: {col}; position: relative; }}
    .town {{ position: absolute; inset: 0 0 0 330px; background: url(data:image/jpeg;base64,{b64(os.path.join(d, "explore-shot.jpg"))}) center / cover no-repeat; }}
    .fade {{ position: absolute; inset: 0; background: linear-gradient(90deg, {col} 0%, {col} 34%, {col}e6 46%, {col}00 74%); }}
    .copy {{ position: absolute; left: 72px; top: 0; bottom: 0; width: 640px; display: flex; flex-direction: column; justify-content: center; }}
    img {{ width: 128px; height: 128px; border-radius: 30px; box-shadow: 0 10px 30px rgba(0,0,0,.35); margin-bottom: 34px; }}
    h1 {{ font-family: "Inter Display", Inter, sans-serif; font-weight: 900; font-size: 84px; line-height: 0.98; letter-spacing: -1.5px; }}
    p {{ font-size: 30px; line-height: 1.3; margin-top: 20px; color: {acc}; font-weight: 600; max-width: 560px; }}
    .chips {{ display: flex; gap: 12px; margin-top: 30px; }}
    .chips span {{ font-size: 22px; font-weight: 700; padding: 9px 18px; border-radius: 999px; background: rgba(255,255,255,.14); border: 1.5px solid rgba(255,255,255,.35); }}
    </style></head><body><div class="town"></div><div class="fade"></div>
    <div class="copy"><img src="data:image/png;base64,{b64(os.path.join(d, "icon-512.png"))}"><h1>{b["name"]}</h1><p>{b["tagline"]}</p>
    <div class="chips"><span>Local news first</span><span>{town} in 3D</span></div></div></body></html>"""
    return page

def explore(slug):
    col, acc, town = LOOK[slug]
    d = os.path.join(here, "local", slug)
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
    * {{ margin: 0; box-sizing: border-box; }}
    body {{ width: 1200px; height: 630px; overflow: hidden; font-family: Inter, sans-serif; color: #fff; position: relative;
      background: url(data:image/jpeg;base64,{b64(os.path.join(d, "explore-shot.jpg"))}) center / cover no-repeat; }}
    .fade {{ position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(8,10,14,.55) 62%, rgba(8,10,14,.88) 100%); }}
    .copy {{ position: absolute; left: 64px; right: 64px; bottom: 54px; display: flex; gap: 30px; align-items: flex-end; }}
    img {{ width: 120px; height: 120px; border-radius: 28px; box-shadow: 0 10px 30px rgba(0,0,0,.45); flex: none; }}
    h1 {{ font-family: "Inter Display", Inter, sans-serif; font-weight: 900; font-size: 74px; line-height: 1; letter-spacing: -1.5px; text-shadow: 0 2px 18px rgba(0,0,0,.45); }}
    .chips {{ display: flex; gap: 12px; margin-top: 18px; }}
    .chips span {{ font-size: 23px; font-weight: 700; padding: 9px 18px; border-radius: 999px; background: rgba(255,255,255,.16); border: 1.5px solid rgba(255,255,255,.4); }}
    .chips span:first-child {{ background: {acc}; color: {col}; border-color: {acc}; }}
    </style></head><body><div class="fade"></div><div class="copy"><img src="data:image/png;base64,{b64(os.path.join(d, "explore-icon.png"))}">
    <div><h1>Explore {town} in 3D</h1><div class="chips"><span>Free in your browser</span><span>Walk and drive</span><span>Meet the locals</span></div></div></div></body></html>"""

with sync_playwright() as pw:
    br = pw.chromium.launch()
    pg = br.new_page(viewport={"width": 1200, "height": 630})
    for slug in LOOK:
        pg.set_content(card(slug)); pg.wait_for_timeout(300)
        pg.screenshot(path=os.path.join(here, "local", slug, "share.png"))
        pg.set_content(explore(slug)); pg.wait_for_timeout(300)
        pg.screenshot(path=os.path.join(here, "local", slug, "explore-share.jpg"), type="jpeg", quality=88)
        print("wrote", slug)
    br.close()
