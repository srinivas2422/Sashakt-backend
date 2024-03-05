const mongoose = require('mongoose');

const rteQuizSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  score : { type: Number, required: true }
});

const RteQuiz = mongoose.model('RteQuiz', rteQuizSchema,"Right_to_Education");

module.exports = RteQuiz;
