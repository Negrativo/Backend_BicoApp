const express = require("express");
const multer = require('multer');

const authMiddleware = require("./middlewares/auth");

const userController = require('./controllers/UserController');
const inicioController = require('./controllers/InicioController');
const principalController = require('./controllers/PrincipalController');
const pesquisaController = require('./controllers/PesquisaController');
const favoritoController = require('./controllers/FavoritosController');
const funcoesController = require('./controllers/FuncoesController');
const historicoController = require('./controllers/HistoricoController');

const routes = express.Router();
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

routes.post('/usuario/cadastro', upload.single('imagemPerfil'), userController.store);
routes.get('/usuario/dados', authMiddleware, userController.show);
routes.put('/usuario/alterarDados', upload.single('imagemPerfil'), userController.update);
routes.post('/usuario/deletar', authMiddleware, userController.destroy);
routes.post('/usuario/dadosSelecionado', authMiddleware, userController.findById);

routes.post('/cadastro', inicioController.cadastrar);
routes.post('/login', inicioController.login);
routes.post('/cadastro/conclusao', userController.store);

routes.get('/principal/lista', authMiddleware, principalController.groupProfissionais);

routes.post('/pesquisa/salvarCargo', pesquisaController.store);
routes.get('/pesquisa/cargo', pesquisaController.show);
routes.get('/pesquisa/cargos', pesquisaController.listAll);
routes.post('/pesquisa/apagarCargo', pesquisaController.destroy);

routes.post('/favorito/adicionar', authMiddleware, favoritoController.store);
routes.post('/favoritos/lista', authMiddleware, favoritoController.findAll);

routes.post('/historico/adicionar', authMiddleware, historicoController.store);
routes.post('/historico/lista', authMiddleware, historicoController.findAll);

routes.post('/usuario/deletarTodos', funcoesController.deleteAllUser);

///routes.use(authMiddleware);

module.exports = routes;
