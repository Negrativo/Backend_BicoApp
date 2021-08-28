const Empresa = require("../model/Empresa");
const User = require("../model/Usuario");

module.exports = {


    async store(req, res) {
        try {
            const { filename } = req.file;

            const { nomeEmp, razaoSocial, nomeFantasia,
                    cnpjEmp, enderecoEmp, emailEmp, senhaEmp  } = req.body;

            let empresa = await Empresa.findOne({ nomeEmp, emailEmp });

            if (!empresa){
                empresa = await Empresa.create({ 
                    imagemPerfil: filename, nomeEmp, razaoSocial, nomeFantasia,
                    cnpjEmp, enderecoEmp, emailEmp, senhaEmp
                });
                return res.status(201).json(empresa);
            } else
                return res.status(404).json({error: 'Data exist'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    },

    async show(req, res) {
        try {
            const { filename } = req.file;

            const { nomeEmp, razaoSocial, nomeFantasia,
                    cnpjEmp, enderecoEmp, emailEmp, senhaEmp  } = req.body;

            let empresa = await Empresa.findOne({ nomeEmp, emailEmp });

            if (!empresa){
                empresa = await Empresa.create({ 
                    imagemPerfil: filename, nomeEmp, razaoSocial, nomeFantasia,
                    cnpjEmp, enderecoEmp, emailEmp, senhaEmp
                });
                return res.status(201).json(empresa);
            } else
                return res.status(404).json({error: 'Data exist'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    }, 

    async update(req, res) {
        try {
            const { _id,  nomeEmp, razaoSocial, nomeFantasia,
                    cnpjEmp, enderecoEmp, emailEmp, senhaEmp } = req.body;
            
            let empresa = await Empresa.findById(_id);

            if (empresa) {
                await Empresa.findByIdAndUpdate(_id,{nomeEmp, razaoSocial, nomeFantasia, 
                                                cnpjEmp, enderecoEmp, emailEmp, senhaEmp});
                return res.status(200).json({ sucess : "Updation successfully"});
            } else
                return res.status(404).send({ error : 'Not Found'});
        } catch (e) {
            res.status(500).send(e.message);
        }
    },

    async destroy(req, res) {
        try {
            const { _id, senhaEmp } = req.body;
            
            let empresa = await Empresa.findById(_id);

            if (empresa) {
                await Empresa.findByIdAndDelete(_id, { senhaEmp });
                return res.status(200).json({ sucess : "deleted successfully"});
            } else
                return res.status(404).send({ error : 'Not Found'});
        } catch (e) {
            res.status(500).send(e.message);
        }
    }
};