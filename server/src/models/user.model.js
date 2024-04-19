const mongoose = require("mongoose");

// create the schema for users
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatarUrl: { type: String, required: false },
});

//connect the schema to the users collections
const User = mongoose.model("user", userSchema); //users

module.exports = User;
