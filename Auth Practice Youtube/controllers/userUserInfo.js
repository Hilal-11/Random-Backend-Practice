const Auth = require('../models/authSchema')
const getUserInfo = async (req , res) => {
    try {
        // const { } = req.body;

    }catch(error) {
        console.log(error.message)
        res.status(501).json( {
            success: false,
            message: error.message,
        })
    } 
}

module.exports = getUserInfo