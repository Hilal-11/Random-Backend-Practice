const mongoose = require("mongoose")
require('dotenv').config()
const DATABASE_URL = process.env.DATABASE_URL
const connectDB = async () => {
    try{
        mongoose.connect(DATABASE_URL)
        console.log("Database connection successfully")
    }catch(error) {
        console.log(error.message)
        console.log("Database connection failed")
        process.exit(1)
    }
}

module.exports = connectDB