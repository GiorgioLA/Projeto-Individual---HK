var avisoModel = require("../models/avisoModel");

function obterDadosDash(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    console.log('oi! Estou no começo do controller')

    avisoModel.obterDadosDash(idUsuario)
        .then(
                function (resultadoBuscaDash) {
                    console.log(`\nResultados encontrados: ${resultadoBuscaDash.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoBuscaDash)}`); // transforma JSON em String

                    if (resultadoBuscaDash.length == 1) {
                        console.log(resultadoBuscaDash);

                                    res.json({
                                        porcentagem: resultadoBuscaDash[0].porcentagem
                                    });

                            
                    } else if (resultadoBuscaDash.length == 0) {
                        res.status(403).send("Erro ao obter porcentagem. Nenhum dado encontrado");
                    } else {
                        res.status(403).send("Muitos dados encontrados.");
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

function obterDadosDash2(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    console.log('oi! Estou no começo do controller2')

    avisoModel.obterDadosDash2(idUsuario)
        .then(
                function (resultadoBuscaDash) {
                    console.log(`\nResultados encontrados: ${resultadoBuscaDash.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoBuscaDash)}`); // transforma JSON em String

                    console.log(resultadoBuscaDash.length)
                    console.log(resultadoBuscaDash);

                    // return false
                    if (resultadoBuscaDash.length == 0) {
                        res.json({
                            jogou: 'nao',
                            P1_seg : 0,
                            P1_dmg : 0,
                            P2_seg : 0,
                            P2_dmg : 0,
                            P3_seg : 0,
                            P3_dmg : 0,
                            P4_seg : 0,
                            P4_dmg : 0,
                            P5_seg : 0,
                            P5_dmg : 0
                        })
                    } else if (resultadoBuscaDash.length == 1) {
                        res.json({
                            jogou: 'sim',
                            P1_seg : resultadoBuscaDash[0].segundos,
                            P1_dmg : resultadoBuscaDash[0].dano_recebido,
                            P2_seg : 0,
                            P2_dmg : 0,
                            P3_seg : 0,
                            P3_dmg : 0,
                            P4_seg : 0,
                            P4_dmg : 0,
                            P5_seg : 0,
                            P5_dmg : 0
                        });
                    } else if (resultadoBuscaDash.length == 2) {
                        res.json({
                            jogou: 'sim',
                            P1_seg : resultadoBuscaDash[0].segundos,
                            P1_dmg : resultadoBuscaDash[0].dano_recebido,
                            P2_seg : resultadoBuscaDash[1].segundos,
                            P2_dmg : resultadoBuscaDash[1].dano_recebido,
                            P3_seg : 0,
                            P3_dmg : 0,
                            P4_seg : 0,
                            P4_dmg : 0,
                            P5_seg : 0,
                            P5_dmg : 0
                        });
                    } else if (resultadoBuscaDash.length == 3) {
                        res.json({
                            jogou: 'sim',
                            P1_seg : resultadoBuscaDash[0].segundos,
                            P1_dmg : resultadoBuscaDash[0].dano_recebido,
                            P2_seg : resultadoBuscaDash[1].segundos,
                            P2_dmg : resultadoBuscaDash[1].dano_recebido,
                            P3_seg : resultadoBuscaDash[2].segundos,
                            P3_dmg : resultadoBuscaDash[2].dano_recebido,
                            P4_seg : 0,
                            P4_dmg : 0,
                            P5_seg : 0,
                            P5_dmg : 0
                        });
                    } else if (resultadoBuscaDash.length == 4) {
                        res.json({
                            jogou: 'sim',
                            P1_seg : resultadoBuscaDash[0].segundos,
                            P1_dmg : resultadoBuscaDash[0].dano_recebido,
                            P2_seg : resultadoBuscaDash[1].segundos,
                            P2_dmg : resultadoBuscaDash[1].dano_recebido,
                            P3_seg : resultadoBuscaDash[2].segundos,
                            P3_dmg : resultadoBuscaDash[2].dano_recebido,
                            P4_seg : resultadoBuscaDash[3].segundos,
                            P4_dmg : resultadoBuscaDash[3].dano_recebido,
                            P5_seg : 0,
                            P5_dmg : 0
                        });
                    } else if (resultadoBuscaDash.length == 5) {
                        res.json({
                            jogou: 'sim',
                            P1_seg : resultadoBuscaDash[0].segundos,
                            P1_dmg : resultadoBuscaDash[0].dano_recebido,
                            P2_seg : resultadoBuscaDash[1].segundos,
                            P2_dmg : resultadoBuscaDash[1].dano_recebido,
                            P3_seg : resultadoBuscaDash[2].segundos,
                            P3_dmg : resultadoBuscaDash[2].dano_recebido,
                            P4_seg : resultadoBuscaDash[3].segundos,
                            P4_dmg : resultadoBuscaDash[3].dano_recebido,
                            P5_seg : resultadoBuscaDash[4].segundos,
                            P5_dmg : resultadoBuscaDash[4].dano_recebido,
                        });
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

function obterDadosDash3(req, res) {
    // var idUsuario = req.body.idUsuarioServer;
    console.log('oi! Estou no começo do controller')

    avisoModel.obterDadosDash3()
        .then(
                function (resultadoBuscaDash3) {
                    console.log(`\nResultados encontrados: ${resultadoBuscaDash3.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoBuscaDash3)}`); // transforma JSON em String

                    if (resultadoBuscaDash3.length == 9) {
                        console.log(resultadoBuscaDash3);

                                    res.json({
                                        cntH1 : resultadoBuscaDash3[0].cnt,
                                        cntH2 : resultadoBuscaDash3[1].cnt,
                                        cntH3 : resultadoBuscaDash3[2].cnt,
                                        cntH4 : resultadoBuscaDash3[3].cnt,
                                        cntH5 : resultadoBuscaDash3[4].cnt,
                                        cntH6 : resultadoBuscaDash3[5].cnt,
                                        cntH7 : resultadoBuscaDash3[6].cnt,
                                        cntH8 : resultadoBuscaDash3[7].cnt,
                                        cntH9 : resultadoBuscaDash3[8].cnt
                                    });

                            
                    } else if (resultadoBuscaDash3.length == 0) {
                        res.status(403).send("Nenhum dado encontrado");
                    } else {
                        res.status(403).send("Muitos dados encontrados");
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

function obterDadosDash4(req, res) {
    // var idUsuario = req.body.idUsuarioServer;
    console.log('oi! Estou no começo do controller')

    avisoModel.obterDadosDash4()
        .then(
                function (resultadoBuscaDash4) {
                    console.log(`\nResultados encontrados: ${resultadoBuscaDash4.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoBuscaDash4)}`); // transforma JSON em String
                    console.log(resultadoBuscaDash4);
                    res.json({
                        total : resultadoBuscaDash4[0].total,
                    });

                            
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function obterDadosDash5(req, res) {
    console.log('Cheguei no controller')
    avisoModel.obterDadosDash5()
        .then(
                function (resultadoBuscaDash5) {
                    console.log(`\nResultados encontrados: ${resultadoBuscaDash5.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoBuscaDash5)}`); // transforma JSON em String
                    console.log(resultadoBuscaDash5);
                    if (resultadoBuscaDash5.length < 5) {
                        for (i = resultadoBuscaDash5.length; i < 5; i++) {
                            resultadoBuscaDash5[i] = {usuario : 'nulo', segundos : '0', dano_recebido : '0'}
                        }
                    }
                    res.json({
                        jogador1: {
                            usuario: resultadoBuscaDash5[0].usuario,
                            tempo: resultadoBuscaDash5[0].segundos,
                            dano: resultadoBuscaDash5[0].dano_recebido
                        }, 
                        jogador2: {
                            usuario: resultadoBuscaDash5[1].usuario,
                            tempo: resultadoBuscaDash5[1].segundos,
                            dano: resultadoBuscaDash5[1].dano_recebido
                        }, 
                        jogador3: {
                            usuario: resultadoBuscaDash5[2].usuario,
                            tempo: resultadoBuscaDash5[2].segundos,
                            dano: resultadoBuscaDash5[2].dano_recebido
                        }, 
                        jogador4: {
                            usuario: resultadoBuscaDash5[3].usuario,
                            tempo: resultadoBuscaDash5[3].segundos,
                            dano: resultadoBuscaDash5[3].dano_recebido
                        }, 
                        jogador5: {
                            usuario: resultadoBuscaDash5[4].usuario,
                            tempo: resultadoBuscaDash5[4].segundos,
                            dano: resultadoBuscaDash5[4].dano_recebido
                        }
                    });

                            
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function obterDadosDash6(req, res) {
    avisoModel.obterDadosDash6()
        .then(
                function (resultadoBuscaDash6) {
                    console.log(`\nResultados encontrados: ${resultadoBuscaDash6.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoBuscaDash6)}`); // transforma JSON em String
                    console.log(resultadoBuscaDash6);
                    if (resultadoBuscaDash6.length < 5) {
                        for (i = resultadoBuscaDash6.length; i < 5; i++) {
                            resultadoBuscaDash6[i] = {usuario : 'nulo', segundos : '0', dano_recebido : '0'}
                        }
                    }
                    res.json({
                        jogador1: {
                            usuario: resultadoBuscaDash6[0].usuario,
                            tempo: resultadoBuscaDash6[0].segundos,
                            dano: resultadoBuscaDash6[0].dano_recebido
                        }, 
                        jogador2: {
                            usuario: resultadoBuscaDash6[1].usuario,
                            tempo: resultadoBuscaDash6[1].segundos,
                            dano: resultadoBuscaDash6[1].dano_recebido
                        }, 
                        jogador3: {
                            usuario: resultadoBuscaDash6[2].usuario,
                            tempo: resultadoBuscaDash6[2].segundos,
                            dano: resultadoBuscaDash6[2].dano_recebido
                        }, 
                        jogador4: {
                            usuario: resultadoBuscaDash6[3].usuario,
                            tempo: resultadoBuscaDash6[3].segundos,
                            dano: resultadoBuscaDash6[3].dano_recebido
                        }, 
                        jogador5: {
                            usuario: resultadoBuscaDash6[4].usuario,
                            tempo: resultadoBuscaDash6[4].segundos,
                            dano: resultadoBuscaDash6[4].dano_recebido
                        }
                    });

                            
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    obterDadosDash,
    obterDadosDash2,
    obterDadosDash3,
    obterDadosDash4,
    obterDadosDash5,
    obterDadosDash6
}