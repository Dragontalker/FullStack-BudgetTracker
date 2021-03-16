let CACHE_VERSION = 0;
let CACHE_NAME = 'cache_v' + CACHE_NAME;
let CACHE_URLS = [
    '/',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

const preCashe = () => {
    return caches
            .open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(CACHE_URLS);
            });
};

const clearCashe = () => {
    return caches
            .keys()
            .then(key => {
                if (key !== CACHE_NAME) {
                    caches.delete(key);
                }
            });
};

self.addEventListener('install', (event) => {
    event.waitUntill(
        preCashe()
    );
});

self.addEventListener('activated', (event) => {
    event.waitUntill(
        clearCashe()
    );
});

self.addEventListener('fetch', (event) => {
    console.log(`Request: ${event.request.url}`)
});