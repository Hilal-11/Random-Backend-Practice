const express = require('express');
const router = express.Router();

const regester = require('../controllers/register');

router.post('/register', register);

module.exports = router;