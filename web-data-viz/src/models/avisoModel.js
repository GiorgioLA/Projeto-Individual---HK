const { constDadosDash } = require("../controllers/avisoController");
var database = require("../database/config");

function obterDadosDash(idUsuario) {
    var instrucaoSql = `
        SELECT porcentagem FROM inventarioUnico WHERE fkUsuario = ${idUsuario};;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosDash2(idUsuario) {
    var instrucaoSql = `
        SELECT segundos, dano_recebido FROM jogo_solo WHERE fkUsuario = ${idUsuario} LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosDash4() {
    var instrucaoSql = `
        SELECT count(distinct usuario) as total FROM usuario JOIN inventario ON idUsuario = fkUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosDash5() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obterDadosDash2(): ")
    var instrucaoSql = `
        SELECT usuario, segundos, dano_recebido FROM jogo JOIN usuario ON idUsuario = fkUsuario ORDER BY segundos, dano_recebido LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosDash6() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obterDadosDash2(): ")
    var instrucaoSql = `
       SELECT usuario, segundos, dano_recebido FROM jogo JOIN usuario ON idUsuario = fkUsuario ORDER BY dano_recebido, segundos LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosDash7() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obterDadosDash7(): ")
    var instrucaoSql = `
      SELECT (count(nivel / nivel)) as cnt FROM inventario GROUP BY fkHabilidade;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDadosDash,
    obterDadosDash2,
    obterDadosDash4,
    obterDadosDash5,
    obterDadosDash6,
    obterDadosDash7
}
