import { Server } from "socket.io";

export const setupSocket = (server) => {
  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
    socket.emit("newNotification", "You earned a new badge!");
  });
};
