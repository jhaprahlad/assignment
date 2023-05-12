const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  balance: Number,
  address: mongoose.Schema.Types.Mixed,
  age: Number,
  gender: String,
  isFreeAppUser: {
    type: Boolean,
    default: false,
  },
}, {timestamps:true});
module.exports = mongoose.model("user", userSchema)

