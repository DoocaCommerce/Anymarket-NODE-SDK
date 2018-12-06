const api = require('../api');
const generate = require('../generate');
const utils = require('../utils');

const orders = () => {
    const baseURL = '/orders/:id';
    const operations = ['create', 'get', 'getFirst'];

    let request = {
        baseURL: baseURL,

        invoice: async function (id, data) {
            data.status = 'INVOICED';

            const args = { id };
            const { url } = utils.formatResource(baseURL, args);

            console.log('ORDERS.invoice', url, data);
            const response = await api.request().put(url, data);
            return response.data;
        },

        dispatch: async function (id, data) {
            data.status = 'PAID_WAITING_DELIVERY';

            const args = { id };
            const { url } = utils.formatResource(baseURL, args);

            console.log('ORDERS.dispatch', url, data);
            const response = await api.request().put(url, data);
            return response.data;
        },

        deliver: async function (id, data) {
            data.status = 'CONCLUDED';

            const args = { id };
            const { url } = utils.formatResource(baseURL, args);

            console.log('ORDERS.deliver', url, data);
            const response = await api.request().put(url, data);
            return response.data;
        },

    };

    request = generate.mixin(request, operations);

    return request;
};

module.exports = orders;
