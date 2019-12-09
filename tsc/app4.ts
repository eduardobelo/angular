import { ConcessionariaDao } from './concessionariaDao'
import Concessionaria from './concessionaria'
import Pessoa from './pessoa'
import { PessoaDao } from './pessoaDao'

let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', []);

let dao2: PessoaDao = new PessoaDao()
let pessoa = new Pessoa('','');

dao.insert(concessionaria)
dao2.atualizar(pessoa)