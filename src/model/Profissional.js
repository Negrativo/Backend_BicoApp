const mongoose = require('mongoose');

//Schema -> tabela do user do Banco
const ProfissionalSchema = new mongoose.Schema({
    nomeProf        : String,
    emailProf       : String,
    senhaProf       : String,
    cpfProf         : String,
    imagemPerfil    : String,
    avaliacao       : Number,
    favoritos       : [String]
});


module.exports = mongoose.model('profissional',ProfissionalSchema);