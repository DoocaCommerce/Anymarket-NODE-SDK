const generate = require('../generate');

const ordersFeeds = () => {
    const baseURL = '/orders/feeds/:id';
    const operations = ['get', 'update'];

    let request = {
        baseURL: baseURL,
    };

    request = generate.mixin(request, operations);

    return request;
};

module.exports = ordersFeeds;
