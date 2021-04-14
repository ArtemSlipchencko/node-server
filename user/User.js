const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  token: {
    type: String,
  },

  subcription: {
      type: String,
      default: 'common'
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;