const Hapi = require('hapi');
const pjson = require('../../package.json');

function createApi(options) {
    const api = new Hapi.Server();

    api.connection(options);

    api.route({
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

    api.route(require('./user.resource').routes);

    return api;

// Add API routes
//     require('./account.resource').addRoutes(api);
//     require('./category.resource').addRoutes(api);
//     require('./transaction.resource').addRoutes(api);

}

exports.createApi = createApi;