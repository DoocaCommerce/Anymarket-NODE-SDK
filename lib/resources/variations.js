const api = require('../api');
const generate = require('../generate');

const variations = () => {
    const baseURL = '/variations/:id';
    const operations = ['get', 'getFirst', 'create', 'delete', 'update'];

    let request = {
        baseURL: baseURL,
    };

    request = generate.mixin(request, operations);

    return request;
};

module.exports = variations;
