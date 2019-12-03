let message: string = "teset msg";
console.log(message);

let epsode: number = 4;

let nome
nome = "eduardo";
nome = 10;

console.log("meu nome é",nome)


function livros(name: string):void{
    console.log('Livro com nome: ' + name);
}
livros('O senhor dos anéis');

let maioridade = function(idade: number): boolean{
    return idade >= 18
}
console.log(maioridade(30));

function media(maiorNumero:number, menorNumero:number = 1):number{
    return (maiorNumero + menorNumero)/2;
}
console.log('A Média é: '+ media(20));

class Carros {
    constructor(public NumRodas: number){}
    corsa(){
        console.log(`O corsa tem :${this.NumRodas} rodas`);
    }
}

let rodas = new Carros(4);
rodas.corsa();

class Robo{
    nome:string;
    constructor(nome: string){
        this.nome = nome;
    }

    andar(){
        console.log(this.nome + ' Está andando');
    }
    falar(){
        console.log(this.nome + ' Está falando');
    }
    parar(){
        console.log(this.nome + ' Está parado');
    }
}

var AcaoRobo = new Robo('Ted');

AcaoRobo.andar();
AcaoRobo.falar();
AcaoRobo.parar();

