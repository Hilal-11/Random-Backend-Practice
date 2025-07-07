const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app_routes = require('./routes/appRoutes')
const connectDB = require('./config/database')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());
app.use("/api/v1" , app_routes)
app.get('/' , (req , res) => {
    res.send("<h1>Hello Backend</h1>")
})

app.listen(PORT , () => {
    console.log(`App is running on PORT ${PORT}`)
})

connectDB()