const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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
        default: 0.0
    },
    favoritosIds    : {
        type: [String],
        default: []
    },
    empregos        : {
        type: [String],
        default: []
    },
    telefone        : {
        type: Number,
        default: 0
    } 
});

UsuarioSchema.methods = {
   
    compareHash(hash) {
        return bcrypt.compare(hash, this.senha);
    },
    
    generateToken() {
        return jwt.sign({ _id: this._id }, "secret", {
          expiresIn: 864000
        });
    }
};


module.exports = mongoose.model('Usuario', UsuarioSchema);