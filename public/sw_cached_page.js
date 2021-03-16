const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'styles.css',
    'index.js',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

// Call Install Event
self.addEventListener('install', e => {
    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

// Call Activate Event
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        return caches.delete(cache)
                    }
                })
            )
        })
    );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
    console.log("Service Worker: Fetching");
    e.respondWith(
        fetch(e.request)
            .catch(() => caches.match(e.request))
    )
});