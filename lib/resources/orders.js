const generate = require('../generate');

const orders = () => {
    const baseURL = '/orders/:id';
    const operations = ['create', 'get', 'getFirst'];

    let request = {
        baseURL: baseURL,
        updateNfe: async function (id, data) {
            const args = { id: id };
            let { url, params } = utils.formatResource(baseURL, args);
            url = url + '/nfe';
            console.log('ORDERS.updateNfe', url, data);
            const response = await api.request().put(url, data);
            return response.data;
        }
    };

    request = generate.mixin(request, operations);

    return request;
};

module.exports = orders;
