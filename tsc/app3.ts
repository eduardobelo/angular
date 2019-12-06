import Carro from './carro'
import Moto from './moto'
import Concessionaria from './concessionaria'

let carro = new Carro("Corsa",4)

let moto = new Moto()

let concessionaria = new Concessionaria('',[])
carro.acelerar()
carro.acelerar()

moto.acelerar()
moto.acelerar()

console.log(moto)
console.log(carro)
console.log(concessionaria.fornecerHorariosDeFuncionamento())