const express = require('express');
const {registerUser,loginUser} = require('../controllers/userController');
const router = express.Router()
// Register Route from user controller
router.post('/Register_user', registerUser)
// Login Rouer form user Controller
router.post('/login_user',loginUser)
module.exports=router;