const mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: String,
    mobile: {
      type: String,
      // required : true
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      unique: true,
    },
    gender: String,
    isDeleted: {
      type: Boolean,
      default: false,
    },
    age: Number,
    post: {
      type: [],
      default: [],
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("UserInformation", userSchema);
