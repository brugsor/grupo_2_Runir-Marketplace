const fs = require("fs");
const path = require("path");

// Calling for data source of products
const productsFilePath = path.join(__dirname, "../data/productsDB.json");
const productCollection = JSON.parse(
  fs.readFileSync(productsFilePath, "utf-8")
);
const users = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

// Categories
const hidromiel = products.filter(function (product) {
  return product.category == "hidromiel";
});
const eventos = products.filter(function (product) {
  return product.category == "eventos";
});
const complementos = products.filter(function (product) {
  return product.category == "complementos";
});

// Setting the different styles
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
  search: (req, res) => {
    let search = req.query.keywords;
    let productsToSearch = productCollection.filter((product) =>
      product.name.toUpperCase().includes(search)
    );
    res.render("results", {
      products: productsToSearch,
      search,
      toThousand,
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
