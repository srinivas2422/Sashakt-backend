const mongoose = require('mongoose');

const rt_pQuizSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  score : { type: Number, required: true }
});

const Rt_pQuiz = mongoose.model('Rt_pQuiz', rt_pQuizSchema,"Right_to_Participation");

module.exports = Rt_pQuiz;
