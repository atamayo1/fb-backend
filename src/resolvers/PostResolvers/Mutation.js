const { createPost, updatePost, deletePost } = require('../../services/PostService');
const { getOneUser } = require('../../services/UserService');
const storage = require('../../utils/storage');

const createNewPost = async (_, {data}, {userAuth}) => {
    data.user = userAuth._id;
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
    //const user = await getOneUser((data.userAuth));
    userAuth.posts.push(post);
    userAuth.save();
    return post;
};
const updateOnePost = async (_,{id,data}, {userAuth}) => {
    data.user = userAuth._id;
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
