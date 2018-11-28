const generate = require('../generate');

const brands = () => {
    const baseURL = '/brands/:id';
    const operations = ['create', 'get', 'update', 'getFirst', 'delete'];

    let request = {
        baseURL: baseURL,
    };

    request = generate.mixin(request, operations);

    return request;
};

module.exports = brands;
