const mongoose = require('mongoose');

const gameLevelSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  level: { type: Number, required: true },
  isCompleted: { type: Boolean, default: false },
});

const GameLevel = mongoose.model('GameLevel', gameLevelSchema, "puzzlelevel");

module.exports = GameLevel;
