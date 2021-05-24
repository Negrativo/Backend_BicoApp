/*
Controller recebe requisição e devolve uma resposta
*/ 

const User = require('../model/User');

/* 
    index = metodo de retorno de listagem de sessoes

    show = metodo de retorno de uma unica sessao

    Store = metodo de criar sessao

    Update = metodo de alterar sessao

    destroy = metodo de deletar sessao
*/

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição (para criação, edição)

module.exports = {
    async store(req, res) {
        const { nome } = req.body; //email em chaves pois o JS busca o valor nome da const no Body
        const { email } = req.body;
        const { senha } = req.body;

        let user = await User.findOne({ nome });

        if (!user){
            user = await User.create({ 
                nome,
                email,
                senha
            })
        }
        return res.json(user);
    },

    async show(req, res) {
        const { nome } = req.body; //email em chaves pois o JS busca o valor nome da const no Body
        const { email } = req.body;
        const { senha } = req.body;
        
        let user = await User.findOne(
            { nome  },
            { email },
            { senha }
        );

        return res.json(user);
    }
};
