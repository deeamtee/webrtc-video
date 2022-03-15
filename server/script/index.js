const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const PORT = 5010;

const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
});
  
app.get('/', (req, res) => {
    res.send({data: 'ok'})
  });

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});