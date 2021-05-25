const Empresa = require("../model/Empresa");

module.exports = {


    async store(req, res) {
        const { crazaosoc  } = req.body; //nome do campo em chaves pois o JS busca o valor nome da const no Body
        const { cnomefant  } = req.body;
        const { ccnpjempr  } = req.body;
        const { cendeempr  } = req.body;

        let empresa = await Empresa.findOne({ cnomefant, ccnpjempr });

        if (!empresa){
            empresa = await Empresa.create({ 
                crazaosoc,
                cnomefant,
                ccnpjempr,
                cendeempr
            })
        }
        return res.json(empresa);
    },

    async show(req, res) {
        const { crazaosoc } = req.body; //nome do campo em chaves pois o JS busca o valor nome da const no Body
        const { cnomefant } = req.body;
        const { ccnpjempr } = req.body;
        const { cendeempr } = req.body;

        let empresa = await Empresa.findOne({ 
              crazaosoc,
              cnomefant,
              ccnpjempr,
              cendeempr 
        });

        return res.json(empresa);
    } 

};