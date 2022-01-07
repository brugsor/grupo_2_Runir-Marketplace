// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

/*** CREATE ONE PRODUCT ***/
router.get("/admin", productsController.create);
router.post("/", productsController.add);

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.patch("/edit/:id", productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/delete/:id", productsController.destroy);

module.exports = router;
