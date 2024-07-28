const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = Schema({
    name: String,
    age: Number,
    gender: String,
    address: String,
    pin: String,
});

module.exports = mongoose.model('User',userSchema)