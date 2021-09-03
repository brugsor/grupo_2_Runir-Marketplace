// Requiring express and router
const express = require("express");
const router = express.Router();

// Requiring the main controller
const mainController = require("../controllers/mainController");

// Defining the routes
/* GET homepage */
router.get("/", mainController.index);
// GET /home
router.get("/home", mainController.index);
// GET /index
router.get("/index", mainController.index);

/* GET register */
router.get("/register", mainController.register);

/* GET login */
router.get("/login", mainController.login);

/* GET about */
router.get("/about", mainController.about);

// Path /cart
router.get("/cart", mainController.cart);

// Path /product
router.get("/product/:productId", mainController.product);

// Path /create-edit
router.get("/create-edit", mainController.createEdit);

// Path /profile
router.get("/profile", mainController.profile);

// Path 404 ¿?
router.get("*", (req, res) => {
  res.status(404).send("404 not found. <br> ¡Odín, guíanos a nuestro destino!");
});

// Exporting the module
module.exports = router;
