const db = require("../database/models");
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Products = db.Product;

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
  createProduct: "createProduct",
  editProduct: "editProduct",
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
  //create the create product page
  createProduct: (req, res) => {
    res.render("./products/createProduct", {
      style: styles.createProduct,
    });
  },
  //create the edit product page
  editProduct: (req, res) => {
    res.render("./products/editProduct", {
      style: styles.editProduct,
    });
  },
};

// Exporting the module
module.exports = mainController;
