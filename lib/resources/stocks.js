const api = require('../api');
const generate = require('../generate');

const stocks = () => {
    const baseURL = '/stocks';
    const operations = [];

    let request = {
        baseURL: baseURL,
        update: async function (data) {
            const response = await api.request().put(baseURL, data);
            return response.data;
        }
    };

    request = generate.mixin(request, operations);

    return request;
};

module.exports = stocks;
