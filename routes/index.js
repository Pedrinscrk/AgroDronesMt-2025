const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home", { layout: false , title: "AgroDronesMT" });
});


module.exports = router;

/*
router.get("/nomeDaRota", (req, res) => {
    res.send("nomeDoArquivo", { layout: false , title: "tituloDaPágina" });
});
    */
