const Auth = require('../models/authSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const login = async (req , res) => {
    try{
        const { email , password } = req.body;
        if(!email || !password) {
            return res.status(401).json({
                success: false,
                message: "incomplete cradentials"
            })
        }

        const userExists = await Auth.findOne({ email })
        if(!userExists) {
            return res.status(401).json({
                success: false,
                message: "User not exists"
            })
        }

        if(await bcrypt.compare(userExists.password , password)) {
            // generate jwt token
            // store on cookies
            const token = await jwt.sign(
                {
                    user: userExists._id,
                    email: userExists.email,
                    role: userExists.role
                },
                process.env.SECRET_KEY
            )
            const options = {
                expiresIn: Date(Date.now() * 1 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            cookie("token" , token , options).status(200).json({
                success: true,
                message: "user login successful",
                token,
            })
        }else{
            return res.status(400).json({
                success: false,
                message: "Incorrect password",
            })

        }

    }catch(error){
        console.log(error.message)
        res.status(501).json({
            success: false,
            error: error.message,
            message: "Failed to login.... some internal issue"
        })
    }
}

module.exports = login