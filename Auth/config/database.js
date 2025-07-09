const mongoose = require("mongoose")
require('dotenv').config()
const DATABASE_URL = process.env.DATABASE_URL

const connectDB = async () => {
    try{
        await mongoose.connect(DATABASE_URL)
        console.log("Database connection successful")
    }catch(error) {
        console.log(error.message)
        console.log("Failed to connect database")
        process.exit(1)
    }
}

module.exports = connectDB