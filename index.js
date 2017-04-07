const Hapi = require('hapi');
const pjson = require('./package.json');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000
});

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

server.route(require('./users/usersRoute.js'));

server.start((err) => {
    console.log('Server running at:', server.info.uri);
});