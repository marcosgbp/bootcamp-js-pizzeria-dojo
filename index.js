let pizza = {
    tipoCorteza:"",
    tipoSalsa:"",
    quesos:[],
    salsas:[]
}

function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas){
    pizza.tipoCorteza=tipoCorteza;
    pizza.tipoSalsa=tipoSalsa;
    pizza.quesos=quesos;
    pizza.salsas=salsas;

    return pizza
}

//Pedidos de pizzas
let pizza1 = pizzaOven("Estilo Chicago", "Tradicional", ["mozzarella"], ["pepperoni", "salchicha"])
let pizza2 = pizzaOven("Lanzada a mano", "Marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"])

console.log(pizza1);
console.log(pizza2);

//Pedido random
let tipoCorteza=["Estilo New York", "Estilo Detroit", "Sin Gluten"];
let tipoSalsa=["Napolitana", "Carnivora", "Alemana"];
let quesos=["Cheddar", "Mozzarella", "Parmesano"];
let salsas=["Aceitunas", "Tomate", "Cebolla Carmelizada"];
let pizzaRandon1 = pizzaOven(
                tipoCorteza[Math.floor(Math.random()* 3)],
                tipoSalsa[Math.floor(Math.random()* 3)],
                quesos[Math.floor(Math.random()* 3)],
                salsas[Math.floor(Math.random()* 3)]
);
let pizzaRandon2 = pizzaOven(
    tipoCorteza[Math.floor(Math.random()* 3)],
    tipoSalsa[Math.floor(Math.random()* 3)],
    quesos[Math.floor(Math.random()* 3)],
    salsas[Math.floor(Math.random()* 3)]
);
console.log(pizzaRandon1);
console.log(pizzaRandon2);