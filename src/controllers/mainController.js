const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

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
    db.Product.findAll().then((products) => {
      res.render("./products/index", {
        style: styles.index,
        products: products,
      });
    });
  },
  search: (req, res) => {
    let search = req.query.keywords;
    db.Product.findAll({
      where: { title: { [Op.like]: "%" + search + "%" } },
    }).then((results) => {
      res.render("./products/results", {
        resultProducts: results,
        search,
        style: styles.index,
      });
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
