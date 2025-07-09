const mongoose = require('mongoose');
const authSchema = new mongoose.Schema({
    useranme:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true  
    }
})

module.exports = mongoose.model("Auth" , authSchema);