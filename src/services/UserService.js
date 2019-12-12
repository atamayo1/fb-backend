const { Users } = require('../models');

const createUser = (data) => Users.create(data);
const getAllUsers = () => Users.find({
    is_active: true,
}).populate({
    path: 'posts',
    model: 'posts'
});
const getOneUser = (id) => Users.findById({
    _id: id,
    is_active: true
}).populate({
    path: 'posts',
    model: 'posts'
});
const deleteUser = (id) => Users.findByIdAndUpdate({
    _id: id,
    is_active: true,
}, {
    is_active:false,
});
const updateUser = (id, data) => Users.findByIdAndUpdate({
    _id: id,
    is_active: true,
}, {
    ...data,
}, { new:true });

const getUserByEmail = (email) => Users.findOne({
    email,
    is_active: true,
}).populate('posts');

module.exports = {
    getAllUsers,
    createUser,
    getOneUser,
    deleteUser,
    updateUser,
    getUserByEmail,
};
