const db = require('./db');

module.exports = {
    knex: db.knex,
    destroyConnectionPool: db.destroyConnectionPool,
    userRepository: require('./repositories/userRepository')
};