const net = require("net");

// establishes a connection with the game server
const credentials = { 
  host: 'localhost', //165.227.47.243
  port: 50541
}

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection(credentials);

  //sends confirmation on connection with the server
  conn.on('connect', () => {
    console.log("=> Successfully connected to the Snek server!");
    conn.write('Name: CHO');
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log(data);
  })
  return conn;
};

module.exports = {
  connect,
};