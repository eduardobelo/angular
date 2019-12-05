export default class Veiculo{
    // Definição dos atributos (Características)
    protected modelo: string
    private velocidade: number = 0


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