var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:{
    type: String,
    unique: true,
    required: true
  },
  rsn:{
    type: String,
    required: true
  },
  avatar:{
    type: String,
    required: true
  }
});

var user = mongoose.model('users', userSchema);
module.exports = user;
