const Employee = require('../models/employeeSchema')
const createEmployee = async (req , res) => {
    try{   
        const { employee_name , employee_email , employee_type,
                employee_department , employee_role , employee_phone,  } = req.body 

        if(!employee_name , !employee_email , !employee_type , !employee_department , !employee_role , !employee_phone){
            console.log("Not all data fields...insert data correctly")
            res.json({
                success: false,
                message: "Please full the data fields correctly"
            })
        }
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
        res.status(500).json({
            success: true,
            error: error.message,
            message: "failed to create Employes"
        })
    }
}

module.exports = createEmployee


// {
//    "employee_name":"Hilal" ,
//     "employee_email": "hilalahmadcodedev123@gmail.com" ,
//     "employee_type": "Software developer",
//     "employee_department": "IT" ,
//     "employee_role": "Software Developer" ,
//     "employee_phone": "9906642151"
// }