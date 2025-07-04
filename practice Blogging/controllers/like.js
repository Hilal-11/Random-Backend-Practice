const Blog = require('../models/BlogModelSchema')
const like = async (req , res) => {
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
            message: "Successfully like the post"
        })
    }catch(error) {
        res.json({
            success: false,
            error: error.message,
            message: "failed to like the post"
        })
    }
}

module.exports = like