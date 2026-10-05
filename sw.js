/**
 * Flick Analyst service worker
 * - Makes the site installable and lets the app shell open offline.
 * - Network-first for the site's own files, so a new deploy shows up right away.
 * - Never caches API calls (DexScreener, GoPlus, /api/*): market data must be live.
 * - Shows watchlist alert notifications and opens the token when one is tapped.
 */
const CACHE = 'flick-shell-v1';
const SHELL = ['/', '/app.js', '/flick-logo.webp', '/favicon.png', '/icon-192.png', '/manifest.webmanifest'];
const STATIC_HOSTS = ['cdn.tailwindcss.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    if (url.pathname.startsWith('/api/')) return; // live data, never cached
    event.respondWith(networkFirst(req));
  } else if (STATIC_HOSTS.includes(url.hostname)) {
    event.respondWith(staleWhileRevalidate(req)); // Tailwind + fonts, so the offline shell keeps its styles
  }
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  // Every page URL (/?ca=..., /?chain=...) is the same single-page app: keep one copy under "/"
  const key = req.mode === 'navigate' ? '/' : req;
  try {
    const res = await fetch(req);
    if (res.ok && !res.redirected) cache.put(key, res.clone());
    return res;
  } catch (err) {
    return (await cache.match(key)) || Response.error();
  }
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  const update = fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
    return res;
  }).catch(() => hit);
  return hit || update;
}

// Tapping an alert focuses Flick (or opens it) on that token
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const data = event.notification.data || {};
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const client = windows.find(c => new URL(c.url).origin === self.location.origin);
    if (client) {
      await client.focus();
      client.postMessage({ type: 'open-token', ca: data.ca, chain: data.chain });
    } else {
      await self.clients.openWindow(data.url || '/');
    }
  })());
});
