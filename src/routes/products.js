// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

/*** GET ALL PRODUCTS ***/
router.get("/", productController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create/", productController.create);
router.post("/", productController.store);

/*** GET ONE PRODUCT ***/
router.get("/detail/:id/", productController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productController.edit);
router.patch("/edit/:id", productController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/delete/:id", productController.destroy);

module.exports = router;
