const express = require('express');
const connectDB = require('./config/database');
const appRoutes = require('./routes/appRoutes');
const cors = require('cors')   
const app = express(); 
require('dotenv').config(); 
const PORT =process.env.PORT || 4000;


// Middleware
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials : true
    
}

app.use(cors(corsOptions))
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use('/api/v1' , appRoutes); // Use app routes

app.get('/', (req, res) => {
    res.send('Welcome to the Auth Practice API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
// Connect to the database

connectDB();

// alternative 

// connectDB().then( () => {
//     console.log("Database connection established");
// } ).catch((error) => {
//     console.error("Database connection failed:", error);
//    process.exit(1);
// });