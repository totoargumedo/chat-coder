import server from "./app.js";
import { Server } from "socket.io";

const PORT = process.env.PORT || 8080;

const ready = () => console.log(`server ready on port: ${PORT}`);

const http_server = server.listen(PORT, ready);

//chats
const chats = [];

//create socket server
const socket_server = new Server(http_server);

socket_server.on("connection", (socket) => {
  console.log("New socket user " + socket.client.id);
  socket.on("auth", () => {
    socket.emit("all_messages", chats);
  });

  socket.on("new_message", (data) => {
    chats.push(data);
    console.log(chats);
    socket_server.emit("all_messages", chats);
  });
});
