export interface DaoInterface{
    nomeTabela: string

    insert(object: any): boolean
    atualizar(object: any): boolean
    remover(id: number): any
    selecionar(id: number): any
    selecionarTodos():[any]
}