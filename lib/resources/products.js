const generate = require('../generate');

const products = () => {
    const baseURL = '/products/:id';
    const operations = ['create', 'get', 'update', 'getFirst'];

    let request = {
        baseURL: baseURL,
    };

    request = generate.mixin(request, operations);

    return request;
};

module.exports = products;
