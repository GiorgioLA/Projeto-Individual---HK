const { constDadosDash } = require("../controllers/avisoController");
var database = require("../database/config");

function obterDadosDash(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obterDadosDash2(): ", idUsuario)
    var instrucaoSql = `
        SELECT porcentagem FROM inventarioUnico WHERE fkUsuario = ${idUsuario};;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosDash2(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obterDadosDash2(): ", idUsuario)
    var instrucaoSql = `
        SELECT segundos, dano_recebido FROM jogo_solo WHERE fkUsuario = ${idUsuario} LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosDash3() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obterDadosDash2(): ")
    var instrucaoSql = `
        SELECT count(nivel) as cnt FROM inventario WHERE nivel > 0 GROUP BY fkHabilidade;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDadosDash,
    obterDadosDash2,
    obterDadosDash3
}
