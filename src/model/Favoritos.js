const mongoose = require('mongoose');

const FavoritoSchema = new mongoose.Schema({ 
    usuario     : {
        type: String,
        required: [true, 'Usuario obrigatorio']
    },
    favoritosIds  : {
        type: [String],
        required: [true, 'Favorito obrigatorio']
    }
});


module.exports = mongoose.model('Favorito',FavoritoSchema);