const userModel = require('../models/userModels')
const errorAsynchandler = require('express-async-handler')
const encrypt= require('bcrypt')

const registerUser = errorAsynchandler(async(req, res)=>
    {
    const { myName, myEmail, myPassword, myGender, myPhone, myImage } = req.body
    if (!myName || !myEmail || !myPassword || !myGender || !myPhone)
    {
        throw new Error('Enter all Fields')
    }
    try {
        //checking user existed or not
        const exsistedUser = await userModel.findOne({ email: myEmail })
        if (exsistedUser) {
            throw new Error('User already regsisted')
        }
        //Hshing Passwprd
        const hashPassword = await encrypt.hash(myPassword,10)
        const createdUser = await userModel.create ({
        name: myName,
        email: myEmail,
        password: hashPassword,
        gender: myGender,
        phone: myPhone,
        image: myImage
        })
        res.send(createdUser)
    } catch (error) {
        throw new Error(error)
    }
    
})
// Login User
const loginUser = errorAsynchandler(async (req, res) =>
{
    const { myEmail, myPassword } = req.body
    if (!myEmail || !myPassword)
    {
        throw new Error('Please Enter fields')
    }
    const findUser = await userModel.findOne({ email: myEmail })
    if (!findUser) {
        throw new Error('Invalid Email')
    }
    if (findUser.email && (await encrypt.compare(myPassword, findUser.password)))
   {
        res.send(findUser)
    }
    else
    {
        throw new Error('Incorrect Password')
        }
})
module.exports = {
    registerUser,
    loginUser
 }