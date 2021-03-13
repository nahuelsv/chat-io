'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const DOCKER_PORT = 4400;
const DOCKER_HOST = 'localhost';

// Configs
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

let messages = [{
    id: 1,
    text: 'Welcome to the chat!',
    nickname: 'Welcome BOT'
}];

io.on('connection', (socket)=>{
    console.log('client ip:', socket.handshake.address);

    socket.emit('messages', messages);

    socket.on('add-message', (data)=>{
        messages.push(data);
        socket.emit('messages', messages);
    });
});

server.listen(PORT, HOST);
console.log(`Running on http://${DOCKER_HOST}:${DOCKER_PORT}`); 