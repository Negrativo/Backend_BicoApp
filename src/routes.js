const express = require("express");
const multer = require('multer');

const UserController = require('./controllers/UserController');
const EmpresaController = require('./controllers/EmpresaController');
const uploadConfig = require('./config/upload');

//GET, POST, PUT, DELETE
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/profissional/cadastro', upload.single('iperfuser'), UserController.store);
routes.get('/profissional/login', UserController.login);
routes.get('/profissional/groupProfissionais', UserController.groupProfissionais);

routes.post('/empresa/cadastro', upload.single('iperfempr'), EmpresaController.store );
routes.get('/empresa/dados', upload.single('iperfempr'), EmpresaController.show );


module.exports = routes;