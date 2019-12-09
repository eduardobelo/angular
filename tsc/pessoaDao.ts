import { DaoInterface } from './daoInterface'
import Pessoa from './pessoa'

export class PessoaDao implements DaoInterface {
    nomeTabela: string = 'tb_pessoa'

    insert(object: Pessoa): boolean {
        console.log('Lógica de inserir')
        return true
    }
    atualizar(object: Pessoa): boolean {
        console.log('Lógica de atualizar')
        return true
    }
    remover(id: number): Pessoa {
        console.log('Lógica de remover')
        return  new Pessoa('','')
    }
    selecionar(id: number): Pessoa {
        console.log('Lógica de selecionar')
        return  new Pessoa('','')   
    }
    selecionarTodos():[any] {
        console.log('Lógica de selecionar todos')
        return  [new Pessoa('','')]
    }
}