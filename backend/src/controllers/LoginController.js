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
    
    async show(req, res) {
        
        const { cmailuser, csenhuser } = req.body;

        let user = await User.findOne({ cmailuser }).select('+csenhuser');

        if(user){
            return res.json(user);
        }else{
            return res.json({secess: false, message: 'Usuario não localizado'});
        }   
    },

};
