const express = require('express');
const cors = require('cors')
const app = express();
const path = require('path');
const server = require('http').createServer(app);

const port = 8080;

app.use(cors())
app.use(express.static(path.join(__dirname, '../public')));


app.get('/api/rooms', function (_, res) {
    res.send(JSON.stringify({data: 'data'}));
});

server.listen(port, () => { console.log('Server listening at port %d', port); });