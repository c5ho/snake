const { connect } = require('./client');

// const apples = connect(); //connect() is a function invocation
//                         //executes connect() from client.js
//                         //returns an object to apples
// console.log(apples); //this shows the composite object that 
//                       //includes everything that was returned 
//                       //from client.js and then assigned to 
//                       //the apples object

console.log("Connecting ...");
const apples = connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);  
  return stdin;
};

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
}


  
setupInput();



// apples.write('Move: up');
// setInterval(() => {
//   apples.write('Move: up');
// }, 500);
// setTimeout(() => {
//   apples.write('Move: up');
// }, 100);
// setTimeout(() => {
//   apples.write('Move: up');
// }, 1500);
// setTimeout(() => {
//   apples.write('Move: up');
// }, 2000);
// apples.write('Move: up');
// apples.write('Move: up');
// apples.write('Move: up');
// apples.write('Move: up');
// apples.write('Move: up');


