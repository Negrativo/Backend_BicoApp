const mongoose = require('mongoose');

//Schema -> tabela de empresa no Banco
const EmprSchema = new mongoose.Schema({
    iperfempr     : String,
    crazaosoc     : String,
    cnomefant     : String,
    ccnpjempr     : String,
    cendeempr     : String,    
    nnumeuser     : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});


module.exports = mongoose.model('Empresa',EmprSchema);