import {ConcessionariaInterface} from './concessionariaInterface'
import Carro from './carro'
export default class Concessionaria implements ConcessionariaInterface{
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
    public fornecerHorariosDeFuncionamento(): string {
        return 'De segunda a sexta, das 8h até as 18h.'
    }
}