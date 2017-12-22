var myApp = {
  mainMessage :  "welcome to my app",

  mainGreeting(){
    console.log('hey welcome to the app');
  }
};

myApp.module1 = {
  saySomething(message){
    console.log(myApp.mainMessage, message, 'second file');
  },

  doSomething(){
    console.log('called to do something from module 1');
  }
};

myApp.module2 = {
  doSomething(){
    console.log('called to do something from module 1');
  }
};

//short hand function instead of (function(){})();
(() =>{
 myApp.mainGreeting();

 myApp.module1.saySomething('AYO SUP');

 function myFunc(){
   var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
 }
})();
