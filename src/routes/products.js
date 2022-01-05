// Requiring express and router
const express = require("express");
const router = express.Router();
const path = require("path");

// Requiring multer middleware
const multer = require("multer"); // Multer library for uploading files to the server

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/img/productImg"));
  },
  filename: (req, file, cb) => {
    let imageName = Date.now() + path.extname(file.originalname);
    cb(null, imageName);
  },
});

let fileUpload = multer({
  storage,
});

// ************ Create new product form route ***********************
router.post(
  "/products",
  fileUpload.single("productImg"),
  controller.formProcessor
);

// ************ Controller Require ************
const productController = require("../controllers/productController");

// /*** GET ALL PRODUCTS ***/
// router.get("/", productController.index);

// /*** CREATE ONE PRODUCT ***/
// router.get("/create/", productController.create);
// router.post("/", productController.store);

// /*** GET ONE PRODUCT ***/
// router.get("/detail/:id/", productController.detail);

// /*** EDIT ONE PRODUCT ***/
// router.get("/edit/:id", productController.edit);
// router.patch("/edit/:id", productController.update);

// /*** DELETE ONE PRODUCT***/
// router.delete("/delete/:id", productController.destroy);

// module.exports = router;
