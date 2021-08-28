const express = require("express");
const multer = require('multer');

const userController = require('./controllers/UserController');
const empresaController = require('./controllers/EmpresaController');
const inicioController = require('./controllers/InicioController');
const principalController = require('./controllers/PrincipalController');

const routes = express.Router();
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

routes.post('/usuario/cadastro', upload.single('imagemPerfil'), userController.store);
routes.get('/usuario/dados', userController.show);

routes.post('/empresa/cadastro', upload.single('imagemPerfil'), empresaController.store);
routes.get('/empresa/dados', empresaController.show);

routes.post('/cadastro', inicioController.cadastrar);
routes.get('/login', inicioController.login);

routes.get('/principal/lista', principalController.groupProfissionais);

module.exports = routes;