//short hand function instead of (function(){})();
(() =>{
 myApp.mainGreeting();

 myApp.module1.saySomething('AYO SUP');

 function myFunc(){
   var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
 }
})();
