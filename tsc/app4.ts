import { ConcessionariaDao } from './concessionariaDao'
import Concessionaria from './concessionaria'
import Pessoa from './pessoa'
import { PessoaDao } from './pessoaDao'
import { CarroDao } from './carroDao'
import Carro from './carro'
import { MotoDao } from './motoDao'
import Moto from './moto'

let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', []);

dao.insert(concessionaria)

let dao2: PessoaDao = new PessoaDao()
let pessoa = new Pessoa('','');

dao2.atualizar(pessoa)

let dao3: CarroDao = new CarroDao()
let carro = new Carro('Corsa',4)

dao3.remover(434344)

let dao4: MotoDao = new MotoDao()
let moto = new Moto()

dao4.selecionarTodos()