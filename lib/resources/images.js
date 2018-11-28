const api = require('../api');
const utils = require('../utils');
const generate = require('../generate');

const images = () => {
    const baseURL = '/products/:id/images/:imageId';
    const operations = ['getFirst', 'get', 'delete'];

    let request = {
        baseURL: baseURL,
        create: async function (productId, data, callback) {
            const args = { id: productId };
            let { url, params } = utils.formatResource(baseURL, args);
            console.log('IMAGE.create', url, data);
            const reponse = await api.request().post(url, data);
            return response.data;
        }
    };

    request = generate.mixin(request, operations);

    return request;
}

module.exports = images;
