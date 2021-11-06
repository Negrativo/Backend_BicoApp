const Usuario = require('../model/Usuario');
const Historico = require('../model/Historico');

module.exports = {
    async store(req, res) {
        try {
            const { _id, historicoId } = req.body;

            let userLogado = await Usuario.findById(_id);

            let userRequisitado = await Usuario.findById(historicoId);

            if (userLogado && userRequisitado){
                await Historico.create({ usuarioLogado: _id, usuarioRequisitado: historicoId, data: Date("<YYYY-mm-ddTHH:MM:ss>") });
                return res.status(201).json({message: 'Historico registrado com sucesso.'});
            } else
                return res.status(409).json({error: 'Usuario não localizado'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    },

    async findAll(req, res) {
        try {
            const { _id } = req.body;
            
            const historicoRegistrado = await Historico.find({ 'usuarioLogado': { $in: _id } });

            const historicoUsuario = historicoRegistrado.map(historico => historico.usuarioRequisitado);

            const usuariosHistorico = await Usuario.find({ '_id': { $in: historicoUsuario } });

            if (usuariosHistorico.length > 0)
                return res.status(201).json(usuariosHistorico)
            else
                return res.status(409).json({error: 'Nao existe historico'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    },
};
