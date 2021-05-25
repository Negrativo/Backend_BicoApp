const express = require("express");
const SessionController = require('./controllers/SessionController');
const EmpresaController = require('./controllers/EmpresaController');


const routes = express.Router();
//GET, POST, PUT, DELETE

routes.post('/user/cadastro', SessionController.store);
routes.get('/user/dados', SessionController.show);

routes.post('/empresa/cadastro', EmpresaController.store );
routes.get('/empresa/dados', EmpresaController.show );



module.exports = routes;