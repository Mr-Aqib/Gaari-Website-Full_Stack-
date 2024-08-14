const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUserimage.png&psig=AOvVaw04IWSUzdN1bFwKjsGQ8aLW&ust=1723739589423000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPD7zsj09IcDFQAAAAAdAAAAABAE'
    }
},{
    timestamps: true,
})
module.exports=mongoose.model('userTable',userSchema)