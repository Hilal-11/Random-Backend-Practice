const mongoose = require('mongoose')
const likeModel = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like"
    },
    user: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Like" , likeModel)