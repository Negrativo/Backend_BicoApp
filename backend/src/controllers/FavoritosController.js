const Empresa = require("../model/Empresa");
const Favoritos = require("../model/Favoritos");

module.exports = {

    async destroy(req, res) {
        const { user_id, empr_id} = req.headers;

        const empresas = await Favoritos.find( { 
            user: user_id,
            empr: empr_id
        });
        
        return res.json(empresas);
    },

    async show(req, res) {
        const { user_id } = req.headers;

        let favorito = await Favoritos.findOne({ user_id });
    
        return res.json(favorito);
    }, 

    async store(req, res) {
        const { user_id } = req.headers;
        const { empr_id } = req.headers;

        let favorito = await Favoritos.findOne({ user_id, empr_id });
        
        if (!favorito){ 
            favorito = await Favoritos.create({ user_id, empr_id});
        };
        
        await Favoritos.populate('empr').populate('user').execPopulate();

        return res.json(favorito);
    } 

};