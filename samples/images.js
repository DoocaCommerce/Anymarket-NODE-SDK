const { configure, images } = require('../');
const mock = require('./mock');

(async () => {

    configure(mock.configure);

    try {
        const createData = await images.create(862205, {
            index: 0,
            main: true,
            url: 'http://media3.floodradio.com/columbus/2017/12/Basketball-Generic.jpg'
        });
        console.log(createData);
        const getData = await images.getFirst({
            id: 862205
        });
        console.log(getData);
        // const deleteData = await images.delete({
        //     id: 862205,
        //     imageId: 581968
        // });
        // console.log(deleteData);
    } catch (e) {
        console.log(e.toString());
    }

})();