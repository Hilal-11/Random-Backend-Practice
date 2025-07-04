
const Blog = require('../models/BlogModelSchema')
const comment = async (req , res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;
        const postComment = await Blog.findByIdAndUpdate(
            { _id: id },
            { comment , updateAt: Date.now()}
        )

        res.json({
            success: true,
            response: postComment,
            message: "Comment on post done"
        })
    }catch(error) {
        console.log(error.message)
        res.json({
            success: false,
            error: error.message,
            message: "failed to Comment on post"
        })
    }
}
module.exports = comment