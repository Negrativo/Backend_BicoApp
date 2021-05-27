const express = require("express");
const multer = require('multer');

const SessionController = require('./controllers/UserController');
const EmpresaController = require('./controllers/EmpresaController');
const uploadConfig = require('./config/upload');

//GET, POST, PUT, DELETE
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/user/cadastro', upload.single('iperfuser'), SessionController.store);
routes.get('/user/dados', upload.single('iperfuser'), SessionController.show);

routes.post('/empresa/cadastro', upload.single('iperfempr'), EmpresaController.store );
routes.get('/empresa/dados', upload.single('iperfempr'), EmpresaController.show );

routes.post('/imagem', upload.single('iperfempr'), )



module.exports = routes;