var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.post("/obterDadosDash", function (req, res) {
    avisoController.obterDadosDash(req, res);
});

router.post("/obterDadosDash2", function (req, res) {
    avisoController.obterDadosDash2(req, res);
});


router.post("/obterDadosDash4", function (req, res) {
    avisoController.obterDadosDash4(req, res);
});

router.post("/obterDadosDash5", function (req, res) {
    avisoController.obterDadosDash5(req, res);
});

router.post("/obterDadosDash6", function (req, res) {
    avisoController.obterDadosDash6(req, res);
});

router.post("/obterDadosDash7", function (req, res) {
    avisoController.obterDadosDash7(req, res);
});

module.exports = router;