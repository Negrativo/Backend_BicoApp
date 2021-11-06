const mongoose = require('mongoose');

const HistoricoSchema = new mongoose.Schema({ 
    usuarioLogado       : {
        type: String,
        required: [true, 'Usuario obrigatorio']
    },
    usuarioRequisitado  : {
        type: String,
        required: [true, 'Historico obrigatorio']
    },
    data: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Historico', HistoricoSchema);