const Post = require('../Models/PostModel')
const Like = require('../Models/LikeModel')

const unlikePost = async (req , res) => {
    try{
        const { post , like } = req.body
        const deleteLike = await Like.findByIdAndDelete({post: post , _id: like})
        const updatePost = await Post.findByIdAndUpdate(post , 
                                    {$pull: {likes: deleteLike._id }},
                                    {new: true})
        res.status().json({
            success: true,
            response: deleteLike,
            message: "unlike the post"
        })
    }catch(error) {
        console.log(error.message)
        res.status().json({
            success: false,
            error: error.message,
            message: "failed to unlike"
        })
    }
}

module.exports = unlikePost