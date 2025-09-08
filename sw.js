
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('educonecta-v2').then(cache => {
      return cache.addAll(['./index.html', './EduConecta_plus.html','./manifest.json']);
    })
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
