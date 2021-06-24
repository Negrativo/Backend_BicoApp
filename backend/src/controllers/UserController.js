/*
Controller recebe requisição e devolve uma resposta
*/ 

const User = require('../model/User');

/* 
    index = metodo de retorno de listagem

    show = metodo de retorno de uma unica 

    Store = metodo de criar 

    Update = metodo de alterar 

    destroy = metodo de deletar 
*/

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição (para criação, edição)

module.exports = {
    async store(req, res) {
        
         //nome do campo em chaves pois o JS busca o valor nome da const no Body
        const {
            cnomeuser,            
            cmailuser,
            csenhuser,
            cendeuser,
            npontuser,
            cnascuser,
            csexouser,
            ccpfuser } = req.body;

        let user = await User.findOne({ cnomeuser, cmailuser });

        if (!user){
            user = await User.create({ 
                iperfuser: req.file,               
                cnomeuser,
                cmailuser,
                csenhuser,
                cendeuser,
                npontuser,
                cnascuser,
                csexouser,
                ccpfuser
            })
        }
        return res.json(user);
    },

    async show(req, res) {
        
        const { 
            cnomeuser,
            iperfuser,
            cmailuser,
            csenhuser,
            cendeuser,
            npontuser,
            cnascuser,
            csexouser,
            ccpfuser } = req.body;
     
        let user = await User.findOne(
            {cnomeuser ,
            cmailuser ,
            csenhuser ,
            ccpfuser  ,
            cendeuser ,
            cnascuser ,
            csexouser ,
            iperfuser ,
            npontuser }
        );

        if(user){
            return res.json(user);
        }else{
            return res.status(400).send({secess: false, message: 'Usuario não localizado'});
        }

    },

};
