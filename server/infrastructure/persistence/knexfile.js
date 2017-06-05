module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: "./data/database.sqlite"
        },
        useNullAsDefault: true,
        seeds: {
            directory: "../../../data/seeds"
        },
        migrations: {
            directory: "../../../data/migrations"
        }
    }
};