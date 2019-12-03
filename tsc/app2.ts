class Carro{
    // Definição dos atributos (Características)
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    //Construindo o objeto
    constructor(modelo:string, numeroDePortas:number){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    //Métodos do objeto (comportamento)
    public acelerar(): void {
        this.velocidade += 10
    }

    public parar(): void {
        this.velocidade = 0
    }
    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco:string
    private listaDeCarros: Carro[]
    
    constructor (endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco (): string{
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome:string, carroPreferido:string){
        this.nome = nome;
        this.carroPreferido = carroPreferido
    }

    public dizerNome ():string{
        return this.nome
    }
    public dizerCarroPreferido():string{
        return this.carroPreferido
    }
    public comprarCarro(carro: any): void{
        this.carro = carro
    }
    public dizerCarroQueTem(): any{
        return this.carro
    }
}

// Criar Carro
let carroA = new Carro('Corsa',4)
let carroB = new Carro('VW UP',2)
let carroC = new Carro('Tempra',4)


// Montar Lista de Carro - Informando que o array seja do "Tipo" Carro, ou seja, só receberá objetos do tipo Carro.
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

// Maneira diferente de chamar o Array
// let lista: Carro[] = [carroA, carroB, carroC]
let concessionaria = new Concessionaria("Rua Capitão Rebelinho", listaDeCarros)

//Exibir a lista de carros
console.log(concessionaria.mostrarListaDeCarros())

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

