const mongoose = require('mongoose');

const signinSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});

const Signin = mongoose.model('Signin', signinSchema, 'Signin');

module.exports = Signin;