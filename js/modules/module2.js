myApp.module1 = {
  saySomething(message){
    console.log(myApp.mainMessage, message, 'second file');
  },

  doSomething(){
    console.log('called to do something from module 1');
  }
};
