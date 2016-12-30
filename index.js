const Hapi = require('hapi')

function createServer(options) {
    const server = new Hapi.Server()
    server.connection(options)
    server.route({
        method: 'GET',
        path: '/',
        config: {
            description: 'Say hello',
            tags: ['api']
        },
        handler (request, reply) {
            reply('Hello Nirdeca!')
        }
    })
    return server
}

exports.createServer = createServer