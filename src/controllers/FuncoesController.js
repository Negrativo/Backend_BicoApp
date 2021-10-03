const { findById } = require('../model/Usuario');
const User = require('../model/Usuario');

module.exports = {
    async deleteAllUser(req, res) {
        try {

            let user = await User.find();

            if (user){
                user = await User.deleteMany();
                return res.status(200).json({message: 'All user deleted!'});
            } else
                return res.status(409).json({error: 'No user exist'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    },

};
