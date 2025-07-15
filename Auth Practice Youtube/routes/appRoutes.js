const express = require('express');
const router = express.Router();

const register = require('../controllers/register');
const login = require('../controllers/login')
// const userUserInfo = require('../controllers/userUserInfo')

// router.get('/getUserInfo' , userUserInfo)
router.post('/register', register);
router.post('/login' , login)


module.exports = router;