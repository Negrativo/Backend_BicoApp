const User = require('../model/User');
const Empresa = require("../model/Empresa");

module.exports = {

    //Recuperar senha
    async Update(req, res) {
        const { user_id } = req.headers;
        const { csenhusua } = req.body;

        let user = await User.findOne({ user_id });

        if (user) {
            return res.status(400).json("User não existe");
        }
    }

};