const mongoose = require('mongoose');

const video2QiuzSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  score : { type: Number, required: true }
});

const Video2Quiz = mongoose.model('Video2Quiz', video2QiuzSchema,"Video2");

module.exports = Video2Quiz;
