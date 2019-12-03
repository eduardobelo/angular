var Carro = /** @class */ (function () {
    //Construindo o objeto
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    //Métodos do objeto (comportamento)
    Carro.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
// Criar Carro
var carroA = new Carro('Corsa', 4);
var carroB = new Carro('VW UP', 2);
var carroC = new Carro('Tempra', 4);
// Montar Lista de Carro - Informando que o array seja do "Tipo" Carro, ou seja, só receberá objetos do tipo Carro.
var listaDeCarros = [carroA, carroB, carroC];
// Maneira diferente de chamar o Array
// let lista: Carro[] = [carroA, carroB, carroC]
var concessionaria = new Concessionaria("Rua Capitão Rebelinho", listaDeCarros);
//Exibir a lista de carros
console.log(concessionaria.mostrarListaDeCarros());
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
