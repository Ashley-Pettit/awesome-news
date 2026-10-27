// Awesome News service worker: network first, so news is always fresh when
// you're online, with the last copy kept so the app still opens offline.
const CACHE = "awesome-news-v4";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  // One cache entry per file, ignoring the ?v= cache-busting query.
  const key = url.origin + url.pathname;
  // Opening the app always checks for a fresh page, so updates show straight away.
  const live = req.mode === "navigate" ? fetch(req.url, { cache: "no-cache", credentials: "same-origin" }) : fetch(req);
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
