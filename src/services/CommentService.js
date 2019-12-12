const Comments = require('../models/Comments');

const createComment = async (data) => {
    const comment = await Comments.create(data);
    const populateComment = await getOnePost(comment._id);
    return populateComment;
};
const getAllComments = () => Comments.find({
    is_active: true
}).populate({
    path: 'comments',
    model: 'comments'
});

module.exports = {
    createComment,
    getAllComments,
};
