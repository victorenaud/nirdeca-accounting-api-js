const Hapi = require('hapi')

function createServer(options) {
    const server = new Hapi.Server()
    const pjson = require('./package.json')

    server.connection(options)
    server.route({
        method: 'GET',
        path: '/',
        config: {
            description: 'Give basics description of the API',
            tags: ['api']
        },
        handler (request, reply) {
            reply({ description: pjson.description, version: pjson.version })
        }
    })
    return server
}

exports.createServer = createServer
