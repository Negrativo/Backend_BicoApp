const express = require("express");
const SessionController = require('./controllers/SessionController');


const routes = express.Router();
//GET, POST, PUT, DELETE

routes.post('/users', SessionController.store);

routes.get('/user/teste', SessionController.show);

//routes.post('user/teste', )


module.exports = routes;