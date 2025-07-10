const Employee = require('../models/employeeSchema')
const getAllEmployees = async (req , res) => {
    try{
        const response = await Employee.find({})
        res.status(200).json({
            success: true,
            response: response,
            message: "Employes are fetched from database"
        })
    }catch(error) {
        console.log(error.message)
        res.status().json({
            success: true,
            error: error.message,
            message: "aLL Employes are fetched form database"
        })
    }
}

module.exports = getAllEmployees