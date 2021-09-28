const mongoose = require('mongoose');

const CargosSchema = new mongoose.Schema({
    categoria       : String,
    nome            : String,
});

module.exports = mongoose.model('Cargos', CargosSchema);   