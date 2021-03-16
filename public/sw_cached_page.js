const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'style.css',
    'index.js'
];

// Call Install Event
self.addEventListener('install', e => {
    console.log("Service Worker: Installed");
});

// Call Activate Event
self.addEventListener('activate', e => {
    console.log("Service Worker: Activated");
});