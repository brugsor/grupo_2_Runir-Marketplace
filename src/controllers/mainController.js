// Creating data source
const products = [
  {
    id: "feingur750",
    name: "FEINGUR",
    price: 260,
    description: "Lorem ipsum...",
    img: "feingur.jpg",
  },
  {
    id: "othalan750",
    name: "ŌÞALAN",
    price: 260,
    description: "Lorem ipsum...",
    img: "othalan.jpg",
  },
  {
    id: "haegl750",
    name: "HÆGL",
    price: 260,
    description: "Lorem ipsum...",
    img: "haegl.jpg",
  },
  {
    id: "draumstafir750",
    name: "DRAUMSTAFIR",
    price: 260,
    description: "Lorem ipsum...",
    img: "draum.jpg",
  },
];

const offers = [
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
    img: "barril.jpeg",
  },
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
    img: "barril.jpeg",
  },
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
    img: "barril.jpeg",
  },
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
    img: "barril.jpeg",
  },
  {
    id: "ProductId",
    name: "Pimienta & Sal",
    price: "Lorem ipsum...",
    description: "Lorem ipsum...",
    img: "barril.jpeg",
  },
];

// Actions for every route
const mainController = {
  index: (req, res) => {
    res.render("index", {
      showroom: products,
    });
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
  profile: (req, res) => {
    res.render("profile", {});
  },
};

// Exporting the module
module.exports = mainController;
