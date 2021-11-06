const User = require('../model/Usuario');

module.exports = {
    async groupProfissionais(req, res) {
        try {
            const { _id } = req.query;
            let users = await User.find({ '_id': { $nin: _id } });
            
            if (users)
                return res.status(200).json(users);
            else
                return res.status(404).json({error: 'Not Found'});

        } catch(e) {
            res.status(500).send(e.message);
        }
    }
};
