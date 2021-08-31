// Creating data source
const products = [
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
  },
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
  },
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
  },
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
  },
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
  },
];

const offers = [
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
  },
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
  },
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
  },
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
  },
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
  },
];

// Actions for every route
const mainController = {
  index: (req, res) => {
    res.render("index", {});
  },
  register: (req, res) => {
    res.render("register", {});
  },
  login: (req, res) => {
    res.render("login", {});
  },
  product: (req, res) => {
    res.render("product", {});
  },
  create: (req, res) => {
    res.render("create", {});
  },
  edit: (req, res) => {
    res.render("edit", {});
  },
  about: (req, res) => {
    res.render("about", {});
  },
  cart: (req, res) => {
    res.render("cart", {});
  },
};

// Exporting the module
module.exports = mainController;
