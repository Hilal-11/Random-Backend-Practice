const Auth = require('../models/authSchema');   
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');    

const register = async (req , res) => {
    try{
        const { username, email, phone , password } = req.body
        if(!username || !email || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
         });
        }

        // Check if user already exists
        const userExists = await Auth.findOne({ email})
        if(userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }
        //  Hash the password
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        // Create new user
        const newUser = await Auth.create({
            username,
            email,
            phone,
            password: hashPassword
        })

        

    }catch (error) {
        console.error("Error in registration:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }

}

module.exports = register;  