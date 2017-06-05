const knex = require('../db').knex;

function getUser(id) {
    return knex
        .select()
        .from('users')
        .where('id', id)

        .then(function(user) {
            return user;
        });
}

function getUsers() {
    return knex('users')
        .select()

        .then(function(users) {
            return users;
        });
}

module.exports = {
    getUser: getUser,
    getUsers: getUsers
};