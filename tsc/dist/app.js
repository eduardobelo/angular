var message = "teset msg";
console.log(message);
var epsode = 4;
var nome;
nome = "eduardo";
nome = 10;
console.log("meu nome é", nome);
function livros(name) {
    console.log('Livro com nome: ' + name);
}
livros('O senhor dos anéis');
var maioridade = function (idade) {
    return idade >= 18;
};
console.log(maioridade(30));
function media(maiorNumero, menorNumero) {
    if (menorNumero === void 0) { menorNumero = 1; }
    return (maiorNumero + menorNumero) / 2;
}
console.log('A Média é: ' + media(20));
var Carros = /** @class */ (function () {
    function Carros(NumRodas) {
        this.NumRodas = NumRodas;
    }
    Carros.prototype.corsa = function () {
        console.log("O corsa tem :" + this.NumRodas + " rodas");
    };
    return Carros;
}());
var rodas = new Carros(4);
rodas.corsa();
var Robo = /** @class */ (function () {
    function Robo(nome) {
        this.nome = nome;
    }
    Robo.prototype.andar = function () {
        console.log(this.nome + ' Está andando');
    };
    Robo.prototype.falar = function () {
        console.log(this.nome + ' Está falando');
    };
    Robo.prototype.parar = function () {
        console.log(this.nome + ' Está parado');
    };
    return Robo;
}());
var AcaoRobo = new Robo('Ted');
AcaoRobo.andar();
AcaoRobo.falar();
AcaoRobo.parar();
