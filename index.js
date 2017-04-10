const Hapi = require('hapi');
const pjson = require('./package.json');
const server = new Hapi.Server();


function createServer(options) {
    server.connection(options);
    server.route({
        method: 'GET',
        path: '/',
        config: {
            description: 'Give basics description of the API',
            tags: ['api']
        },
        handler(request, reply) {
            reply({
                description: pjson.description,
                version: pjson.version
            })
        }
    });

    server.route(require('./app/users/usersRoute.js'));

    return server;
}

exports.createServer = createServer;