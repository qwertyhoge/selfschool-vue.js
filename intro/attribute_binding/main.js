const elem = '#app'
var app = new Vue({
    el: elem, 
    data: {
        product: "Socks",
        description: "A pair of warm, fuzzy socks.",
        image: './vmSocks-green-onWhite.jpg',
        imgLink: elem + ' .product-image',
    },
});