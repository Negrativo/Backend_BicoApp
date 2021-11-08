const Usuario = require('../model/Usuario');

module.exports = {
    async store(req, res) {
        try {
            const { _id, favoritos } = req.body;

            let user = await Usuario.findById(_id);

            if (user){
                user = await Usuario.updateOne({_id: _id}, { favoritosIds: favoritos });
                return res.status(201).json(user);
            } else
                return res.status(409).json({error: 'User not exist'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    },

    async findAll(req, res) {
        try {
            const { favoritosIds } = req.body;

            const userFavoritados = await Usuario.find({ '_id': { $in: favoritosIds} });
        
            if (userFavoritados.length > 0){
                return res.status(201).json(userFavoritados);
            } else
                return res.status(409).json({error: 'Usuarios nao localizados'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    },
};
