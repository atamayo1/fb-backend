const { Comments } = require('../models');

const createComment = async (data) => {
    const comment = await Comments.create(data);
    const populateComment = await getOneComment(comment._id);
    return populateComment;
};
const getAllComments = () => Comments.find({
    is_active: true
}).populate({
    path: 'posts',
    model: 'posts'
});

const getOneComment = (id) => Comments.findById({
    _id: id,
    is_active: true
}).populate({
    path: 'posts',
    model: 'posts'
});

module.exports = {
    createComment,
    getAllComments,
    getOneComment
};
