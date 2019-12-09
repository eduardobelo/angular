import { DaoInterface } from './daoInterface'
import Concessionaria from './concessionaria'

export class ConcessionariaDao implements DaoInterface {
    nomeTabela: string = 'tb_concessionaria'

    insert(object: Concessionaria): boolean {
        console.log('Lógica de inserir')
        return true
    }
    atualizar(object: Concessionaria): boolean {
        console.log('Lógica de atualizar')
        return true
    }
    remover(id: number): Concessionaria {
        console.log('Lógica de remover')
        return  new Concessionaria('', [])
    }
    selecionar(id: number): Concessionaria {
        console.log('Lógica de selecionar')
        return  new Concessionaria('', [])
    }
    selecionarTodos():[any] {
        console.log('Lógica de selecionar todos')
        return  [new Concessionaria('', [])]
    }
}