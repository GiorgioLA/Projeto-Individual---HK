var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/obterID", function (req, res) {
    usuarioController.obterID(req, res);
});

router.post("/inventario", function (req, res) {
    usuarioController.inventario(req, res);
});

router.post("/obterInventario", function (req, res) {
    usuarioController.obterInventario(req, res);
});

module.exports = router;