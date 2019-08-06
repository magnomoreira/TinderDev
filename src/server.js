const express = require('express');
const routes = require('./routes')
const server = express();

server.use(express.json());
server.listen(3333);
server.use(routes);