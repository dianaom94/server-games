const express = require("express");
const router = express.Router();

const {create, list, read, update, remove, removeSoft } = require("../controllers/category")

//rutas
//Principio Solid: Inyección de dependencias
//Principio Solid: Inversión de dependenias
//Endpoints
router.post("/category", create);
router.get("/categories", list);
router.get("/category/:slug", read);
router.put("/category/:slug", update);
router.delete("/category/:slug", remove);
router.patch("/category/:slug", removeSoft);

module.exports = router;