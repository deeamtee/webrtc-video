const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const PORT = 3010;

app.get('/', (req, res) => {
    res.send({data: 'ok'})
  });

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});