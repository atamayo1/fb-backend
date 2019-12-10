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
    cover: {
        type: String,
    },
    likes:{
        type: Number,
    },
    liked_by:{
        type: [Schema.Types.ObjectId],
        ref: 'user'
    },
    is_active: {
        type: Boolean,
    }
});

module.exports = mongoose.model('posts', PostSchema);
