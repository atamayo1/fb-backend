const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    comments: {
        type: [Schema.Types.ObjectId],
        ref: 'comments',
    },
    cover: {
        type: String,
    },
    likes:{
        type: Number,
        default: 0
    },
    liked_by:{
        type: [Schema.Types.ObjectId],
        ref: 'user'
    },
    is_active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('posts', PostSchema);
