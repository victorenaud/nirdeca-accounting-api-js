function getUsers(userRepository) {
    return userRepository.getUsers();
}

function getUser(userRepository, id) {
    return userRepository.getUser(id);
}

function addUser(userRepository, user) {
    return userRepository.addUser(user);
}

module.exports = {
    getUsers: getUsers,
    getUser: getUser,
    addUser : addUser
};