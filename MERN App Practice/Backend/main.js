const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app_routes = require('./routes/appRoutes')
const connectDB = require('./config/database')
const app = express()

app.use(express.json());
app.use("/api/v1" , app_routes)

app.get('/' , (req , res) => {
    console.log("Backend MERN")
})

app.listen(PORT , () => {
    console.log(`App is running on PORT ${PORT}`)
})

connectDB()