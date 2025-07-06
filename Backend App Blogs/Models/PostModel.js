const mongoose = require('mongoose')
const PostModel = new mongoose.Schema({
    title:{
        type: String,
        require: true,
        maxLength: 50,
    },
    body:{
        type: String,
        require: true,
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    },
    like: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like"
    }
})

module.exports = mongoose.model("Post" , PostModel)