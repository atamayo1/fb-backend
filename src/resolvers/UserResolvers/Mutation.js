const { createUser, updateUser, deleteUser } = require('../../services/UserService');

const createNewUser = async (_,{data}) => {
   const user = await createUser(data);
   return user;
};

const updateOneUser = async (_,{id,data}) => {
    const user = await updateUser(id,data);
    if(!user) throw new Error('User not exist');
    return user;
};

const deleteOneUser= async (_, {id}) => {
    const user = await deleteUser(id);
    if(!user) throw new Error('User not exist');
    return 'User deleted';
};

module.exports = {
    createNewUser,
    updateOneUser,
    deleteOneUser
};