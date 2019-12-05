import Carro from './carro'
import Concessionaria from './concessionaria'
import Pessoa from './pessoa'

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
// console.log(concessionaria.mostrarListaDeCarros())

// COMPRAR CARRO
let cliente = new Pessoa("Eduardo",'Corsa')
concessionaria.mostrarListaDeCarros().map( (carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
            cliente.comprarCarro(carro)
    }
})

if (cliente.dizerCarroQueTem()){
    console.log(cliente.dizerCarroQueTem());
}else{
    console.log("Não temos este carro na concessionária")
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

