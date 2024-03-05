// models/quizModel.js
const mongoose = require('mongoose');

const wagaquizSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  level: { type: Number, required: true },
  isCompleted: { type: Boolean, default: false },
});

const WagaQuiz = mongoose.model('WagaQuiz', wagaquizSchema, "wagaquizlevel");

module.exports = WagaQuiz;
