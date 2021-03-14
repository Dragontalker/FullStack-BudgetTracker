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
    Promise.all([

        this.clients.claim(),

        cashe.keys().then((casheList) => {
            return Promise.all(
                casheList.map((casheName) => {
                    if (cashName !== 'my-cashe-v1') {
                        return cashes.delete(casheName);
                    }
                })
            )
        })

    ])
});