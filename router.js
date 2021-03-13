const route = require('express').Router();
const GetVideoController = require('./controllers/getVideo.controller');

const routeController = new GetVideoController();

route.get('/scrape', (req, res) => routeController.getVideoHandler(req, res));

module.exports = route;


