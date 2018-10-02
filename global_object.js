/*
The global object
*/
var time = 0;

setTimeout(function(){
  console.log('3secs have passed');
}, 3000);

setInterval(function(){
  time += 2;
  console.log(time +' secs have passed');
}, 2000);

var timer = setInterval(function(){
  time += 2;
  console.log(time +' secs have passed');

  if(time > 5){
    clearInterval(timer);
  }
}, 2000);

console.log(__dirname);
console.log(__filename);
