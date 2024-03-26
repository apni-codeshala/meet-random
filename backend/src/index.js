const { Server } = require("socket.io");
const http = require("http");

const express = require("express");
const { UserManager } = require("./managers/UserManger");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

const userManager = new UserManager();

io.on('connection', (socket) => {
    console.log('a user connected');
    userManager.addUser("randomName", socket);
    socket.on("disconnect", () => {
        console.log("user disconnected");
        userManager.removeUser(socket.id);
    })
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
