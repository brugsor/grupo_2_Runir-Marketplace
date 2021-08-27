const express = require("express"); // Requiring the express module
const app = express(); // Setting the express module to the constant app
const path = require("path"); // Necessary to find the paths of files
const router = require("./routes/mainRoutes"); // Connecting the router to communicate with the views

// Establishing the path for requiring static resources
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

// Setting the view engine
app.set("view engine", "ejs");

// Setting all routes to be obtained from the routes file
app.use("/", router);

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
