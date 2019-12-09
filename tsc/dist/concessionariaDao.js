"use strict";
exports.__esModule = true;
var concessionaria_1 = require("./concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.insert = function (object) {
        console.log('Lógica de inserir');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('Lógica de atualizar');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('Lógica de remover');
        return new concessionaria_1["default"]('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('Lógica de selecionar');
        return new concessionaria_1["default"]('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('Lógica de selecionar todos');
        return [new Array];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
