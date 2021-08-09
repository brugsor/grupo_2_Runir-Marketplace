const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});

// Ruta /"root"
app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/index.html"));
});

// Ruta /home
app.get("/home", (req, res) => {
  res.sendFile(path.resolve("./views/index.html"));
});

// Ruta 404 ¿?
app.get("*", (req, res) => {
  res.status(404).send("404 not found. <br> ¡Odin, guíanos a nuestro destino!");
});
