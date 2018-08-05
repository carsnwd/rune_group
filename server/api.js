var express = require('express');
var router = express.Router();
var User = require('./db/models/User');
var Post = require('./db/models/Post');

router.post('/regiser', function(req, res){
  var user = new User(req.body);
  user.save()
    .then(function(item){
      res.status(200).send({message: "User successfully created."});
    })
    .catch(function(err){
      res.status(400).send("User failed to save to database");
    });
});

router.get('/user/:username', function(req, res){
  var query = User.findOne({"username": req.params.username});
  query.exec(function(err, user){
    if(user === null){
      res.status(404).send('User not found');
    }else{
    res.status(200).json(user);
    }
  });
});

router.post('/create_post', function(req, res){
  var post = new Post(req.body);
  post.save()
    .then(function(item){
      res.status(200).send({message: "Post successfully created."});
    })
    .catch(function(err){
      console.log(err);
      res.status(400).send("Post failed to save to database");
    });
});

router.get('/post/:id', function(req, res){
  var query = Post.findOne({"_id":req.params.id});
  query.exec(function(err, post){
    if(post === null){
      res.status(404).send('Post not found');
    }else{
    res.status(200).json(post);
    }
  });
});

module.exports = router;
