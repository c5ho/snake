const { appendFileSync } = require('fs');
const connect = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");
//connect() is a function invocation, executes connect() from client.js
//returns an object to 'conn', a composite object that includes everything that 
//was returned from client.js and then assigned to the conn object

setupInput(connect());


//let apples connect();
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


