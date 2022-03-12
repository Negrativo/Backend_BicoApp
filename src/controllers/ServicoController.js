const { findById } = require('../model/Usuario');
const User = require('../model/Usuario');

module.exports = {
    async solicitacaoServico(req, res) {
        try {
            console.log(req.body);
            return res.status(200).json(req.body);
        } catch(e) {
            res.status(500).send(e.message);
        }
    },

};
