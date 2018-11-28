const { configure, skus } = require('..');
const mock = require('./mock');

(async () => {

    configure(mock.configure);

    try {

        const getData = await skus.getFirst(862238);
        console.log(getData);
        // const updateData = await skus.update({ id: 862237, skuId: 791710 }, {
        //     title: 'novo titulo de sku',
        //     price: 299,
        // });
        // console.log(updateData);

        // const data = {
        //     "title": "Teste",
        //     "partnerId": 20,
        //     "amount": 0,
        //     "price": 20,
        //     "additionalTime": 0,
        //     "variations": {
        //         "Téste de Canção - 01": "Valor 02"
        //     }
        // };
        // const createData = await skus.create(862238, data);
        // console.log(createData);

    } catch (e) {
        console.log(e.toString());
    }

})();