"use strict";
exports.__esModule = true;
var pessoa_1 = require("./pessoa");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.insert = function (object) {
        console.log('Lógica de inserir');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('Lógica de atualizar');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('Lógica de remover');
        return new pessoa_1["default"]('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('Lógica de selecionar');
        return new pessoa_1["default"]('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('Lógica de selecionar todos');
        return [new pessoa_1["default"]('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
