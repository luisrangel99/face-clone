const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    created_from: {
        type: String,
    },
});

module.exports = mongoose.model('User', UserSchema);