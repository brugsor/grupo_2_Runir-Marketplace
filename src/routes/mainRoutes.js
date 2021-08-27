// Requiring express and router
const express = require("express");
const router = express.Router();

// Rquiring the main controller
const mainController = require("../controllers/mainController");

// Defining the routes
/* GET homepage */
router.get("/", mainController.index);
// GET /home
router.get("/home", mainController.index);

// Path /"root"
router.get("/home", mainController.index);

// Path /login
app.get("/login", (req, res) => {
  res.sendFile(path.resolve("./views/login.html"));
});

// Path /register
app.get("/register", (req, res) => {
  res.sendFile(path.resolve("./views/register.html"));
});

// Path /register
app.get("/cart", (req, res) => {
  res.sendFile(path.resolve("./views/cart.html"));
});

// Path /product:productId
app.get("/product:productId", (req, res) => {
  res.sendFile(path.resolve("./views/product.html"));
});

// Path 404 ¿?
app.get("*", (req, res) => {
  res.status(404).send("404 not found. <br> ¡Odin, guíanos a nuestro destino!");
});

// Exporting the module
module.exports = router;
