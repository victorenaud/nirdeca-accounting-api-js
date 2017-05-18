const persistence = require('../infrastructure/persistence/index');
const userRepository = persistence.userRepository;

function getUser(id) {
    return userRepository.getUser(id);
}

function getUsers() {
    return userRepository.getUsers();
}

module.exports = {
    getUser: getUser,
    getUsers: getUsers
};