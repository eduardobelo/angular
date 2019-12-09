"use strict";
exports.__esModule = true;
var moto_1 = require("./moto");
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'tb_moto';
    }
    MotoDao.prototype.insert = function (object) {
        console.log('Lógica de inserir');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        console.log('Lógica de atualizar');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        console.log('Lógica de remover');
        return new moto_1["default"]();
    };
    MotoDao.prototype.selecionar = function (id) {
        console.log('Lógica de selecionar');
        return new moto_1["default"]();
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('Lógica de selecionar todos');
        return [new moto_1["default"]()];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
