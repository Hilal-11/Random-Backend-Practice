const Blog = require('../models/BlogModelSchema');
const getPosts = async (req , res) => {
    try{
        const posts = await Blog.find({})
        res.status(200).json({
            data: posts,
            success: true,
            message: "Get all posts successfully"
        })
    }catch(error) {
        console.log(error.message)
        console.log("Failed to get the posts")
        res.status(401).json({
            success: false,
            error: error.message,
            message: "Failed to get the posts"
        })
    }
}
module.exports = getPosts