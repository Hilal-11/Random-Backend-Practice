const Employee = require('../models/emploeeSchema')
const createEmployee = async (res , res) => {
    try{   
        const { employee_name , employee_email , employee_type,
                employee_department , employee_role , employee_phone } = res.body 

        const saveEmploye = await Employee.create({
            employee_name , employee_email , employee_type,
            employee_department , employee_role , employee_phone
        })
        res.status(200).json({
            success: true,
            response: saveEmploye,
            message: "Employes created"
        })
    }catch(error){
        console.log(error.message)
        res.status().json({
            success: true,
            error: error.message,
            message: "failed to create Employes"
        })
    }
}

module.exports = createEmployee