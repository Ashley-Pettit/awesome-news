// Awesome News service worker: an offline backup only. While you're online it stays out of the way, so the browser loads
// everything itself (some work networks block requests a service worker makes, which showed as "can't reach this page").
// The page saves a copy of itself (see app.html), so the app still opens when you're offline.
const CACHE = "awesome-news-v7";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith("awesome-news-") && k !== CACHE) {  // carry the last saved pages over, drop the rest
    try { const old = await caches.open(k), now = await caches.open(CACHE);
      for (const r of await old.keys()) if (!/\/data\/|\.(png|jpe?g|webp|mp3|json)$/.test(new URL(r.url).pathname)) { const hit = await old.match(r); if (hit) await now.put(r, hit); }
    } catch {}
    await caches.delete(k);
  }
  await self.clients.claim();
})()));

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || req.mode !== "navigate" || new URL(req.url).origin !== self.location.origin) return;
  if (self.navigator.onLine !== false) return;  // online: the browser loads the page itself
  const url = new URL(req.url);
  e.respondWith(caches.match(url.origin + url.pathname)
    .then(hit => hit || caches.match(new URL("./", self.registration.scope).href))
    .then(hit => hit || fetch(req)));
});
