var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
    },
});

setTimeout(() => {
    app.message = 'changed data';
}, 1500);