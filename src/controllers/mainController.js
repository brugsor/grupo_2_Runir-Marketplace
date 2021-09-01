// Creating data source
const productCollection = [
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

// Actions for every route
const mainController = {
  index: (req, res) => {
    res.render("./products/index", {
      showRoom: productCollection,
    });
  },
  register: (req, res) => {
    res.render("./users/register", {});
  },
  login: (req, res) => {
    res.render("./users/login", {});
  },
  product: (req, res) => {
    res.render("./products/product", {});
  },
  create: (req, res) => {
    res.render("./products/create-edit", {});
  },
  edit: (req, res) => {
    res.render("./products/create-edit", {});
  },
  about: (req, res) => {
    res.render("./products/about", {});
  },
  cart: (req, res) => {
    res.render("./users/cart", {});
  },
  profile: (req, res) => {
    res.render("./users/profile", {});
  },
};

// Exporting the module
module.exports = mainController;
