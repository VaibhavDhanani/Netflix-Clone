const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  city: String,
  plan: String,
  address: String,
  password: String,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
