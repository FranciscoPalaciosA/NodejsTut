const mongoose = require('mongoose');

//Connect to mongodb

mongoose.connect('mongodb://test:test01@ds241493.mlab.com:41493/todo');

mongoose.connection.once('open', function(){
  console.log('Connection has been made');
}).on('error', function(err){
  console.log('Connection error: ', error);
});
