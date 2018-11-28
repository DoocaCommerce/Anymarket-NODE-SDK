const api = require('../api');
const utils = require('../utils');
const generate = require('../generate');

const images = () => {
    const baseURL = '/products/:id/skus/:skuId';
    const operations = ['getFirst', 'get', 'update'];

    let request = {
        baseURL: baseURL,
        create: async function (id, data, callback) {
            const args = { id: id };
            let { url, params } = utils.formatResource(baseURL, args);
            console.log('SKUS.create', url, data);
            const reponse = await api.request().post(url, data);
            return response.data;
        }
    };

    request = generate.mixin(request, operations);

    return request;
};

module.exports = images;
