import { Carro } from './carro'
export default class Concessionaria {
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