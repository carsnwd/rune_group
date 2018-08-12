var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  _id:{
    type: String,
    default: shortid.generate
  },
  username:{
    type: String,
    required: true
  },
  rsn:{
    type: String,
    required: true
  },
  avatar:{
    type: String,
    required: true
  },
  boss:{
    type: String,
    required: true
  }
});

var post = mongoose.model('posts', postSchema);
module.exports = post;
