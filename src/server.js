const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const server = express();

mongoose.connect('mongodb://omnistack:react1@ds060478.mlab.com:60478/base_mongo',{ useNewUrlParser:true })
server.use(express.json());
server.user(cors());
server.listen(3333);
server.use(routes);