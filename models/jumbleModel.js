const mongoose = require('mongoose');

const jumbleScoreSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  score : { type: Number, required: true }
});

const JumbleScore = mongoose.model('JumbleScore', jumbleScoreSchema,"jumblegame");

module.exports = JumbleScore;
