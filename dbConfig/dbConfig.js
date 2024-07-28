const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongoose connected successfully");
    })
    .catch((err) => {
        console.log("Something went wrong", err);
    });