const Empresa = require("../model/Empresa");

module.exports = {
    
    async show(req, res) {
        const { empr_id } = req.headers;

        let empresas = await Empresa.findOne({ empr_id });
    
        return res.json(empresas);
    }, 

    

};