const mongoose = require('mongoose');

//Schema -> tabela de empresa no Banco
const FavoritoSchema = new mongoose.Schema({ 
    nnumeuser     : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});


module.exports = mongoose.model('Favorito',FavoritoSchema);