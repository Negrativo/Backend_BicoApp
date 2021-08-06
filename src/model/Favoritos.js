const mongoose = require('mongoose');
const Empresa = require("../model/Empresa");

//Schema -> tabela de empresa no Banco
const FavoritoSchema = new mongoose.Schema({ 
    nnumeuser     : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    nnumeempr     : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Empresa'
    }

});


module.exports = mongoose.model('Favorito',FavoritoSchema);