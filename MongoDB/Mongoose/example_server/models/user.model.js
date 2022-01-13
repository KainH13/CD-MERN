const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    minlength: [3, "Name's length must be at least 3 characters."]
  },
  age: {
    type: Number,
    required: [true, "Age is required."]
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;