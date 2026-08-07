const CACHE_NAME = "kl-servis-rumah-v2";
const OFFLINE_URLS = ["/", "/contact", "/services", "/faq", "/manifest.json"];
// Navigation responses are cached for offline fallback. Bound the pool: this
// site serves 4,200+ pages, and an unbounded navigation cache could grow to
// hundreds of MB for visitors who browse deeply (and trigger browser quota
// eviction of the ORIGIN store). Cache API keys() follow insertion order, so
// trimming the front approximates LRU eviction.
// OFFLINE_URLS and hashed static assets are never evicted here: the offline
// fallbacks must survive, and static assets have their own immutable lifetime.
const MAX_NAV_CACHE_ENTRIES = 60;
const STATIC_ASSET_RE = /^\/_next\/static\/|\.(?:css|js|woff2?|png|jpe?g|webp|svg|ico|gif|avif)$/i;

function trimNavigationCache(cache) {
  return cache.keys().then((keys) => {
    const navKeys = keys.filter((request) => {
      const path = new URL(request.url).pathname;
      return !OFFLINE_URLS.includes(path) && !STATIC_ASSET_RE.test(path);
    });
    const overflow = navKeys.length - MAX_NAV_CACHE_ENTRIES;
    if (overflow <= 0) return;
    return Promise.all(navKeys.slice(0, overflow).map((key) => cache.delete(key)));
  });
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("kl-servis-rumah-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  // Never cache third-party requests, API responses, or Next.js data. These can
  // contain user-specific content and caching them caused stale forms/searches.
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/") || url.pathname.startsWith("/_next/data/")) {
    return;
  }

  const isNavigation = request.mode === "navigate";
  const isStaticAsset = url.pathname.startsWith("/_next/static/") ||
    /\.(?:css|js|woff2?|png|jpe?g|webp|svg|ico|gif|avif)$/i.test(url.pathname);

  if (isNavigation) {
    // Fresh HTML first, with a useful offline page as a last resort.
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) =>
              cache.put(request, copy).then(() => trimNavigationCache(cache))
            );
          }
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("/")))
    );
    return;
  }

  if (isStaticAsset) {
    // Hashed Next assets are immutable: avoid a network round-trip on repeat visits.
    event.respondWith(
      caches.match(request).then((cached) =>
        cached || fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
      )
    );
  }
});
