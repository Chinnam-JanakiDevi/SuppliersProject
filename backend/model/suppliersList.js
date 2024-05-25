const mongoose = require('mongoose')
const usersList = new mongoose.Schema({
    name: String,
    college:String,
    place:String,
    amount:Number
});

module.exports = mongoose.model('suppliersList', usersList);