const express = require("express");
const multer = require('multer');

const authMiddleware = require("./middlewares/auth");

const userController = require('./controllers/UserController');
const inicioController = require('./controllers/InicioController');
const pesquisaController = require('./controllers/PesquisaController');
const favoritoController = require('./controllers/FavoritosController');
const funcoesController = require('./controllers/FuncoesController');
const historicoController = require('./controllers/HistoricoController');
const servicoController = require('./controllers/ServicoController');

const routes = express.Router();
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

routes.post('/usuario/cadastro', upload.single('imagemPerfil'), userController.store);
routes.post('/usuario/alterarDados', authMiddleware, userController.update);
routes.post('/usuario/deletar', authMiddleware, userController.destroy);
routes.post('/usuario/dadosSelecionado', authMiddleware, userController.findById);
routes.get('/usuario/dados', authMiddleware, userController.show);

routes.post('/cadastro', inicioController.cadastrar);
routes.post('/login', inicioController.login);
routes.post('/cadastro/conclusao', userController.store);

routes.post('/pesquisa/salvarCargo', pesquisaController.store);
routes.post('/pesquisa/apagarCargo', pesquisaController.destroy);
routes.get('/pesquisa/cargo', pesquisaController.show);
routes.get('/pesquisa/cargos', pesquisaController.listAll);

routes.post('/favorito/adicionar', authMiddleware, favoritoController.store);
routes.post('/favoritos/lista', authMiddleware, favoritoController.findAll);

routes.post('/historico/adicionar', authMiddleware, historicoController.store);
routes.post('/historico/lista', authMiddleware, historicoController.findAll);

routes.post('/servicos/solicitar', servicoController.solicitacaoServico);

routes.post('/usuario/deletarTodos', funcoesController.deleteAllUser);

module.exports = routes;
