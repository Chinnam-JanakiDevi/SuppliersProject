const mongoose = require('mongoose')
const usersList = new mongoose.Schema({
    name: String,
    email:String,
    placeORcollege:String,
    contact:String,
    amount:Number,
    freeToday:String
});

module.exports = mongoose.model('suppliersList', usersList);