const Like = require('../Models/LikeModel')
const likePost = async (req , res) => {
    try{
        const { id } = req.params
        const { post , user} = req.body;

        // const like_post = await Like.findByIdAndUpdate(
        //     { _id: id},
        //     { post, user }
        // );

        res.status().json({
            success: true,
            response: like_post,
            message: "successfully likes the post"
        })
    }catch(error) {
        console.log(error.message)
        res.status().json({
            success: false,
            error: error.message,
            message: "Failed to like the post"
        })
    }
}