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

module.exports = {
    obterDadosDash
}