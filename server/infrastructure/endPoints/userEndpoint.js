const userUseCases = require('../../use_cases/index').userUseCases;


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
    },
    {
        method: 'POST',
        path: '/users/add',
        config: {
            description: 'Add the given user',
            tags: ['api', 'users']
        },
        handler: addUser
    },

];

function getUsers(request, reply) {
    userUseCases.getUsers()
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

    userUseCases.getUser(id)
        .then(function (user) {
            reply(user);
        })
        .catch(function (error) {
            console.log(error);
            reply({'message': error.toString()}).code(500);
        });
}

function addUser(request, reply) {
    const user = request.query;
    userUseCases.addUser(user.name, user.last_name, user.email)
        .then(function (resp) {
            reply(resp);
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