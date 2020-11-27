const express = require("express");
const app = express();
const server = require("http").createServer(app);

const port = process.env.PORT || 8080;

const socket = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

socket.on("connection", (socket) => {
  console.log("client connected");
  socket.on("test_msg", (data) => {
    console.log("Data :", data);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
