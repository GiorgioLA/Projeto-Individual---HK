var database = require("../database/config")

function autenticar(usuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", usuario, senha)
    var instrucaoSql = `
        SELECT idUsuario, usuario, email FROM usuario WHERE usuario = '${usuario}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (usuario, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterID(usuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", usuario, senha)
    var instrucaoSql = `
        SELECT idUsuario FROM usuario WHERE usuario = '${usuario}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inventario(idUsuarioVar) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inventario():", idUsuarioVar);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO inventario (idInventario, fkUsuario, fkHabilidade, nivel) VALUES 
            (1, ${idUsuarioVar}, 1, 0),
            (1, ${idUsuarioVar}, 2, 0),
            (1, ${idUsuarioVar}, 3, 0),
            (1, ${idUsuarioVar}, 4, 0),
            (1, ${idUsuarioVar}, 5, 0),
            (1, ${idUsuarioVar}, 6, 0),
            (1, ${idUsuarioVar}, 7, 0),
            (1, ${idUsuarioVar}, 8, 0),
            (1, ${idUsuarioVar}, 9, 0);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterInventario(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obterInventario(): ", idUsuario)
    var instrucaoSql = `
        SELECT nivel FROM inventario WHERE fkUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function alterarInventario(habilidade1,habilidade2, habilidade3, habilidade4, habilidade5, habilidade6, habilidade7, habilidade8, habilidade9,idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterarInventario():", habilidade1,habilidade2, habilidade3, habilidade4, habilidade5, habilidade6, habilidade7, habilidade8, habilidade9,idUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `UPDATE inventario SET nivel = ${habilidade1} WHERE fkUsuario = ${idUsuario} AND fkHabilidade = 1;`
    database.executar(instrucaoSql);
    var instrucaoSql = `UPDATE inventario SET nivel = ${habilidade2} WHERE fkUsuario = ${idUsuario} AND fkHabilidade = 2;`
    database.executar(instrucaoSql);
    var instrucaoSql = `UPDATE inventario SET nivel = ${habilidade3} WHERE fkUsuario = ${idUsuario} AND fkHabilidade = 3;`
    database.executar(instrucaoSql);
    var instrucaoSql = `UPDATE inventario SET nivel = ${habilidade4} WHERE fkUsuario = ${idUsuario} AND fkHabilidade = 4;`
    database.executar(instrucaoSql);
    var instrucaoSql = `UPDATE inventario SET nivel = ${habilidade5} WHERE fkUsuario = ${idUsuario} AND fkHabilidade = 5;`
    database.executar(instrucaoSql);
    var instrucaoSql = `UPDATE inventario SET nivel = ${habilidade6} WHERE fkUsuario = ${idUsuario} AND fkHabilidade = 6;`
    database.executar(instrucaoSql);
    var instrucaoSql = `UPDATE inventario SET nivel = ${habilidade7} WHERE fkUsuario = ${idUsuario} AND fkHabilidade = 7;`
    database.executar(instrucaoSql);
    var instrucaoSql = `UPDATE inventario SET nivel = ${habilidade8} WHERE fkUsuario = ${idUsuario} AND fkHabilidade = 8;`
    database.executar(instrucaoSql);
    var instrucaoSql = `UPDATE inventario SET nivel = ${habilidade9} WHERE fkUsuario = ${idUsuario} AND fkHabilidade = 9;`
    database.executar(instrucaoSql);
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarVitoria(timer, dano, idUser) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUser, dano, timer);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       INSERT INTO jogo VALUES (default, ${timer.toFixed(1)}, ${dano}, ${idUser}, now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    obterID,
    inventario,
    obterInventario,
    alterarInventario,
    registrarVitoria
};