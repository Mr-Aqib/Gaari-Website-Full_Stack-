const userModel = require('../models/userModels')
const errorAsynchandler = require('express-async-handler')

const registerUser = errorAsynchandler(async(req, res)=>
    {
    const { myName, myEmail, myPassword, myGender, myPhone, myImage } = req.body
    if (!myName || !myEmail || !myPassword || !myGender || !myPhone)
    {
        throw new Error('Enter all Fields')
    }
    try {
        const createdUser = await userModel.create ({
        name: myName,
        email: myEmail,
        password: myPassword,
        gender: myGender,
        phone: myPhone,
        image: myImage
        })
        res.send(createdUser)
    } catch (error) {
        throw new Error(error)
    }
    
})
module.exports = registerUser