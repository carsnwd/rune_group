var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/rune-group';
mongoose.connect(url);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

module.exports = db;
