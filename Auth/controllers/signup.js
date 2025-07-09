const Auth = require('../models/authSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const sighup = async (req , res) => {
    try{
        const { username , email , password } = req.body;
        // simple validation
        if(!username || !email || !password){
            return res.status(401).json({
                success: false,
                message: "please fill the proper details"
            })
        }

        // check user already exists are not
        const userExists = await Auth.findOne({ email })
        if(userExists){
            return res.status(401).json({
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
        })


        res.status(200).json({
            success: true,
            message: "user signin successfully",
            token: "0101",
        }) 

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