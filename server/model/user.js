const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    // id: Number,
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    userName : {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    userType: {
        type: String,
    },
    age: {
        type: Number,
        default: 0
    },
    dob: {
        type: Date,
        default: Date.now()
        // required: true,
    },
    // appointmentId :{
    //     type: String,
    //     default: 'default'
    // },
    appointmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    },
    licenseNumber: {
        type: String,
        default: '',
        unique: true
    },
    registrationDate: {
        type: Date,
        default: Date.now()
    },
    carDetails: {
        make: { 
            type: String, 
            default: '' 
        },
        model: { 
            type: String, 
            default: '' 
        },
        plateNumber: { 
            type: String, 
            default: '' 
        }
    },
    comment:{ 
        type: String, 
        default: '' 
    },
    isPassed:{ 
        type: Boolean
    }
})

// userSchema.pre('save', function(next){
//     const user = this;

//     bcrypt.hash(user.password, 10, (err, hash) => {
//         user.password = hash;
//         next()
//     })
// });



module.exports = mongoose.model("user", userSchema)