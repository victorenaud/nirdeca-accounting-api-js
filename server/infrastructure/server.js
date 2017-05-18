const Hapi = require('hapi');

const persistence = require('./persistence/index');
console.log('Database Started');


const port = process.env.PORT || 3000;
const api = require('../adapter/api').createApi({port: port});


api.start().then(() => {
    console.log('api started at ' + port);
}).catch(function (error) {
    console.log(error);
});

process.on('SIGINT', function () {
    console.log('SIGINT received ...');
    api.stop(function () {
        console.log('Server stopped ...');
        persistence.destroyConnectionPool(function () {
            console.log('Database stopped ...');
            console.log('Exiting process ...');
            process.exit();
        });
    });
});