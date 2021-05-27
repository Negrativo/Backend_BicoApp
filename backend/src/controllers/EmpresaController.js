const Empresa = require("../model/Empresa");

module.exports = {


    async store(req, res) {
        const { filename } = req.file;

        const { user_id } = req.headers;

        const { 
            crazaosoc,
            cnomefant,
            ccnpjempr,
            cendeempr,
            iperfempr,
            nnumeuser } = req.body;
 
        let empresa = await Empresa.findOne({ cnomefant, ccnpjempr });

        if (!empresa){
            empresa = await Empresa.create({ 
                crazaosoc,
                cnomefant,
                ccnpjempr,
                cendeempr,
                iperfempr,
                nnumeuser
            })
        }
        return res.json(empresa);
    },

    async show(req, res) {
        const { user_id } = req.headers;

        const { 
            crazaosoc,
            cnomefant,
            ccnpjempr,
            cendeempr,
            iperfempr,
            nnumeuser } = req.body;

        let empresa = await Empresa.findOne({ 
              crazaosoc,
              cnomefant,
              ccnpjempr,
              cendeempr,
              iperfempr,
              nnumeuser 
        });

        return res.json(empresa);
    } 

};