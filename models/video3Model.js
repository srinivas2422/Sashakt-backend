const mongoose = require('mongoose');

const video3QiuzSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  score : { type: Number, required: true }
});

const Video3Quiz = mongoose.model('Video3Quiz', video3QiuzSchema,"Video3");

module.exports = Video3Quiz;
