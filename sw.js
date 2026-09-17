const CACHE_NAME = 'vortex-v3-2026';
const urlsToCache = [
  '/vortex-social-app/',
  '/vortex-social-app/index.html',
  '/vortex-social-app/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});