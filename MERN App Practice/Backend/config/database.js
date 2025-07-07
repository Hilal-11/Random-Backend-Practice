
const mongoose = require('mongoose')
require('dotenv').config()
const DATABASE_URL = process.env.DATABASE_URL
const connectDB = async () => {
    await mongoose.connect(DATABASE_URL)
    .then(() => {
        console.log("successfully connecting the database")
    }).catch((error) => {
        console.log(error.message)
        console.log("Failed to connect with database")
        process.exit(1)
    })
}

module.exports = connectDB