var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://test:test01@ds241493.mlab.com:41493/todo');

//Create schema - blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

var todo = mongoose.model('Todo', todoSchema);

//var data = [{item: 'Get milk'}, {item: 'Walk dog'}, {item: 'Code'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false});

module.exports = function(app){

  app.get('/todo', function(req, res){
    //Get data from mongodb and pass it to the view
    todo.find({}, function(err, data){
      if(err) throw err;
      res.render('todo', {todos: data});
    });
  });

  app.post('/todo', urlencodedParser, function(req, res){
    //Get data from the view and add it to mongodb
    var newTodo = todo(req.body).save(function(err, data) {
      if(err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:item', function(req, res){
    //Delete the requested item form mongodb
    todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if(err) throw err;
      res.json(data);
    });
  });
};
