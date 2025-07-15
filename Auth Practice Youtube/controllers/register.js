const Auth = require('../models/authSchema');   
const bcrypt = require('bcrypt'); 
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
        // generate JWT token
        const token = await jwt.sign( 
            {
                user: newUser._id,
                email: newUser.email,
                role: newUser.role
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
            message: "Cookie stored successfully",
            response: token
        })

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            response: token
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