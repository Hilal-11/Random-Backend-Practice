const mongoose = require('mongoose')
const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,

    },
    phone: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,

    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})
module.exports = mongoose.model('Auth' , authSchema)