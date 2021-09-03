// const fs = require("fs");
// const path = require("path");

// const productsFilePath = path.join(__dirname, "../data/productsDB.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

// Creating data source
const productCollection = [
  {
    id: "feingur750",
    name: "FEINGUR",
    price: 320,
    description:
      "El sabor pleno a miel, espeso y con notas de polen de Feingur es conseguido con una levadura de Voss, Noruega, cuya cepa es preservada con métodos tradicionales de las granjas noruegas. Feingur simbolizaba la fertilidad: la alegría del florecimiento, la vida de abundancia y la primavera resplandeciente.",
    img: "feingur.jpg",
  },
  {
    id: "othalan750",
    name: "ŌÞALAN",
    price: 320,
    description: "Lorem ipsum...",
    img: "othalan.jpg",
  },
  {
    id: "haegl750",
    name: "HÆGL",
    price: 320,
    description: "Lorem ipsum...",
    img: "haegl.jpg",
  },
  {
    id: "draumstafir750",
    name: "DRAUMSTAFIR",
    price: 320,
    description: "Lorem ipsum...",
    img: "draum.jpg",
  },
];

const styles = {
  index: "styles",
  register: "register",
  login: "login",
  cart: "cart",
  product: "product",
  createEdit: "create-edit",
  about: "about",
  profile: "profile",
};

// Actions for every route
const mainController = {
  index: (req, res) => {
    res.render("./products/index", {
      showRoom: productCollection,
      style: styles.index,
    });
  },
  register: (req, res) => {
    res.render("./users/register", {
      style: styles.register,
    });
  },
  login: (req, res) => {
    res.render("./users/login", {
      style: styles.login,
    });
  },
  product: (req, res) => {
    let item = productCollection.find(
      (item) => item.id == req.params.productId
    );
    console.log(item);
    res.render("./products/product", {
      style: styles.product,
      item: item,
    });
  },
  createEdit: (req, res) => {
    res.render("./products/create-edit", {
      showRoom: productCollection,
      style: styles.createEdit,
    });
  },
  about: (req, res) => {
    res.render("./products/about", {
      style: styles.about,
    });
  },
  cart: (req, res) => {
    res.render("./users/cart", {
      style: styles.cart,
    });
  },
  profile: (req, res) => {
    res.render("./users/profile", {
      style: styles.profile,
    });
  },
};

// Exporting the module
module.exports = mainController;
