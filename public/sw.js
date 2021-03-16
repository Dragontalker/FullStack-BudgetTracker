let CACHE_VERSION = 0;
let CACHE_NAME = 'cache_v' + CACHE_NAME;
let CACHE_URLS = [
    '/',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

const preCashe = () => {
    return cashes
            .open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(CACHE_URLS);
            });
};

const clearCashe = () => {

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