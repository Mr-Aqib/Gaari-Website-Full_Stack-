// Requring express 
const express = require("express");
const errorHandler = require("./middlewares/errorMiddleware");
const connectDB = require("./config/connect");
const app = express();
// Requring Dotenv
require('dotenv').config();
const cors = require('cors')
app.use(cors())
// Requring colors for making terminal beautiful
require('colors')
// Connection  to the DB
connectDB()
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