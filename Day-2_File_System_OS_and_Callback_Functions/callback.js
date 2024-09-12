function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
  }
  
  function callMe() {
    console.log('I am callback function');
  }
  
  const greeting = greet('John', callMe);

  export {
    greeting
  }