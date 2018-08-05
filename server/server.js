var express = require('express');
var api = require('./api');
var app = express();

app.use(express.json());

app.use('/api', api);

//Error handling
app.use(function (err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something went wrong, internal server error.');
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
