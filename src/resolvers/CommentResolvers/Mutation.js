const { createComment } = require('../../services/CommentService');
const { getOnePost } = require('../../services/PostService');

const createNewComment = async (_, { data }, { post }) => {
    data.post = post._id;
    const dataComplete = {
        ...data,
        post: post._id
    };
    const comment = await createComment(dataComplete);
   // const post = await getOnePost(data.post);
    post.comme.push(comment._id);
    post.save();
    return comment;
};

module.exports = {
    createNewComment
};
