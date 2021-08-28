const mongoose = require('mongoose');

const FavoritoSchema = new mongoose.Schema({ 
    usuario     : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        require: [true, 'Usario requerido']
    },
    empresa     : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Empresa',
        require: [true, 'Usario requerido']
    }

});


module.exports = mongoose.model('Favorito',FavoritoSchema);