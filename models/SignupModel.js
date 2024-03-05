const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },

});

const Signup = mongoose.model('Signup', signupSchema, 'Signup');

module.exports = Signup;