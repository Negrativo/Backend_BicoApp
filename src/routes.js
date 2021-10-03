const express = require("express");
const multer = require('multer');

const userController = require('./controllers/UserController');
const empresaController = require('./controllers/EmpresaController');
const inicioController = require('./controllers/InicioController');
const principalController = require('./controllers/PrincipalController');
const pesquisaController = require('./controllers/PesquisaController');
const favoritoController = require('./controllers/FavoritosController');
const funcoesController = require('./controllers/FuncoesController');

const routes = express.Router();
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

routes.post('/usuario/cadastro', upload.single('imagemPerfil'), userController.store);
routes.get('/usuario/dados', userController.show);
routes.put('/usuario/alterarDados', upload.single('imagemPerfil'), userController.update);
routes.post('/usuario/deletar', userController.destroy);
routes.post('/usuario/dadosSelecionado', userController.findById);

routes.post('/empresa/cadastro', upload.single('imagemPerfil'), empresaController.store);
routes.get('/empresa/dados', empresaController.show);
routes.put('/empresa/alterarDados', empresaController.update);
routes.post('/empresa/deletar', empresaController.destroy);

routes.post('/cadastro', inicioController.cadastrar);
routes.post('/login', inicioController.login);
routes.post('/cadastro/conclusao', userController.store);

routes.get('/principal/lista', principalController.groupProfissionais);

routes.post('/pesquisa/salvarCargo', pesquisaController.store);
routes.get('/pesquisa/cargo', pesquisaController.show);
routes.get('/pesquisa/cargos', pesquisaController.listAll);
routes.post('/pesquisa/apagarCargo', pesquisaController.destroy);

routes.post('/favorito/adicionar', favoritoController.store);
routes.get('/favorito/buscar', favoritoController.show);
routes.post('/favorito/atualizar', favoritoController.update);
routes.post('/favorito/remover', favoritoController.destroy);
routes.get('/favorito/listagem', favoritoController.listAll);

routes.post('/usuario/deletarTodos', funcoesController.deleteAllUser);

module.exports = routes;