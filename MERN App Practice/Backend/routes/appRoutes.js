const express = require('express')
const router = express.Router()

const getAllEmployees = require('../controllers/getAllEmployees')
const createEmployee = require('../controllers//createEmployee')

router.get("/getAllEmployees" , getAllEmployees);
router.post("/createEmployee" , createEmployee);

module.exports = router