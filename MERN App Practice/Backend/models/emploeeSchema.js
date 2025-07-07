const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    employee_name: {
        type: String,
        required: true
    },
    employee_email:{
        type: String,
        required: true
    },
    employee_type: {
        type: String,
        required: true
    },
    employee_department:{
        type: String,
        required: true,
    },
    employee_role: {
        type: String,
        required: true
    },
    employee_phone:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Employee" , employeeSchema)