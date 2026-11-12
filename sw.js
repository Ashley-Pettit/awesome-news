// Awesome News service worker: network first, so news is always fresh when
// you're online, with the last copy kept so the app still opens offline.
const CACHE = "awesome-news-v6";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  // Ready-made voice clips change with every update, so they aren't kept (they'd pile up on the phone).
  if (url.pathname.includes("/data/voice/")) return;
  // Shared-story pages (s/<id>) just open the app at that story: no need to keep them.
  if (url.pathname.includes("/s/")) return;
  // One cache entry per file, ignoring the ?v= cache-busting query.
  const key = url.origin + url.pathname;
  // Opening a page: the network first (so updates show straight away), then this page's saved copy, then the app's own page.
  // If none of those work, ask the network once more for the original request, so the browser shows its real error
  // instead of a bare "can't reach this page" (links from Facebook carry a long ?fbclid=... and come through its link shim).
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req.url, { cache: "no-cache", credentials: "same-origin" })
        .then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(key, copy)); } return res; })
        .catch(() => caches.match(key))
        .then(hit => hit || caches.match(new URL("./", self.registration.scope).href))
        .then(hit => hit || fetch(req))
    );
    return;
  }
  // Opening the app always checks for a fresh page, so updates show straight away.
  const live = fetch(req);
  e.respondWith(
    live
      .then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(key, copy));
        }
        return res;
      })
      .catch(() => caches.match(key).then(hit => hit || Response.error()))
  );
});
