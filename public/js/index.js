//FORMAS DE SELECIONAR ELEMENTOS DA PAGINA
let campoDeBusca = document.getElementById("campo-de-busca");

let btBuscar = document.querySelector(".btBuscar");

let main = document.querySelector("main");
console.log(main);

let pizzaDePepperoni={
    "id": 2,
    "nome": "Pepperoni",
    "ingredientes": [
        "mussarela",
        "pepperoni",
        "cebola"
    ],
    "preco": 48.55,
    "img": "/img/pepperoni.jpg",
    "destaque": false,
    "score": 24
};

function showPizza(pizza){
    let article=document.createElement("article");
article.innerHTML=`<img src="${pizza.img}" alt="${pizza.nome}></img>
                <h2>${pizza.nome}</h2>
                <span>R$ ${pizza.preco}</span>
                <a href="${pizza.id}">Ver mais</a>
                <button>Add+</button>`;
main.appendChild(article);
};

showPizza(pizzaDePepperoni);
