const { configure, ordersFeeds } = require('../');
const mock = require('./mock');

(async () => {

    configure(mock.configure);

    try {
        const getData = await ordersFeeds.get();
        console.log(getData);
        // getData.title = 'Teste';
        // const updateData = await products.update({ id: 862222 }, getData);
        // console.log(updateData);
    } catch (e) {
        console.log(e.response.data);
    }

})();