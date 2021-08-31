const express = require("express"); // Requiring the express module
const app = express(); // Setting the express module to the constant app
const path = require("path"); // Necessary to find the paths of files
const router = require("./src/routes/mainRoutes"); // Connecting the router to communicate with the views

// Establishing the path for requiring static resources
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

// Setting the view engine
app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");

// Setting all routes to be obtained from the routes file
app.use("/", router);

// Waking the server
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port " + port + ".");
});
