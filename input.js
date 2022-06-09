const { UP, LEFT, DOWN, RIGHT }= require("./constants");
// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);  
  return stdin;
};

const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log('Game ending. Goodbye!')
    process.exit();
  }

  if (key === 'f') {
    connection.write('Say: PEW!');
  }

  if (key === UP) {
    connection.write('Move: up');
  } else if (key === LEFT ) {
    connection.write('Move: left');
  } else if (key === DOWN ) {
    connection.write('Move: down');
  } else if (key === RIGHT) {
    connection.write('Move: right');
  }
  
}

module.exports = setupInput;