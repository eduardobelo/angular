"use strict";
exports.__esModule = true;
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('Lógica de inserir');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('Lógica de atualizar');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('Lógica de remover');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('Lógica de selecionar');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('Lógica de selecionar todos');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
