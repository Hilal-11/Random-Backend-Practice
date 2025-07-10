const Auth = require('../models/authSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const login = async (req , res) => {
    try{
        const { email , password } = req.body;
        if(!email || !password) {
            return res.status().json({
                sucess: false,
                message: "Please provide the email and password"
            })
        }
        //check user exists are not
        const userExists = await Auth.findOne({ email });
        if(!userExists) {
            return res.status(401).json({
                sucess: false,
                message: "Faile to login... user not exists"
            })
        }


        // Dcrypy the password and compare
        const user = await bcrypt.compare(password , userExists.password);

        if(user) {
            const token = await jwt.sign(
                    {
                        email: user.email,
                        id: user._id,
                        role: user.role,
                    },
                    process.env.SECRET_KEY
                )
            // for cookie
            const options = {
                expiresIn: Date(Date.now()  * 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            res.cookie("token" , token , options).status(200).json({
                success: true,
                token,
                user,
                message: "Login successfully",
            })
        }else{
            return res.status(200).json({
                success: false,
                message: "Login unsuccessful",
            })
        }

    }catch(error) {
        console.log(error.message)
        console.log('Failed to login')
        res.status(401).json({
            success: false,
            error: error.message,
            message: "Filed to login"
        })
    }
}

module.exports = login