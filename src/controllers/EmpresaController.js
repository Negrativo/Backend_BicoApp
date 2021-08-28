const Empresa = require("../model/Empresa");
const User = require("../model/Usuario");

module.exports = {


    async store(req, res) {
        const { filename } = req.file;
        const { user_id } = req.headers;

        const user = await User.findById(user_id)

        if (!user) {
            return res.status(400).json("User não existe");
        }

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
                iperfempr: filename,
                nnumeuser: user_id
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