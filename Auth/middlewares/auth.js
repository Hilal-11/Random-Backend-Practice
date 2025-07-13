const jwt = require('jsonwebtoken')
require('dotenv').config();

// Authentication route
exports.auth = async (req , res , next) => {
    try{
        // other ways to get the token
        const { token } = req.body.token || req.cookies.token
        if(!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing"
            })
        }
        // decode token and find the role from token using JWT // varify the token
        try{
            const payload = jwt.verify(token , process.env.SECRET_KEY);
            console.log(payload)
            req.user = payload
        }catch(error){
            return res.status(401).json({
                success: false,
                message: "token is invalid"
            })
        }
        next()
    }catch(error){
        console.log(error.message)
        return res.status(401).json({
            success: false,
            error: error.message,
            message: "failed to authenticate...something went wrong"
        })
    }
}

// Admin route
exports.isAdmin = async (req , res , next) => {
    try{
        if(req.user.role !== "Admin") {
            return res.status(401).json({
                success: true,
                message: "This is protected route for Admin"
            });
        }

        next()
    }catch(error) {
        console.log(error)
        return res.status(401).json({
            success: false,
            error: error.message,
            message: "user role can't be varified or matching"
        })
    }
}

// Student route
exports.isStudent = async (req , res , next) => {
    try{
        if(req.user.role !== "Student") {
            return res.status(401).json({
                success: true,
                message: "This is protected route for students"
            });
        }

        next()
    }catch(error) {
        console.log(error)
        return res.status(401).json({
            success: false,
            error: error.message,
            message: "user role can't be varified or matching"
        })
    }
}