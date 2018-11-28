const formatResource = (url, params = {}) => {
    if (params != {}) {
        Object.keys(params).forEach(function (key) {
            if (url.indexOf(':' + key) >= 0) {
                url = url.replace(':' + key, params[key]);
                delete params[key];
            }
        });
    }

    url = url.replace(/\/$/, '');
    url = url.replace(/\/:.*/, '');

    return {
        url: url,
        params: params
    };
};

module.exports = {
    formatResource: formatResource
};