const userDomain = require('../../domain/index').userDomain;
const userRepository = require('../../infrastructure/persistence/index').userRepository;

function getUsers() {
        return userDomain.getUsers(userRepository);
}

module.exports = {
    getUsers: getUsers
};