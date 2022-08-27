const express = require('express')
const app = express()
const http = require('http');

// Socket.ioをインポート
const socketIo = require('socket.io');
const server = http.Server(app);

// 初期化
const io = socketIo(server);
const path = require("path");
const { writeFileSync, readFileSync } = require('fs');
let loadPosts = () => JSON.parse(readFileSync('posts.json'));

server.listen(3000, () => console.log(`Lisening on port :3000`))

app.use(express.static(__dirname + "/view"));

app.get("/", function (request, response) {
    response.render(path.join(__dirname + "/view/index.ejs"));
})

app.get("/posts", function (request, response) {
    response.send(loadPosts());
});

app.get("/post", function (request, response) {
    response.render(path.join(__dirname + "/view/en/news.ejs"));
});
