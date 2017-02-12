const Hapi = require('hapi')

function createServer(options) {
    const server = new Hapi.Server()
    const pjson = require('./package.json')
    const users = require('./data/users.json')

    server.connection(options)
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
    })

    server.route({
        method: 'GET',
        path: '/users',
        config: {
            description: 'Give the list of all users',
            tags: ['api', 'users']
        },
        handler(request, reply) {
            reply(users)
        }
    })

    server.route({
        method: 'GET',
        path: '/users/{id}',
        config: {
            description: 'Give the the details of an user',
            tags: ['api', 'users']
        },
        handler(request, reply) {
            id = request.params.id
            reply(users.users[id - 1])
        }
    })

    return server
}

exports.createServer = createServer
