function getUsers(userRepository) {
    return userRepository.getUsers();
}

function getUser(userRepository, id) {
    return userRepository.getUser(id);
}

module.exports = {
    getUsers: getUsers,
    getUser: getUser
};