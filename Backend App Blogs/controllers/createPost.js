const { response } = require('express');
const Post = require('../Models/PostModel')
const createPost = async (req , res) => {
    try{
        const { title , body } = req.body;
        const create = await Post.create({ title , body })

        res.status(200).json({
            success: true,
            response: response,
            message: "Post is created successfully"
        })
    }catch(error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            error: error.message,
            message: "Failed to create a post"
        })
    }
}

module.exports = createPost