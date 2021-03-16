const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'styles.css',
    'index.js'
];

// Call Install Event
self.addEventListener('install', e => {
    console.log("Service Worker: Installed");

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log("Service Worker: Caching Files");
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

// Call Activate Event
self.addEventListener('activate', e => {
    console.log("Service Worker: Activated");
});