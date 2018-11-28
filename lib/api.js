const axios = require('axios');

let options = {};
let url = 'http://sandbox-api.anymarket.com.br/v2';

exports.configure = (params) => {
    if (params.mode && (params.mode === 'production')) {
        url = 'http://api.anymarket.com.br/v2';
    }

    options = {
        baseURL: url,
        headers: {
            gumgaToken: params.gumgaToken
        }
    };
};

exports.request = () => {
    return axios.create(options);
};