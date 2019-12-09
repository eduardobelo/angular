"use strict";
exports.__esModule = true;
var dao_1 = require("./dao");
var concessionaria_1 = require("./concessionaria");
var pessoa_1 = require("./pessoa");
var veiculo_1 = require("./veiculo");
var carro_1 = require("./carro");
var moto_1 = require("./moto");
var concessionaria = new concessionaria_1["default"]('', []);
var pessoa = new pessoa_1["default"]('', '');
var veiculo = new veiculo_1["default"]();
var carro = new carro_1["default"]('', 1);
var moto = new moto_1["default"]();
var dao = new dao_1.Dao();
var dao2 = new dao_1.Dao();
var dao3 = new dao_1.Dao();
var dao4 = new dao_1.Dao();
var dao5 = new dao_1.Dao();
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
