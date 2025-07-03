const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
    title:{
        type: String,
        maxLength: 50,
        required: true,
    },
    postBody: {
        type: String,
        maxLength: 500,
        require: true
    },
    comment: {
        type: String,
        required: false,
        maxLength: 100,
    },
    isLike: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
    }
})

module.exports = mongoose.model(BlogSchema , "Blog")