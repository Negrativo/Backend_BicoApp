const Cargos = require("../model/Cargos");

module.exports = {

    async store(req, res) {
        try {
            const { categoria, nome  } = req.body;

            let cargo = await Cargos.findOne({ categoria, nome });

            if (!cargo){
                cargo = await Cargos.create({ categoria, nome });
                return res.status(201).json(cargo);
            } else
                return res.status(404).json({error: 'Data exist'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    },

    async show(req, res) {
        try {
            const { categoria, nome  } = req.body;

            let cargo = await Cargos.findOne({ categoria, nome });

            if (cargo){
                return res.status(200).json(cargo);
            } else
                return res.status(404).json({error: 'Not Found'});
        } catch(e) {
            res.status(500).send(e.message);
        }
    }, 

    async update(req, res) {
        try {
            const { _id  } = req.body;
            
            let cargo = await Cargos.findById(_id);

            if (cargo) {
                await Cargos.findByIdAndUpdate(_id,{categoria, nome});
                return res.status(200).json({ sucess : "Updation successfully"});
            } else
                return res.status(404).send({ error : 'Not Found'});
        } catch (e) {
            res.status(500).send(e.message);
        }
    },

    async destroy(req, res) {
        try {
            const { _id } = req.body;
            
            let cargo = await Cargos.findById(_id);

            if (cargo) {
                await Cargos.findByIdAndDelete(_id);
                return res.status(200).json({ sucess : "deleted successfully"});
            } else
                return res.status(404).send({ error : 'Not Found'});
        } catch (e) {
            res.status(500).send(e.message);
        }
    },

    async listAll(req, res) {
        try {
            let cargos = await Cargos.find();

            if (cargos) {
                return res.status(200).json(cargos);
            } else
                return res.status(404).send({ error : 'Not Found'});
        } catch (e) {
            res.status(500).send(e.message);
        }
    }
};