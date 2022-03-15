const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = 5001;

app.get('/', (req, res) => {
    res.send({data: 'ok'})
  });

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});