const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    userName : {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    appointmentId :{
        type: String,
    },
    userType: {
        type: String,
    },
    firstName: {
        type: String,
        // required: true,
        default: 'default'
    },
    lastName: {
        type: String,
        // required: true,
        default: 'default'
    },
    age: {
        type: Number,
        // required: true,
        default: 0
    },
    licenseNumber: {
        type: String,
        default: 'default'
        // required: true,
        // unique: true
    },
    dob: {
        type: Date,
        default: Date.now()
        // required: true,
    },
    carDetails: {
        make: { 
            type: String, 
            default: 'default' 
        },
        model: { 
            type: String, 
            default: 'default' 
        },
        year: { 
            type: Number, 
            default: 0
        },
        plateNumber: { 
            type: String, 
            default: 'default' 
        }
    } 
})

userSchema.pre('save', function(next){
    const user = this;

    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;
        next()
    })
});



module.exports = mongoose.model("user", userSchema)