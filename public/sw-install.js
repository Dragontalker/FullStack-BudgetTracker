this.addEventListener('install', (event) => {
    event.waitUntill(cashes.open('my-cashe-v1')
        .then((cashe) => {
            cashe.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/index.js'
            ]);
        }));
});

this.addEventListener('activate', (event) => {
    
});