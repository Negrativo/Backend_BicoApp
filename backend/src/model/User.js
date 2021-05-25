const mongoose = require('mongoose');

//Schema -> tabela do user do Banco
const UserSchema = new mongoose.Schema({
    cnomeuser     : String,
    cemaiuser     : String,
    csenhuser     : String,
    ccpfuser      : String,
    cendeuser     : String,
    dnascuser     : String,
    csexouser     : String,
    npontuser     : Double
});


module.exports = mongoose.model('User',UserSchema);