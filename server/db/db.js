var mongoose = require('mongoose');
var mongodb = 'mongodb://127.0.0.1/rune-group';
mongoose.connect(mongodb);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

module.exports = db;
