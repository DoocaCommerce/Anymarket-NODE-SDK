const anymarket = require('../');
const mock = require('./mock');

(async () => {

    anymarket.configure(mock.configure);

    try {
        // const getData = await anymarket.brands.get({ offset: 1 });
        // console.log('getData', getData);

        // const getFirstData = await anymarket.brands.getFirst(id: getData.content[0].id);
        // const getFirstData = await anymarket.brands.getFirst({
        //     id: getData.content[0].id
        // });
        // console.log('getFirstData', getFirstData);

        // const updateData = await anymarket.brands.update({ id: 144270 }, { name: 'Nome da marca Editado 3' });
        // console.log('updateData', updateData);

        const data = await anymarket.brands.create({
            name: 'Teste de marca'
        });

        console.log(data);

    } catch (e) {
        console.log(e.toString());
    }

})();