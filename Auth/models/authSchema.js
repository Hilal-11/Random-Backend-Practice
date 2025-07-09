const mongoose = require('mongoose');
const authSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true  
    },
    role: {
        type: String,
        enum: ["Admin" , "visitor" , "Student"]
    }
})

module.exports = mongoose.model("Auth" , authSchema);