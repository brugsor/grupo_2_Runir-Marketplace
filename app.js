const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

// Waking the server
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port " + port + ".");
});

// Path /"root"
app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/index.html"));
});

// Path /home
app.get("/home", (req, res) => {
  res.sendFile(path.resolve("./views/index.html"));
});

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

// Path /register
app.get("/product", (req, res) => {
  res.sendFile(path.resolve("./views/product.html"));
});

// Path 404 ¿?
app.get("*", (req, res) => {
  res.status(404).send("404 not found. <br> ¡Odin, guíanos a nuestro destino!");
});
