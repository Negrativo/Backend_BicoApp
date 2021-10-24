const Usuario = require('../model/Usuario');

module.exports = {
    async store(req, res) {
        try {
            const { _id, favoritoId } = req.body;

            let user = await Usuario.findById(_id);

            const favoritos = user.favoritosIds;
            let Favoritado = favoritos.includes(favoritoId);

            if (Favoritado == false) {
                favoritos.push(favoritoId);
                Favoritado = true;
            } else {
                favoritos.splice(favoritos.indexOf(favoritoId), 1);
                Favoritado = false;
            }

            if (user){
                user = await Usuario.findOneAndUpdate({_id: _id}, { favoritosIds: favoritos });
                return res.status(201).json({Favoritado: Favoritado});
            } else
                return res.status(409).json({error: 'User not exist'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    },

    async show(req, res) {
        try {
            const { _id, favoritoId } = req.body;

            let user = await Usuario.findById(_id);

            const favoritos = user.favoritosIds;
            let Favoritado = favoritos.includes(favoritoId);

            if (user){
                return res.status(201).json({Favoritado: Favoritado});
            } else
                return res.status(409).json({error: 'Favorit exist'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    },

    async findAll(req, res) {
        try {
            const { _id } = req.body;

            const userLogado = await Usuario.findById(_id);
            const favoritos = userLogado.favoritosIds;

            if (favoritos.length > 0) {
                const userFavoritados = await Usuario.find({ '_id': { $in: favoritos} });
            
                if (userFavoritados){
                    return res.status(201).json(userFavoritados);
                } else
                    return res.status(409).json({error: 'Usuarios nao localizados'});
            } else
                return res.status(409).json({error: 'Nao existe favoritos'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    },
};
