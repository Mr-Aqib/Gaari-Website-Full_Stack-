const express = require('express');
const registerUser = require('../controllers/userController');
const router = express.Router()
router.post('/Register_user', registerUser)
module.exports=router;