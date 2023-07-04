const mongoose = require('mongoose')
const { Schema } = mongoose;

const appointment = new Schema({
    date: {
        type : String,
        default: ""
    },
    time: {
        type : String,
        default: ""
    },
    isTimeSlotAvailable: {
        type : Boolean, 
        default : true,
    },
    userId: {
        type: String,
    }
});


module.exports = mongoose.model('appointment', appointment);