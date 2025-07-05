const express = require('express');
require('dotenv').config()
const app_routes = require("")
const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use("/api/v1" , app_routes)

app.listen(PORT , () => {
    console.log(`App is running on PORT: ${PORT}`)
})
