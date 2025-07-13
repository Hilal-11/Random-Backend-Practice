const express = require('express')
const router = express.Router();

const signup = require('../controllers/signup')
const login = require('../controllers/login')
const { auth , isAdmin , isStudent } = require('../middlewares/auth')

router.post('/signup' , signup);
router.post('/login' , login);

router.get('/student' , auth , isStudent , (req , res) => {
    res.json({
        success: true,
        message: "Wel come to the protected route for Student"
    })
})

router.get('/admin' , isAdmin , (req , res) => {
    res.json({
        success: true,
        message: "Wel come to the protected route for Admin"
    })
})

module.exports = router;