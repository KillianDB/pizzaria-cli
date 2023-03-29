const path=require('path');

const PaginasController = {
    
    showIndex: (req, res)=>{
        return res.sendFile(path.resolve("views/index.html"));
    },

    showCarrinho: (req, res)=>{
        return res.sendFile(path.resolve("views/carrinho.html"));
    },

    showPerfil: (req, res)=>{
        return res.sendFile(path.resolve("views/perfil.html"));
    },

    showCadastro: (req, res)=>{
        return res.sendFile(path.resolve("views/cadastro.html"));
    }
}

module.exports = PaginasController;