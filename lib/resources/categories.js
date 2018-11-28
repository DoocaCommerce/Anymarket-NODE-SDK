const generate = require('../generate');

const categories = () => {
    const baseURL = '/categories/:id';
    const operations = ['create', 'update', 'get', 'getFirst', 'delete'];

    let request = {
        baseURL: baseURL,
        getFullPath: async function (args) {
            let { url, params } = utils.formatResource(baseURL, args);
            url = url + '/fullPath';
            const response = await api.request().get(url, { params });
            return response.data;
        }
    };

    request = generate.mixin(request, operations);

    return request;
}

module.exports = categories;
