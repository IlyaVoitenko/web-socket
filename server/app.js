const { Server } = require("socket.io");
const { createServer } = require("http");

const httpServer = createServer();

const webSocketServer = new Server(httpServer, {
  cors: {
    origins: "*",
  },
});

webSocketServer.on("connection", (socket) => {
  socket.on("chat-message", (message) => {
    socket.broadcast.emit("chat-message", message);
  });
});

httpServer.listen(5000);