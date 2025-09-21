const CACHE_NAME = 'pdf-tools-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/all-tools.html',
  '/blog.html',
  '/sitemap.xml',
  '/robots.txt'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
