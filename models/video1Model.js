const mongoose = require('mongoose');

const video1QiuzSchema = new mongoose.Schema({
  user : {type:mongoose.Schema.Types.ObjectId, ref : 'User'},
  score : { type: Number, required: true }
});

const Video1Quiz = mongoose.model('Video1Quiz', video1QiuzSchema,"Video1");

module.exports = Video1Quiz;
