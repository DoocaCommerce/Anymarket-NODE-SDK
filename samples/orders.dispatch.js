const { configure, orders } = require('../');
const mock = require('./mock');

(async () => {

    configure(mock.configure);

    try {
        const response = await orders.dispatch(13762, {
            invoice: {
                accessKey: "11002299338844775566556677448833992200111029",
                date: "2018-12-06T14:35:14-02:00",
            },
            tracking: {
                url: "",
                number: "123456",
                carrier: "PAC",
                estimateDate: "2018-12-12T16:12:14-02:00",
                shippedDate: "2018-12-06T14:35:14-02:00"
            }
        });
        console.log(response);
    } catch (e) {
        console.error(e.response.data);
    }

})();