var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var usuario = req.body.usuarioServer;
    var senha = req.body.senhaServer;

    if (usuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(usuario, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                                    res.json({
                                        idUsuario: resultadoAutenticar[0].idUsuario,
                                        email: resultadoAutenticar[0].email,
                                        usuario: resultadoAutenticar[0].usuario,
                                        senha: resultadoAutenticar[0].senha
                                    });

                            
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function obterID(req, res) {
    var usuario = req.body.usuarioServer;
    var senha = req.body.senhaServer;

    if (usuario == undefined) {
        res.status(400).send("Valor não obtido no obterID!");
    } else if (senha == undefined) {
        res.status(400).send("Valor não obtido no obterID!");
    } else {

        usuarioModel.obterID(usuario, senha)
            .then(
                function (resultadoObterID) {
                    console.log(`\nResultados encontrados: ${resultadoObterID.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoObterID)}`); // transforma JSON em String

                    if (resultadoObterID.length == 1) {
                        console.log(resultadoObterID);

                                    res.json({
                                        idUsuario: resultadoObterID[0].idUsuario
                                    });

                            
                    } else if (resultadoObterID.length == 0) {
                        res.status(403).send("Erro: nenhum valor recebido no ObterID");
                    } else {
                        res.status(403).send("Falha: mais de um valor obtido");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function inventario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuarioVar = Number(req.body.idUsuarioServer);
    console.log('Estou no controller do inventario com o valor:', idUsuarioVar)

    // Faça as validações dos valores
    if (idUsuarioVar == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.inventario(idUsuarioVar)
            .then(
                console.log("Estou no THEN do CONTROLLER INVENTARIO"),
                function (resultadoInventario) {
                    res.json(resultadoInventario);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function obterInventario(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {
        usuarioModel.obterInventario(idUsuario)
            .then(
                function (resultadoObter) {
                    console.log(`\nResultados encontrados: ${resultadoObter.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoObter)}`); // transforma JSON em String

                    if (resultadoObter.length == 9) {
                        console.log(resultadoObter);

                                    res.json({
                                        habilidade1: resultadoObter[0].nivel,
                                        habilidade2: resultadoObter[1].nivel,
                                        habilidade3: resultadoObter[2].nivel,
                                        habilidade4: resultadoObter[3].nivel,
                                        habilidade5: resultadoObter[4].nivel,
                                        habilidade6: resultadoObter[5].nivel,
                                        habilidade7: resultadoObter[6].nivel,
                                        habilidade8: resultadoObter[7].nivel,
                                        habilidade9: resultadoObter[8].nivel
                                    });

                            
                    } else if (resultadoObter.length == 0) {
                        res.status(403).send("Erro ao obter os seus dados, nenhum dado encontrado");
                    } else {
                        res.status(403).send("Erro ao obter os seus dados, mais entradas do que o esperado");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar a obtenção dos dados! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function alterarInventario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var habilidade1 = req.body.habilidade1Server;
    var habilidade2 = req.body.habilidade2Server;
    var habilidade3 = req.body.habilidade3Server;
    var habilidade4 = req.body.habilidade4Server;
    var habilidade5 = req.body.habilidade5Server;
    var habilidade6 = req.body.habilidade6Server;
    var habilidade7 = req.body.habilidade7Server;
    var habilidade8 = req.body.habilidade8Server;
    var habilidade9 = req.body.habilidade9Server;
    var idUsuario = req.body.idUsuario;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.alterarInventario(
            habilidade1,
            habilidade2, 
            habilidade3, 
            habilidade4, 
            habilidade5, 
            habilidade6, 
            habilidade7, 
            habilidade8, 
            habilidade9,
            idUsuario
        )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a atualização dos dados! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    function registrarVitoria(req, res) {
        // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
        var idUser = req.body.idUserServer;
        var dano = req.body.danoServer;
        var timer = req.body.timerServer;
    
        // Faça as validações dos valores
        // if (nome == undefined) {
        //     res.status(400).send("Seu nome está undefined!");
        // } else if (email == undefined) {
        //     res.status(400).send("Seu email está undefined!");
        // } else if (senha == undefined) {
        //     res.status(400).send("Sua senha está undefined!");
        // } else {
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            usuarioModel.registrarVitoria(timer, dano, idUser)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }

module.exports = {
    autenticar,
    cadastrar,
    obterID,
    inventario,
    obterInventario,
    alterarInventario,
    registrarVitoria
}