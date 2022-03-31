const express = require("express");

const router = express.Router();

//Rutas o endpoints

router.get("/datagames", (req, res, next) => {
    res.json({
        data:"WELCOME"
    })
});

module.exports = router;