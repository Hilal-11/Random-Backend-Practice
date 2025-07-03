const Blog = require('../models/BlogModelSchema');

const getPosts = async (req , res) => {
    try{
        const posts = await Blog.find({})
        res.json({
            data: posts,
            success: true,
            message: "Get all posts successfully"
        })
    }catch(error) {
        res.json({
            success: false,
            error: error.message,
            message: "Failed to get the posts"
        })
    }
}

module.exports = getPosts