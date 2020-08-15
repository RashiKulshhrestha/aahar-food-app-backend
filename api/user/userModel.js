var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'customer'
    }
});

module.exports = mongoose.model('user', userSchema, 'users');