const querystring = require('querystring');
const api = require('./api');

module.exports = function () {

    function configure(params) {
        api.configure(params);
    }

    return {
        configure: configure,
        brands: require('./resources/brands')(),
        categories: require('./resources/categories')(),
        products: require('./resources/products')(),
        stocks: require('./resources/stocks')(),
        variations: require('./resources/variations')(),
        variationsValues: require('./resources/variations-values')(),
        images: require('./resources/images')(),
        skus: require('./resources/skus')(),
        orders: require('./resources/orders')(),
        ordersFeed: require('./resources/orders-feed')(),
    };

};