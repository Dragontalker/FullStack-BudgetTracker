if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw-register.js', { scope: '/' })
            .then((registration) => {
                console.log(registration.scope);
            })
            .catch((error) => {
                console.log(error);
            });
    });
};