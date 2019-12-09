import { DaoInterface } from './daoInterface'
import Carro from './carro'

export class CarroDao implements DaoInterface {
    nomeTabela: string = 'tb_carro'

    insert(object: Carro): boolean {
        console.log('Lógica de inserir')
        return true
    }
    atualizar(object: Carro): boolean {
        console.log('Lógica de atualizar')
        return true
    }
    remover(id: number): Carro {
        console.log('Lógica de remover')
        return  new Carro('',4)
    }
    selecionar(id: number): Carro {
        console.log('Lógica de selecionar')
        return  new Carro('',4)   
    }
    selecionarTodos():[any] {
        console.log('Lógica de selecionar todos')
        return  [new Carro('',4)]
    }
}