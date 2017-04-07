const database = require('../database.js');

module.exports = [
    {
        method: 'GET',
        path: '/users',
        config: {
            description: 'Give the list of all users',
            tags: ['api', 'users']
        },
        handler(request, reply) {
            const users = database('users').select();
            reply(users)
        }
    },
    {
        method: 'GET',
        path: '/users/{id}',
        config: {
            description: 'Give the the details of an user',
            tags: ['api', 'users']
        },
        handler(request, reply) {
            const id = request.params.id;
            const user = database('users').where('id', id).select();
            reply(user)
        }
    }
];