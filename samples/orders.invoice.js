const { configure, orders } = require('../');
const mock = require('./mock');

(async () => {

    configure(mock.configure);

    try {
        const response = await orders.invoice(13762, {
            invoice: {
                accessKey: "11002299338844775566556677448833992200111029",
                date: "2018-12-03T16:12:14Z",
                cfop: 123,
                companyStateTaxId: 321
            }
        });
        console.log(response);
    } catch (e) {
        console.error(e.response.data);
    }

})();