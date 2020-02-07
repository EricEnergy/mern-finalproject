var mongoose = require("mongoose");
var mongooseTypePhone = require('mongoose-type-phone');
var Schema = mongoose.Schema;


const apptSchema = new Schema({

    fullName: {
        type: String,
        required: "Name is required"
    },
    
    day: {
        type: String,
        required: "appt time is required",
    },
    date: {
        type: String,
        required: "appt time is required",
    },
    time: {
        type: String,
        required: "appt time is required",
    },
    accountID: {
        type: String
    },



});

var Appointments = mongoose.model("appointments", apptSchema);

module.exports = Appointments;