"use strict";
exports.__esModule = true;
var carro_1 = require("./carro");
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDao.prototype.insert = function (object) {
        console.log('Lógica de inserir');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('Lógica de atualizar');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('Lógica de remover');
        return new carro_1["default"]('', 4);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('Lógica de selecionar');
        return new carro_1["default"]('', 4);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('Lógica de selecionar todos');
        return [new carro_1["default"]('', 4)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
