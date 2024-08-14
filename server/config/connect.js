const mongoose = require('mongoose')
const connectDB = async () =>
{
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`connected to the data ${mongoose.connection.host.red}`)
}
module.exports = connectDB
