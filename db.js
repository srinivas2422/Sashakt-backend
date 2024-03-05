const mongoose = require('mongoose');

module.exports = function () {
  mongoose.connect('mongodb://localhost:27017/sashaktdb');
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
};
