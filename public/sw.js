console.log('Hello service world!');

self.addEventListener('fetch', (event) => {
    console.log(`Request: ${event.request.url}`)
});