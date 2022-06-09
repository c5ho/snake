const net = require("net");
const { HOST, PORT } = require("./constants")

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: HOST,
    port: PORT
  });

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

module.exports = connect;