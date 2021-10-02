const User = require('../model/Usuario');

module.exports = {
    async login(req, res) {
        try {
            const { email, senha } = req.body;
            console.log({ email, senha });
            let user = await User.findOne({ email , senha });
            if (user)
                return res.status(200).json(user);
            else
                return res.status(404).json({error: 'Usuario não encontrado'});

        } catch(e) {
            res.status(500).send(e.message);
        }
    },

    async cadastrar(req, res) {
        try {
            const { nome, email, senha } = req.body;
            console.log({nome, email, senha})
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
        console.log(req);
        try {
            const { imagemPerfil } = req.file;
            const { _id } = req.body;
            console.log(imagemPerfil, _id);
            let user = await User.findById(_id);
            
            if (user){
                await User.findByIdAndUpdate(_id,{nome, imagemPerfil, avaliacao, descricao});
                return res.status(200).json({ sucess : "Updation successfully"});
            }else
                return res.status(409).json({error: 'Usuario já cadastrado'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    }
};
