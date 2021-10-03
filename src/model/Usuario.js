const mongoose = require('mongoose');

//Schema -> tabela do user do Banco
const UsuarioSchema = new mongoose.Schema({
    nome  : {
        type: String,
        max:  50,
        required: [true, 'Nome obrigatorio']
    },
    email : {
        type: String,
        required: [true, 'E-mail obrigatorio']
    },
    senha : {
        type: String,
        required: [true, 'senha obrigatoria'],
        max:  20,
        min:  5
    },
    descricao       : {
        type: String,
        default: '',
    },
    fotoPerfil      : {
        type: String,
        default: ''
    },
    avaliacao       : {
        type: Number,
        default: ''
    },
    favoritosIds    : {
        type: [String],
        default: ['']
    },
    empregos        : {
        type: [String],
        default: ['']
    }, 
});


module.exports = mongoose.model('Usuario', UsuarioSchema);