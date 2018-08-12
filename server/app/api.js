var express = require('express');
var sanititze = require('mongo-sanitize');
var router = express.Router();
var util = require('util');
var User = require('./db/models/User');
var Post = require('./db/models/Post');
var playerDetails = require('./util/playerDetails');

router.post('/register', function(req, res){
  playerDetails.isPlayerMaxed(req.body.rsn, function(maxed){
    req.body.maxed = maxed;
    playerDetails.getPlayerAvatar(req.body.rsn, function(avatar){
      req.body.avatar = avatar;
      var user = new User(req.body);
      user.save()
        .then(function(item){
          res.status(200).send({message: "User successfully created.", status: 200});
        })
        .catch(function(err){
          console.log(err);
          res.status(400).send({message: "User failed to save to database", status: 400});
        });
    });
  });
});

router.get('/user/:username', function(req, res){
  var username = sanitize(req.params.username);
  var query = User.findOne({"username": username});
  query.exec(function(err, user){
    if(user === null){
      res.status(404).send({message: "User not found", status: 404});
    }else{
    res.status(200).send(user);
    }
  });
});

router.post('/create_post', function(req, res){
  var post = new Post(req.body);
  post.save()
    .then(function(item){
      res.status(200).send({message: "Post successfully created.", status: 200});
    })
    .catch(function(err){
      console.log(err);
      res.status(400).send({message: "Post failed to save to database", status: 400});
    });
});

router.get('/post/id/:id', function(req, res){
  var id = sanitize(req.params.id);
  var query = Post.findOne({"_id": id});
  query.exec(function(err, post){
    if(post === null){
      res.status(404).send({message: 'Post not found', status: 404});
    }else{
      res.status(200).send(post);
    }
  });
});

router.get('/post/boss/:boss', function(req, res){
  var boss = sanitize(req.params.boss);
  var query = Post.find({"boss":boss});
  query.exec(function(err, post){
    if(post === null){
      res.status(404).send({message: 'Post not found', status: 404});
    }else{
    res.status(200).send(post);
    }
  });
});

module.exports = router;
