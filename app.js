// ****************************************** Require's ******************************************
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
// const logger = require("morgan");
const express = require("express"); // Requiring the express module
const path = require("path"); // Necessary to find the paths of files
const methodOverride = require("method-override"); // To use PUT and DELETE methods
const multer = require("multer"); // Multer library for uploading files to the server
const bcrypt = require("bcryptjs"); // Hashing passwords and sensitive data

// ********************* Setting the express module to the constant app ******************************************
const app = express();

// ****************************************** Requiring all route files ******************************************
const router = require("./src/routes/mainRoutes"); // Connecting the router to communicate with the main views
// const productRouter = require("./src/routes/products"); // Connecting the router to communicate with the main views

// ****************************************** Middlewares ******************************************
// Establishing the path for requiring static resources
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

//To enable POST
app.use(express.urlencoded({ extended: false }));
// app.use(logger("dev"));
app.use(express.json());


app.use(cookieParser());
app.use(methodOverride("_method")); // To enable the use of method="POST" en el formulario por PUT y DELETE

// ****************************************** Setting the view engine ******************************************
app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");

// ****************************** Setting all routes to be obtained from the routes file ***************************
app.use("/", router);
// app.use("/products", productRouter);

// ****************************************** Waking the server ******************************************
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port " + port + ".");
});

// ****************************************** Catching 404 error ******************************************
app.use((req, res, next) => next(createError(404)));

// ****************************************** Modals ******************************************************
// Get modal element
var createProductModal = document.getElementById("createProductModal");
// Get open modal button
var modalBtn = document.getElementById("modalBtn");
// Get close modal button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Listen for open click
modalBtn.addEventListener("click", openModal);
// Listen for close click
closeBtn.addEventListener("click", closeModal);
// Listen for outside click
window.addEventListener("click", outsideClick);
// Function to open modal
function openModal() {
  createProductModal.style.display = "block";
}
// Functions to close modal
function closeModal() {
  createProductModal.style.display = "none";
}
function outsideClick(e) {
  if (e.target == createProductModal) {
    createProductModal.style.display = "none";
  }
}

// // ****************************************** Error Handler ******************************************
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.path = req.path;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// // ****************************************** Exporting the app module ******************************************
// module.exports = app;
