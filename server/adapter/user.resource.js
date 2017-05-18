const userService = require('../use_cases/index').userService;



const routes = [
    {
        method: 'GET',
        path: '/users',
        config: {
            description: 'Give the list of all users',
            tags: ['api', 'users']
        },
        handler: getUsers
    },
    {
        method: 'GET',
        path: '/users/{id}',
        config: {
            description: 'Give the the details of an user',
            tags: ['api', 'users']
        },
        handler: getUser
    }
];

function getUsers(request, reply) {
    userService.getUsers()
        .then(function (users) {
            reply(users);
        })
        .catch(function (error) {
            console.log(error);
            reply({'message': error.toString()}).code(500);
        });
}

function getUser(request, reply) {
    const id = request.params.id;

    userService.getUser(id)
        .then(function (user) {
            reply(user);
        })
        .catch(function (error) {
            console.log(error);
            reply({'message': error.toString()}).code(500);
        });
}

module.exports =
    {
        routes: routes
    };