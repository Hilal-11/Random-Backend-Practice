const mongoose = require('mongoose')
const commentModel = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    },
    user: {
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Comment" , commentModel)