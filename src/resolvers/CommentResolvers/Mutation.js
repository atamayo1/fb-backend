const { createComment } = require('../../services/CommentService');
const { getOnePost } = require('../../services/PostService');

const createNewComment = async (_, { data }, { userAuth }) => {
    const dataComplete = {
        ...data,
        user: userAuth._id
    };
    const comment = await createComment(dataComplete);
    const post = await getOnePost(data.post);
    post.comments.push(comment._id);
    post.save();
    /* userAuth.comments.push(comment._id);
     userAuth.save();*/
    return comment;
};

module.exports = {
    createNewComment
};
