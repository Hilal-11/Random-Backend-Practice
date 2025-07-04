const Blog = require('../models/BlogModelSchema')
const dislike = async (req , res) => {
    try{
        const { id } = req.params;
        const {isLike} = req.body;
        const response = await Blog.findByIdAndUpdate(
            {_id: id},
            {isLike , updateAt: Date.now()}
        )

        res.json({
            success: true,
            response: response,
            message: "Successfully dislike the post"
        })
    }catch(error) {
        res.json({
            success: false,
            error: error.message,
            message: "failed to dislike the post"
        })
    }
}

module.exports = dislike