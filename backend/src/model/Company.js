const mongoose = require('mongoose');

//Schema -> tabela do user do Banco
const UserSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String
});


module.exports = mongoose.model('User',UserSchema);