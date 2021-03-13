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


app.get('/', (req, res) => {
  res.send('Hello World');
});

server.listen(PORT, HOST);
console.log(`Running on http://${DOCKER_HOST}:${DOCKER_PORT}`); 