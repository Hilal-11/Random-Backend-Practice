const Blog = require('../models/BlogModelSchema')

const createPost = async (req , res) => {
    try{
        const { title , postBody } = req.body
        const create = await Blog.create({title , postBody})

        res.status(200).json({
            success: true,
            post: create,
            message: "Post created successfully"
        })
    }catch(error) {
        console.log(error.message)
        console.log("Failed to create Post")

        res.json({
            success: false,
            error: error.message,
            message: "Failed to create Post"
        })
    }
}

module.exports = createPost