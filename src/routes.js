const express = require('express');
const routes = express.Router();
const DevController = require ('./controllers/DevController');
const LikeController = require ('./controllers/likeController');
const DeslikeController = require ('./controllers/DeslikeController')


routes.get ('/devs', )
routes.post('/devs', DevController.store);
routes.post('/devs/:devid/likes', LikeController.store);
routes.post('/devs/:devid/Deslikes', DeslikeController.store);
module.exports= routes;