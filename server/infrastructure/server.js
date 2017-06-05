const Hapi = require('hapi');
const pjson = require('../../package.json');

const persistence = require('./persistence/index');
console.log('Database Started');

const port = process.env.PORT || 3000;

function createServer(options) {
    const server = new Hapi.Server();

    server.connection(options);

    server.route({
        method: 'GET',
        path: '/',
        config: {
            description: 'Give basics description of the API',
            tags: ['server']
        },
        handler(request, reply) {
            reply({
                description: pjson.description,
                version: pjson.version
            })
        }
    });

    server.route(require('./endPoints/userEndpoint').routes);

    return server;
}

const server = createServer({port: port});

server.start().then(() => {
    console.log('server started at ' + port);
}).catch(function (error) {
    console.log(error);
});

process.on('SIGINT', function () {
    console.log('SIGINT received ...');
    server.stop(function () {
        console.log('Server stopped ...');
        persistence.destroyConnectionPool(function () {
            console.log('Database stopped ...');
            console.log('Exiting process ...');
            process.exit();
        });
    });
});