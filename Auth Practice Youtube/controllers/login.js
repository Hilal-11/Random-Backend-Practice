const Auth = require('../models/authSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req , res) => {
    try{
        const { email , password } = req.body;
        
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