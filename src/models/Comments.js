const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts'
    },
    is_active: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('comments', CommentSchema);
