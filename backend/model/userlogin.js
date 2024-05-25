const mongoose = require('mongoose')
const usersLogin = new mongoose.Schema({
    name: String,
    email:String,
    password:String,
});

module.exports = mongoose.model('loginDetails', usersLogin);