const express = require("express");

const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", () => {
  console.log("what is socket: ", socket);
  console.log("Socket is active to be connected: ");
  socket.on("chart", (payload) => {
    console.log("payload received", payload);
    io.emit("chart", payload);
  });
});

server.listen("5000", () => console.log("server listening on port 5000"));
