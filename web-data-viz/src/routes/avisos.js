var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.post("/obterDadosDash", function (req, res) {
    avisoController.obterDadosDash(req, res);
});

router.post("/obterDadosDash2", function (req, res) {
    avisoController.obterDadosDash2(req, res);
});

router.post("/obterDadosDash3", function (req, res) {
    avisoController.obterDadosDash3(req, res);
});

module.exports = router;