const express = require('express')
const connectDB = require('./config/connectDB')
const appRoutes = require('./routes/appRoutes')
require('dotenv').config()
const PORT = process.env.PORT
const app = express();
app.use('/api/v1', appRoutes)
app.use(express.json())
app.get('/', (req , res) => {
    res.send("Hello Backend")
})

app.listen(PORT , () => {
    console.log(`App is running on PORT: ${PORT}`)
})

connectDB();

