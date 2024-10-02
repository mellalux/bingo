self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    event.waitUntil(
        caches.open('bingo-cache').then(function(cache) {
            return cache.addAll([
                'index.html',
                'css/style.css',
                'css/bootstrap/bootstrap.min.css',
                'js/jquery/jquery-3.7.1.min.js',
                'js/bootstrap/bootstrap.bundle.js',
                'js/main.js',
                'data.json',
                'img/icon-192x192.png',
                'img/icon-512x512.png'
            ]);
        })
    );
});
  
self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
    // Kustuta vanad vahemälud jne.
});
  
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
