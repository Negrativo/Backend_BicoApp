const User = require('../model/Usuario');

module.exports = {
    async store(req, res) {
        try {
            const { filename } = req.file;

            const { nome, email, senha, 
                    endereco, avaliacao, cpfuser } = req.body;

            let user = await User.findOne({ nome, email });

            if (!user){
                user = await User.create({ 
                    imagemPerfil: filename, nome, email,
                    senha, endereco, avaliacao, cpfuser
                });
                return res.status(201).json(user);
            } else
                return res.status(409).json({error: 'User exist'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    },

    async show(req, res) {
        try {
            const { nome, email, senha, 
                    endereco, avaliacao, cpfuser } = req.body;

            let user = await User.findOne({ 
                                nome, email, senha, 
                                endereco, avaliacao, cpfuser });

            if (user){
                return res.status(200).json(user);
            } else
                return res.status(404).json({error: 'Not Found'});
        } catch(e) {
            res.status(500).send(e.message);
        }        
    },

    async update(req, res) {
        try {
            const { _id,  nome, email,senha, 
                    endereco, avaliacao,cpfuser } = req.body;
            
            let user = await User.findById(_id);

            if (user) {
                await User.findByIdAndUpdate(_id,{nome, email, senha, endereco, avaliacao, cpfuser});
                return res.status(200).json({ sucess : "Updation successfully"});
            } else
                return res.status(404).send({ error : 'Not Found'});

        } catch (e) {
            res.status(500).send(e.message);
        }
    },

    async destroy(req, res) {
        try {
            const { _id, senha } = req.body;
            
            let user = await User.findById(_id);

            if (user) {
                await User.findByIdAndDelete(_id, { senha });
                return res.status(200).json({ sucess : "deleted successfully"});
            } else
                return res.status(404).send({ error : 'Not Found'});
        } catch (e) {
            res.status(500).send(e.message);
        }
    }
};
