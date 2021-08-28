const mongoose = require('mongoose');

const EmpresaSchema = new mongoose.Schema({
    nomeEmp         : {
        type: String,
        require: [true, 'Nome obrigatorio']
    },
    razaoSocial     : String,
    nomeFantasia    : String,
    cnpjEmp         : String,
    enderecoEmp     : String,
    imagemPerfil    : String,
    emailEmp        : String,
    senhaEmp        : String
});

module.exports = mongoose.model('Empresa', EmpresaSchema);   