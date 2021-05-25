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
        const { cnomeuser  } = req.body; //nome do campo em chaves pois o JS busca o valor nome da const no Body
        const { cmailuser  } = req.body;
        const { csenhuser  } = req.body;
        const { ccpfuser   } = req.body;
        const { cendeuser  } = req.body;
        const { cnascuser  } = req.body;
        const { csexouser  } = req.body;

        let user = await User.findOne({ cnomeuser, ccpfuser });

        if (!user){
            user = await User.create({ 
                cnomeuser,
                cmailuser,
                csenhuser,
                ccpfuser,
                cendeuser,
                cnascuser,
                csexouser
            })
        }
        return res.json(user);
    },

    async show(req, res) {
        const { cnomeuser  } = req.body; //nome do campo em chaves pois o JS busca o valor nome da const no Body
        const { cmailuser  } = req.body;
        const { csenhuser  } = req.body;
        const { ccpfuser   } = req.body;
        const { cendeuser  } = req.body;
        const { cnascuser  } = req.body;
        const { csexouser  } = req.body;

        let user = await User.findOne(
            { cnomeuser  },
            { cmailuser  },
            { csenhuser  },
            { ccpfuser   },
            { cendeuser  },
            { cnascuser  },
            { csexouser  }
        );

        return res.json(user);
    }
};
