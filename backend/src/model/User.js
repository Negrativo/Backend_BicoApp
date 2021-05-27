const mongoose = require('mongoose');

//Schema -> tabela do user do Banco
const UserSchema = new mongoose.Schema({
    cnomeuser     : String,
    cmailuser     : String,
    csenhuser     : String,
    ccpfuser      : String,
    cendeuser     : String,
    dnascuser     : String,
    csexouser     : String,
    iperfuser     : String,
    npontuser     : Number
});


module.exports = mongoose.model('User',UserSchema);