const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Server running on port 3000.");
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

// Path 404 ¿?
app.get("*", (req, res) => {
  res.status(404).send("404 not found. <br> ¡Odin, guíanos a nuestro destino!");
});
