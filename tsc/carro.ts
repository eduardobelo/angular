import Veiculo from './veiculo'
export default class Carro extends Veiculo{
    // Definição dos atributos (Características)
    private numeroDePortas: number

    //Construindo o objeto
    constructor(modelo:string, numeroDePortas:number){
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }
}