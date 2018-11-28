const generate = require('../generate');

const ordersFeed = () => {
    const baseURL = '/orders/feed/:id';
    const operations = ['get', 'update'];

    let request = {
        baseURL: baseURL,
    };

    request = generate.mixin(request, operations);

    return request;
};

module.exports = ordersFeed;
