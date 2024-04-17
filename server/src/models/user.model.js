const mongoose = require("mongoose");

// create the schema for users
const userSchema = new mongoose.Schema({
    id: {type: Number , required: true},
    fullName: {type: String, required: true},
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    avatarUrl: {type: String, required: true},
})

//connect the schema to the users collections
const User = mongoose.model("user", userSchema); //users

module.exports = User;