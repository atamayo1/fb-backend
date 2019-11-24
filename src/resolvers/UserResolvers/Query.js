const { getAllUsers, getOneUser } = require('../../services/UserService');

const getUsers = async () => {
  const users = await getAllUsers();
  return users;
};

const getSingleUser = async (_, { id }) => {
    const user = await getOneUser(id);
    if(!user) throw new Error('User not exist');
    return user;
};

module.exports = {
    getUsers,
    getSingleUser
};