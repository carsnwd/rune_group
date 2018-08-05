var express = require('express');
var router = express.Router();
var User = require('./db/models/User');
var Post = require('./db/models/Post');

router.post('/register', function(req, res){
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

router.get('/user/:username', function(req, res){
  var query = User.findOne({"username": req.params.username});
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
  var query = Post.findOne({"_id":req.params.id});
  query.exec(function(err, post){
    if(post === null){
      res.status(404).send({message: 'Post not found', status: 404});
    }else{
      res.status(200).send(post);
    }
  });
});

router.get('/post/boss/:boss', function(req, res){
  var query = Post.find({"boss":req.params.boss});
  query.exec(function(err, post){
    if(post === null){
      res.status(404).send({message: 'Post not found', status: 404});
    }else{
    res.status(200).send(post);
    }
  });
});

module.exports = router;
