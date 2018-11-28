const api = require('../api');
const generate = require('../generate');

const variationsValues = () => {
    const baseURL = '/variations/:id/values/:valueId';
    const operations = ['get', 'getFirst', 'update', 'delete'];

    let request = {
        baseURL: baseURL,
        create: async function (productId, data, callback) {
            const args = { id: productId };
            let { url, params } = utils.formatResource(baseURL, args);
            console.log('VARIATIONS-VALUES.create', url, data);
            const reponse = await api.request().post(url, data);
            return response.data;
        }
    };

    request = generate.mixin(request, operations);

    return request;
};

module.exports = variationsValues;
