const mongoose = require('mongoose')
const { Schema } = mongoose;

const appointment = new Schema({
    date: {
        type : String,
        unique : true
    },
    time : {
        type : String,
    },
    isTimeSlotAvailable :{
        type : Boolean, 
        default : true,
    },
    userId: {
        type: String,
    }
});


module.exports = mongoose.model('appointment', appointment);