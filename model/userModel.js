const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = Schema({
    name: String,
    age: Number,
    gender: String,
    phone:String,
    address: String,
    pin: String,
});

module.exports = mongoose.model('User',userSchema)