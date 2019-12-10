const { createPost, updatePost, deletePost } = require('../../services/PostService');
const { getOneUser } = require('../../services/UserService');
const storage = require('../../utils/storage');

const createNewPost = async (_, {data}, {user}) => {
    data.userpost = user._id;
    if (data.cover) {
        const { createReadStream } = await data.cover;
        const stream = createReadStream();
        const image = await storage({ stream });
        console.log(image);
        data = {
            ...data,
            cover: image.url,
        };
    }
    const post = await createPost(data);
    const userpost = await getOneUser((data.userpost));
    userpost.posts.push(post);
    userpost.save();
    return post;
};
const updateOnePost = async (_,{id,data}, {user}) => {
    data.userpost = user._id;
    if (data.cover) {
        const {
            createReadStream
        } = await data.cover;
        const stream = createReadStream();
        const image = await storage({
            stream
        });
        console.log(image);
        data = {
            ...data,
            cover: image.url,
        };
    }
    const post = await updatePost(id, data);
    if(!post) throw new Error('Post not exist');
    return post;
};

const deleteOnePost = async (_, {id}) => {
    const post = await deletePost(id);
    if(!post) throw new Error('Post not exist');
    return 'User deleted';
};

module.exports = {
    createNewPost,
    updateOnePost,
    deleteOnePost
};
