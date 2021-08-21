const mongoose = require('mongoose');

//Schema -> tabela de empresa no Banco
const EmprSchema = new mongoose.Schema({
    nomeEmp         : String,
    razaoSocial     : String,
    nomeFantasia    : String,
    cnpjEmp         : String,
    enderecoEmp     : String,
    imagemPerfil    : String,
    emailEmp        : String,
    senhaProf       : String
});


module.exports = mongoose.model('Empresa',EmprSchema);