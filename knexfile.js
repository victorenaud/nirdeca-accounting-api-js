module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: "./data/database.sqlite"
        },
        seeds: {
            directory: "./data/seeds"
        }

    }
};