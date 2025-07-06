const Post = require('../Models/PostModel')
const getPosts = async (req , res) => {
    try{
        const response = await Post.find({}).populate('likes').populate('comments')
        res.status(200).json({
            success: true,
            response: response,
            message: "Successfully get all posts"
        })
    }catch(error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            error: error.messsage,
            message: "Failed to get the posts"
        })
    }
}
module.exports = getPosts