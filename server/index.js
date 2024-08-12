// Requring express 
const express = require("express");
const errorHandler = require("./middlewares/errorMiddleware");
const app = express();
// Requring Dotenv
require('dotenv').config();
// Requring colors for making terminal beautiful
require('colors')
// Converting data into Json format
app.use(express.json())
// encoding json data
app.use(express.urlencoded({extended:false}))
// calling from routes 
app.use('/user', require('./routes/userRoutes'))
// Handling Error Handling
app.use(errorHandler)
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT.red}`))