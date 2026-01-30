const CACHE_NAME = 'europe-2026-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com'
];

// 安裝並儲存檔案
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(assets))
  );
});

// 沒網路時從緩存抓取
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
