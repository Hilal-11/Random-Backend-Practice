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
        const user = await bcrypt.compare(password , userExists.password)
        if(user) {
            // generate jwt token
            // store on cookies
            const token = await jwt.sign( 
                    {
                        user: userExists._id,
                        email: userExists.email,
                        role: userExists.role
                    }
                , process.env.SECRET_KEY
            )
            
            // store on jwt token on cookies 
            const options = {
                expiresIn: Date(Date.now() * 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            res.cookie("token" , token , options).status(201).json({
                success: true,
                message: "User registered successfully",
                response: token
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