var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('<h1>Home Page</h1>');
});

app.get('/contact', function(req, res){
  res.send('<h1>Contact Page</h1>');
});

app.get('/profile/:id', function(req, res){
  res.send('You requested to see a profile with the id of ' + req.params.id)
});

app.listen(3000);
