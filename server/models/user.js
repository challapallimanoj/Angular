const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true

    },
    lastname: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        require: true
    },
    password: String,
    cpassword: String,
});

module.exports = mongoose.model('user', userSchema, 'users');