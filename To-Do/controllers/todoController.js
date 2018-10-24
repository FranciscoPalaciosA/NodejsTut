var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://test:test01@ds241493.mlab.com:41493/todo');

//Create schema - blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

var todo = mongoose.model('Todo', todoSchema);
var itemOne = todo({item: 'Walk the dog'}).save(function(err){
  if(err) throw err;
  console.log('Item saved');
});

var data = [{item: 'Get milk'}, {item: 'Walk dog'}, {item: 'Code'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false});

module.exports = function(app){

  app.get('/todo', function(req, res){
    res.render('todo', {todos: data});
  });

  app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
  });
};
