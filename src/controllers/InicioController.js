const User = require('../model/Usuario');

module.exports = {
    async login(req, res) {
        try {
            const { email, senha } = req.body;

            let user = await User.findOne({ email , senha });
            if (user)
                return res.status(200).json(user);
            else
                return res.status(404).json({error: 'Not Found'});

        } catch(e) {
            res.status(500).send(e.message);
        }
    },

    async cadastrar(req, res) {
        try {
            const { nome, email, senha } = req.body;

            let user = await User.findOne({ email , senha });
            if (user){
                user = await User.create({ nome, email, senha });
                return res.status(201).json(user);
            }else
                return res.status(404).json({error: 'Not Found'});

        } catch(e) {
            res.status(500).send(e.message);
        }
    }
};
