const querystring = require('querystring');
const api = require('./api');
const utils = require('./utils');

/**
 * Get one register
 * @param {Object|Number} args
 * @param {Function} callback
 */
const getFirst = async function (args, callback) {
    if (typeof args !== 'object') {
        args = { id: args };
    }
    let { url } = utils.formatResource(this.baseURL, args);
    console.log('API.getFirst', url);
    const response = await api.request().get(url);
    return response.data;
}

/**
 * Get all register
 * @param {Object} args
 * @param {Funciton} callback
 */
const get = async function (args, callback) {
    let { url, params } = utils.formatResource(this.baseURL, args);
    console.log('API.get', url, params);
    const response = await api.request().get(url, { params });
    return response.data;
}

/**
 * Create a new register
 * @param {Object} data
 * @param {Function} callback
 */
const create = async function (data, callback) {
    let { url, params } = utils.formatResource(this.baseURL);
    console.log('API.create', url, params);
    const response = await api.request().post(url, data);
    return response.data;
}

/**
 * Update register
 * @param {Object} args
 * @param {Object} data
 * @param {Function} callback
 */
const update = async function (args, data, callback) {
    if (typeof args !== 'object') {
        args = { id: args };
    }
    let { url, params } = utils.formatResource(this.baseURL, args);
    console.log('API.update', url, data);
    const response = await api.request().put(url, data);
    return response.data;
}

/**
 * Remove register
 * @param {Object} args
 * @param {Function} callback
 */
const del = async function (args, callback) {
    if (typeof args !== 'object') {
        args = { id: args };
    }
    let { url } = utils.formatResource(this.baseURL, args);
    console.log('API.delete', url);
    const response = await api.request().delete(url);
    return response.data;
}

const restFunctions = {
    get: get,
    getFirst: getFirst,
    create: create,
    update: update,
    delete: del,
};

const mixin = (destObject, operations) => {
    operations.forEach(function (property) {
        destObject[property] = restFunctions[property];
    });

    return destObject;
};

module.exports.mixin = mixin;
