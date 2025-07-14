const Auth = require('../models/authSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const sighup = async (req , res) => {
    try{
        const { username , email , password , role} = req.body;
        // simple validation
        if(!username || !email || !password || !role){
            return res.status(401).json({
                success: false,
                message: "please fill the proper details"
            })
        }

        // check user already exists are not
        const userExists = await Auth.findOne({ email })
        if(userExists){
            return res.status(400).json({
                success: false,
                message: "user already exists"
            })
        }

        // if user not exists then hash password and save 

        const salt_round = 10;
        const hash_password = await bcrypt.hash(password , salt_round);

        // now save on db

        const createUser = await Auth.create({
            username,
            email,
            password: hash_password,
            role
        })

        const payload = {
            email: createUser.email,
            id: createUser._id,
            role: createUser.role
        }
        const token = jwt.sign(
            payload,
            process.env.SECRET_KEY,
            
        )
        
        res.status(200).json({
            success: true,
            message: "user signin successfully",
            response: token,
        }) 


                
// alternative of generating JWT token
// alternative of generating JWT token

        //  res.status(200).json({
        //     success: true,
        //     message: "user signin successfully",
        //     response: await jwt.sign(
        //         {
        //             email: createUser.email,
        //             id: createUser._id,
        //             role: createUser.role
                    
        //         },
        //         process.env.SECRET_KEY
        //     ),
        // })

}catch(error){
        console.log(error.message)
        console.log("failed to signIn")

        res.status(301).json({
            success: true,
            error: error.message,
            message: "Filed to signIn"
        })
    }
}

module.exports = sighup