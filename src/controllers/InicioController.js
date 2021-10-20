const User = require('../model/Usuario');

module.exports = {
    async login(req, res) {
        try {
            const { email, senha } = req.body;

            let user = await User.findOne({ email, senha });

            if (!user) {
                return res.status(400).json({ error: "Usuário não encontrado" });
            }
        
            return res.status(200).json({
            user,
            token: user.generateToken()
            });

        } catch(e) {
            res.status(500).send(e.message);
        }
    },

    async cadastrar(req, res) {
        try {
            const { nome, email, senha } = req.body;

            let user = await User.findOne({ nome, email , senha });
            
            if (!user){
                user = await User.create({ nome, email, senha });
                return res.status(201).json(user);
            }else
                return res.status(409).json({error: 'Usuario já cadastrado'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    },

    async finalizarCadastro(req, res) {
        try {
            const { _id, fotoPerfil, empregos } = req.body;
            let user = await User.findById(_id);
            
            if (user){
                await User.findByIdAndUpdate(_id,{ imagemPerfil, fotoPerfil, empregos });
                return res.status(200).json({ sucess : "Updation successfully"});
            }else
                return res.status(409).json({error: 'Usuario já cadastrado'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    }
};
