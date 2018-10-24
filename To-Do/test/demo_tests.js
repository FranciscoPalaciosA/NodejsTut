const assert = require('assert');
const todo = require('../controllers/todoController');

//Describe tests
describe('Demo tests', function(){

  //Create tests
  it('adds two numbers together', function(){
    assert(2 + 3 === 5);
  });
});

describe('Saving records', function(){

  //Create tests
  it('Save a new item to database', function(done){
    var testTodo = new todo({item:'Create test'});
    testTodo.save().then(function(){
      assert(testTodo.isNew === false);
      done();
    });
  });
});

describe('Deleting records', function(){

  var newTodo;

  beforeEach(function(done){
    newTodo = new todo({item: 'Sleep'});
    newTodo.save().then(function(){
      assert(newTodo.isNew === false);
      done();
    });
  });

  it('Deletes one record from the database', function(done){
    todo.findOneAndRemove({item: 'Sleep'}).then(function(){
      todo.findOne({item: 'Sleep'}).then(function(result){
        assert(result === null);
        done();
      });
    });
  });
});
