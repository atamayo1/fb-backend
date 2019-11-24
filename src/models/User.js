const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    code: {
        type: String
    },
    is_active: {
        type: Boolean
    },
    is_admin: {
      type: Boolean
    },
    created_at: {
        type: String
    }
});

module.exports = mongoose.model('user', UserSchema);