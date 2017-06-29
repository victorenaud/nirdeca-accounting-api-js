const userDomain = require('../../domain/index').userDomain;
const userRepository = require('../../infrastructure/persistence/index').userRepository;

function addUser(name, lastName, email) {
    const now = new Date().toISOString();

    const user = {
        name: name,
        last_name: lastName,
        email: email,
        updated_at: now,
        created_at: now
    };

    return userDomain.addUser(userRepository, user);
}

module.exports = {
    addUser: addUser
};