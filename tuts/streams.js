var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt');

myReadStream.on('data', function(chunk){
  console.log('new chunk received: ');
  console.log(chunk);
});
