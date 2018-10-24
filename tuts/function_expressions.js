function callFunction(func){
  func();
}
var sayBye = function(){
  console.log('Bye');
};

callFunction(sayBye);
