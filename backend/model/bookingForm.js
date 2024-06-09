const mongoose = require('mongoose')
const bookingusersList = new mongoose.Schema({
    name: String,
    eventname:String,
    contact:String,
    message:String
});

module.exports = mongoose.model('bookingList', bookingusersList);