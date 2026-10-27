// Awesome News home screen widget for iPhone (runs in the free Scriptable app).
//
// Set up:
// 1. Install Scriptable from the App Store and open it.
// 2. Tap +, paste this whole script, and name it "Awesome News".
// 3. On your home screen, long-press, tap Edit > Add Widget, pick Scriptable, choose a size and add it.
// 4. Long-press the new widget > Edit Widget, and set Script to "Awesome News".
// 5. Optional: put a tab in Parameter to show it instead of Headlines, e.g. local-qld, politics, finance, tech, ai, world.
//
// Tap a headline (medium and large sizes) to open that story in Awesome News.

const SITE = "https://ashley-pettit.github.io/awesome-news/";
const LABELS = {
  headlines: "Headlines", "local-qld": "Queensland", "local-nsw": "New South Wales", "local-vic": "Victoria",
  politics: "Politics", finance: "Finance", tech: "Tech", ai: "AI", copilot: "Copilot", world: "World",
  science: "Science", space: "Space", goodnews: "Good news", environment: "Environment",
};
const ACCENT = Color.dynamic(new Color("#7a1d33"), new Color("#ec8fa3"));
const INK = Color.dynamic(new Color("#17161a"), new Color("#efecf1"));
const MUTED = Color.dynamic(new Color("#6a6670"), new Color("#a8a4ae"));
const BG = Color.dynamic(new Color("#f4f3f1"), new Color("#141317"));

const tab = ((args.widgetParameter || "").trim() || "headlines").toLowerCase();
const family = config.widgetFamily || "medium";
const howMany = { small: 3, medium: 3, large: 6, extraLarge: 8 }[family] || 3;

// Load the latest stories; fall back to the last copy saved on the phone when offline.
const fm = FileManager.local();
const cachePath = fm.joinPath(fm.cacheDirectory(), `awesome-news-${tab}.json`);
async function getJSON(url) {
  const r = new Request(url);
  r.timeoutInterval = 15;
  return await r.loadJSON();
}
let data = null;
try {
  const status = await getJSON(`${SITE}data/status.json?t=${Date.now()}`);
  const feed = await getJSON(`${SITE}data/feeds/${encodeURIComponent(tab)}.json?v=${encodeURIComponent(status.updatedAt || "")}`);
  data = { updatedAt: status.updatedAt, items: (feed.items || []).slice(0, 12) };
  fm.writeString(cachePath, JSON.stringify(data));
} catch (e) {
  if (fm.fileExists(cachePath)) data = JSON.parse(fm.readString(cachePath));
}

function ago(iso) {
  const mins = Math.max(0, Math.round((Date.now() - Date.parse(iso)) / 60000));
  if (mins < 60) return `${mins}m`;
  const h = Math.round(mins / 60);
  return h < 24 ? `${h}h` : `${Math.round(h / 24)}d`;
}

const w = new ListWidget();
w.backgroundColor = BG;
w.setPadding(14, 15, 12, 15);
w.url = SITE;
w.refreshAfterDate = new Date(Date.now() + 30 * 60000);

// Header: brand on the left, tab on the right
const head = w.addStack();
head.centerAlignContent();
const brand = head.addText(family === "small" ? "Awesome" : "Awesome News");
brand.font = Font.custom("Georgia-Bold", family === "small" ? 14 : 15);
brand.textColor = INK;
head.addSpacer();
const lab = head.addText((LABELS[tab] || tab).toUpperCase());
lab.font = Font.boldSystemFont(9);
lab.textColor = ACCENT;
w.addSpacer(family === "small" ? 6 : 8);

if (!data || !data.items.length) {
  const t = w.addText(data ? "No stories in this tab yet." : "Can't reach Awesome News right now.");
  t.font = Font.systemFont(13);
  t.textColor = MUTED;
} else {
  const items = data.items.slice(0, howMany);
  if (family === "small") w.url = `${SITE}#story=${encodeURIComponent(items[0].id)}`;
  items.forEach((it, n) => {
    const row = w.addStack();
    row.layoutVertically();
    row.url = `${SITE}#story=${encodeURIComponent(it.id)}`;
    if (family !== "small") {
      const meta = row.addText(`${it.source.toUpperCase()} · ${ago(it.published)}`);
      meta.font = Font.semiboldSystemFont(9);
      meta.textColor = n === 0 ? ACCENT : MUTED;
      meta.lineLimit = 1;
      row.addSpacer(1);
    }
    const title = row.addText(it.title);
    title.font = family === "small" ? Font.semiboldSystemFont(12) : Font.semiboldSystemFont(n === 0 ? 14 : 13);
    title.textColor = INK;
    title.lineLimit = 2;
    title.minimumScaleFactor = 0.85;
    if (n < items.length - 1) w.addSpacer(family === "small" ? 5 : 7);
  });
}

w.addSpacer();
if (family !== "small" && data?.updatedAt) {
  const foot = w.addText(`Updated ${ago(data.updatedAt)} ago`);
  foot.font = Font.systemFont(9);
  foot.textColor = MUTED;
}

if (config.runsInWidget) Script.setWidget(w);
else if (config.runsWithSiri) w.presentMedium();
else await w.presentLarge();
Script.complete();
