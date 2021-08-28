const User = require('../model/Usuario');

module.exports = {
    async groupProfissionais(req, res) {
        try {
            let users = await User.find();

            if (users)
                return res.status(200).json(users);
            else
                return res.status(404).json({error: 'Not Found'});

        } catch(e) {
            res.status(500).send(e.message);
        }
    }
};
