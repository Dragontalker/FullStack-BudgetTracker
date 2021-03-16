let CACHE_VERSION = 0;
let CACHE_NAME = 'cache_v' + CACHE_NAME;
let CACHE_URLS = [
    '/',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

console.log('Hello service world!');

self.addEventListener('fetch', (event) => {
    console.log(`Request: ${event.request.url}`)
});