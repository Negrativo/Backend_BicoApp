const Favoritos = require('../model/Favoritos');

module.exports = {
    async store(req, res) {
        try {
            const { usuario, favoritoId } = req.body;

            let favorito = await Favoritos.findOne({usuario, favoritoId});

            if (!favorito){
                favorito = await Favoritos.create({ usuario, favoritoId });
                return res.status(201).json(favorito);
            } else
                return res.status(409).json({error: 'Favorit exist'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    },

    async show(req, res) {
        try {
            const { usuario, favoritoId } = req.body;

            let favorito = await Favoritos.findOne({usuario, favoritoId});

            if (favorito){
                return res.status(200).json(favorito);
            } else
                return res.status(404).json({error: 'Not Found'});
        } catch(e) {
            res.status(500).send(e.message);
        }        
    },

    async update(req, res) {
        try {
            const { usuario, favoritoId } = req.body;

            let favorito = await Favoritos.findById(usuario);

            if (favorito) {
                await Favoritos.findByIdAndUpdate(usuario,{favoritoId});
                return res.status(200).json({ sucess : "Updation successfully"});
            } else
                return res.status(404).send({ error : 'Not Found'});

        } catch (e) {
            res.status(500).send(e.message);
        }
    },

    async destroy(req, res) {
        try {
            const { _id } = req.body;
            
            let favorito = await Favoritos.findById(_id);

            if (favorito) {
                await Favoritos.findByIdAndDelete(_id);
                return res.status(200).json({ sucess : "deleted successfully"});
            } else
                return res.status(404).send({ error : 'Not Found'});
        } catch (e) {
            res.status(500).send(e.message);
        }
    },

    async listAll(req, res) {
        try {
            let favoritos = await Favoritos.find();

            if (favoritos){
                return res.status(200).json(favoritos);
            } else
                return res.status(404).json({error: 'Not Found'});
        } catch(e) {
            res.status(500).send(e.message);
        }        
    },
};
