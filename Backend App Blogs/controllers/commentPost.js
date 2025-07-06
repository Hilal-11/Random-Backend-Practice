const Comment = require('../Models/CommentModel')
const Post = require('../Models/PostModel')

const commentPost = async (req , res) => {
    try{
        const { post , user , body } = req.body
        const createComment = new Comment({
            post,
            user,
            body,
        })
        const saveComment = await createComment.save();
        const updatePost = Post.findByIdAndUpdate(post , {$push:{ comments: saveComment._id}}, { new: true}).populate('comments').exec()
    }catch(error) {
        console.log(error.message)
        res.status().json({
            success: false,
            error: error.message,
            message: "Failed to coment on post"
        })
    }
}

module.exports = commentPost