const express = require("express");
const multer = require('multer');

const userController = require('./controllers/UserController');
const empresaController = require('./controllers/EmpresaController');
const inicioController = require('./controllers/InicioController');
const principalController = require('./controllers/PrincipalController');
const pesquisaController = require('./controllers/PesquisaController');

const routes = express.Router();
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

routes.post('/usuario/cadastro', upload.single('imagemPerfil'), userController.store);
routes.get('/usuario/dados', userController.show);
routes.put('/usuario/alterarDados', userController.update);
routes.post('/usuario/deletar', userController.destroy);

routes.post('/empresa/cadastro', upload.single('imagemPerfil'), empresaController.store);
routes.get('/empresa/dados', empresaController.show);
routes.put('/empresa/alterarDados', empresaController.update);
routes.post('/empresa/deletar', empresaController.destroy);

routes.post('/cadastro', inicioController.cadastrar);
routes.post('/login', inicioController.login);

routes.get('/principal/lista', principalController.groupProfissionais);

routes.post('/pesquisa/salvarCargo', pesquisaController.store);
routes.get('/pesquisa/cargo', pesquisaController.show);
routes.get('/pesquisa/cargos', pesquisaController.listAll);
routes.post('/pesquisa/apagarCargo', pesquisaController.destroy);

module.exports = routes;