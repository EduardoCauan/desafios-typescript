"use strict";
var profissao;
(function (profissao) {
    profissao[profissao["Atriz"] = 0] = "Atriz";
    profissao[profissao["Padeiro"] = 1] = "Padeiro";
})(profissao || (profissao = {}));
var pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: profissao.Atriz
};
var pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: profissao.Padeiro
};
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
};
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
};
//# sourceMappingURL=desafio2.js.map