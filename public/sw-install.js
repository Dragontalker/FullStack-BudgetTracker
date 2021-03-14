this.addEventListener('install', (event) => {
    cashes.open('my-cashe-v1')
        .then((cashe) => {
            cashe.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/index.js'
            ]);
        })
});