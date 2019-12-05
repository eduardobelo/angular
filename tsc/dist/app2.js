"use strict";
exports.__esModule = true;
var carro_1 = require("./carro");
var concessionaria_1 = require("./concessionaria");
var pessoa_1 = require("./pessoa");
// Criar Carro
var carroA = new carro_1["default"]('Corsa', 4);
var carroB = new carro_1["default"]('VW UP', 2);
var carroC = new carro_1["default"]('Tempra', 4);
// Montar Lista de Carro - Informando que o array seja do "Tipo" Carro, ou seja, só receberá objetos do tipo Carro.
var listaDeCarros = [carroA, carroB, carroC];
// Maneira diferente de chamar o Array
// let lista: Carro[] = [carroA, carroB, carroC]
var concessionaria = new concessionaria_1["default"]("Rua Capitão Rebelinho", listaDeCarros);
//Exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros())
// COMPRAR CARRO
var cliente = new pessoa_1["default"]("Eduardo", 'Corsa');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
if (cliente.dizerCarroQueTem()) {
    console.log(cliente.dizerCarroQueTem());
}
else {
    console.log("Não temos este carro na concessionária");
}
// let pessoa = new Pessoa("Eduardo", "VW UP")
// console.log(pessoa.dizerCarroPreferido())
// let concessionaria = new Concessionaria('Rua Capitão Rebelinho');
// console.log(concessionaria)
// let carroA = new Carro("VW UP", 4);
// console.log(carroA)
// carroA.acelerar()
// carroA.acelerar()
// console.log(carroA)
// carroA.parar()
// console.log(carroA)
