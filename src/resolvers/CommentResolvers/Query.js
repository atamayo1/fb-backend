const { getAllComments } = require('../../services/CommentService');

const getComments = async  () => {
    const comments = await getAllComments();
    return comments;
};


module.exports = {
    getComments
};
