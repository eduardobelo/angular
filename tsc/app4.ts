
import { Dao } from './dao'
import Concessionaria from './concessionaria'
import Pessoa from './pessoa'
import Veiculo from './veiculo'
import Carro from './carro'
import Moto from './moto'


let concessionaria = new Concessionaria('', []);
let pessoa = new Pessoa('','');
let veiculo = new Veiculo()
let carro = new Carro('',1)
let moto = new Moto()

let dao: Dao<Concessionaria> = new Dao<Concessionaria>();
let dao2: Dao<Pessoa> = new Dao<Pessoa>();
let dao3: Dao<Veiculo> = new Dao<Veiculo>();
let dao4: Dao<Carro> = new Dao<Carro>();
let dao5: Dao<Moto> = new Dao<Moto>();

dao.inserir(concessionaria);
dao2.atualizar(pessoa);
dao3.remover(1);
dao4.selecionar(2);
dao5.selecionarTodos();





// let dao: ConcessionariaDao = new ConcessionariaDao()
// let concessionaria = new Concessionaria('', []);

// dao.inserir(concessionaria)

// let dao2: PessoaDao = new PessoaDao()
// let pessoa = new Pessoa('','');

// dao2.atualizar(pessoa)

// let dao3: CarroDao = new CarroDao()
// let carro = new Carro('Corsa',4)

// dao3.remover(434344)

// let dao4: MotoDao = new MotoDao()
// let moto = new Moto()

// dao4.selecionarTodos()