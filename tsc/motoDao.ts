import { DaoInterface } from './daoInterface'
import Moto from './moto'

export class MotoDao implements DaoInterface {
    nomeTabela: string = 'tb_moto'

    insert(object: Moto): boolean {
        console.log('Lógica de inserir')
        return true
    }
    atualizar(object: Moto): boolean {
        console.log('Lógica de atualizar')
        return true
    }
    remover(id: number): Moto {
        console.log('Lógica de remover')
        return  new Moto()
    }
    selecionar(id: number): Moto {
        console.log('Lógica de selecionar')
        return  new Moto()   
    }
    selecionarTodos():[any] {
        console.log('Lógica de selecionar todos')
        return  [new Moto()]
    }
}