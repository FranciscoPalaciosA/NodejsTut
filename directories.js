var fs = require('fs');

//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');
/*
fs.mkdir('stuff', function(){
  fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});
*/
fs.unlink('./stuff/writeMe.txt');
fs.rmdir('stuff');
