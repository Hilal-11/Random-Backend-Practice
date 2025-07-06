const Like = require('../Models/LikeModel')
const Post = require('../Models/PostModel')
const likePost = async (req , res) => {
    try{

        // const { post , user} = req.body;
        // const saveLike = await Like.create({
        //     post,
        //     user
        // })
        // const updatePost = await Post.findByIdAndUpdate(post , { $push:{ likes:saveLike._id }}, {new: true}).populate("likes").exec()
        // res.status().json({
        //     success: true,
        //     response: saveLike,
        //     message: "successfully likes the post"
        // })

        const { post , user} = req.body;
        const createLike = Like({
            post,
            user,
        })
        const saveLike = await createLike.save();
        const updatePost = await Post.findByIdAndUpdate(post , { $push:{ likes:saveLike._id }}, {new: true}).populate("likes").exec()
        res.status().json({
            success: true,
            response: saveLike,
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

module.exports = likePost