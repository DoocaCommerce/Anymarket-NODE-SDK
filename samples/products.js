const { configure, products } = require('../');
const mock = require('./mock');

(async () => {

    configure(mock.configure);

    try {
        const getData = await products.getFirst(862237);
        console.log(getData);
        // getData.title = 'Teste';
        // const updateData = await products.update({ id: 862222 }, getData);
        // console.log(updateData);
    } catch (e) {
        console.log(e.response.data);
    }

})();