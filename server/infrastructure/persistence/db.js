const dbConfig = require("./knexfile");

const env = 'development';
const initializeKnex = require('knex');
const knex = initializeKnex(dbConfig[env]);

function destroyConnectionPool(callback) {
    if (knex && knex.client) {
        knex.destroy(callback);
    }
    else {
        callback();
    }
}

module.exports = {
    knex: knex,
    destroyConnectionPool: destroyConnectionPool
};