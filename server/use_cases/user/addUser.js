const userDomain = require('../../domain/index').userDomain;
const userRepository = require('../../infrastructure/persistence/index').userRepository;

function addUser(name, lastName, email) {
    const now = new Date();
    
    const user = {
        name: name,
        last_name: lastName,
        email: email,
        updated_at: now.getDate(),
        created_at: now.getDate()
    };

    return userDomain.addUser(userRepository, user);
}

module.exports = {
    addUser: addUser
};