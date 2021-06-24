const express = require("express");
const multer = require('multer');

const UserController = require('./controllers/UserController');
const EmpresaController = require('./controllers/EmpresaController');
const FavoritosController = require('./controllers/FavoritosController');
const LoginController = require('./controllers/LoginController');
const uploadConfig = require('./config/upload');

//GET, POST, PUT, DELETE
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/user/cadastro', upload.single('iperfuser'), UserController.store);
routes.get('/user/dados', upload.single('iperfuser'), UserController.show);

routes.post('/empresa/cadastro', upload.single('iperfempr'), EmpresaController.store );
routes.get('/empresa/dados', upload.single('iperfempr'), EmpresaController.show );

routes.get('/favoritos', FavoritosController.store );

routes.get('/login', LoginController.show );


module.exports = routes;