const { configure, stocks } = require('../');
const mock = require('./mock');

(async () => {

    configure(mock.configure);

    try {
        const data = await stocks.update([{
            id: 791628,
            quantity: 50
        }]);
        console.log(data);
    } catch (e) {
        console.log(e.toString());
    }

})();