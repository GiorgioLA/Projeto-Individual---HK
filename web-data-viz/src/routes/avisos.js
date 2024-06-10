var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.post("/obterDadosDash", function (req, res) {
    avisoController.obterDadosDash(req, res);
});

module.exports = router;