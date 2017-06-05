const userDomain = require('../../domain/index').userDomain;
const userRepository = require('../../infrastructure/persistence/index').userRepository;

function getUser(id) {
    return userDomain.getUser(userRepository, id);
}

module.exports = {
    getUser: getUser
};