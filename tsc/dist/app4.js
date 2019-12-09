"use strict";
exports.__esModule = true;
var concessionariaDao_1 = require("./concessionariaDao");
var concessionaria_1 = require("./concessionaria");
var dao = new concessionariaDao_1.ConcessionariaDao();
var concessionaria = new concessionaria_1["default"]('', []);
dao.insert(concessionaria);
