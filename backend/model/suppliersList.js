const mongoose = require('mongoose')
const usersList = new mongoose.Schema({
    name: String,
    email:String,
    isCollege:Boolean,
    college:String,
    place:String,
    amount:Number,
    freeToday:Boolean
});

module.exports = mongoose.model('suppliersList', usersList);