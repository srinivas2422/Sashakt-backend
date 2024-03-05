const mongoose = require('mongoose');

const wordScoreSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  score : { type: Number, required: true },
  level: { type: Number, required: true },
});

const WordScore = mongoose.model('WordScore', wordScoreSchema,"wordsearchscore");

module.exports = WordScore;