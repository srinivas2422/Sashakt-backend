const mongoose = require('mongoose');

const wagaScoreSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  score : { type: Number, required: true },
  level: { type: Number, required: true },
  isCompleted: { type: Boolean, default: false },
});

const WagaScore = mongoose.model('WagaScore', wagaScoreSchema,"wagame");

module.exports = WagaScore;
