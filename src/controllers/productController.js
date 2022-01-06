const db = require("../database/models");
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Products = db.Product;

const productController = {
  list: (req, res) => {
    db.Product.findAll().then((prducts) => {
      res.render("index.ejs", { products });
    });
  },
  detail: (req, res) => {
    db.Product.findByPk(req.params.id).then((product) => {
      res.render("product.ejs", { product });
    });
  },
  add: function (req, res) {
    return res.render("product-create.ejs");
  },
  create: function (req, res) {
    Products.create({
      title: req.body.title,
      inventory: req.body.inventory,
      awards: req.body.awards,
      description: req.body.description,
      notes: req.body.notes,
      img: req.body.img,
      price: req.body.price,
    })
      .then(() => {
        return res.redirect("/create-edit");
      })
      .catch((error) => res.send(error));
  },
  edit: function (req, res) {
    let productId = req.params.id;
    Products.findByPk(productId).then((Product) => {
      return res.render("product-edit.ejs", { Product });
    });
  },
  update: function (req, res) {
    let movieId = req.params.id;
    Movies.update(
      {
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length,
        genre_id: req.body.genre_id,
      },
      {
        where: { id: movieId },
      }
    )
      .then(() => {
        return res.redirect("/create-edit.ejs");
      })
      .catch((error) => res.send(error));
  },
  delete: function (req, res) {
    let productId = req.params.id;
    Products.findByPk(productId)
      .then((movie) => {
        return res.render("product-delete.ejs", { Product });
      })
      .catch((error) => res.send(error));
  },
  destroy: function (req, res) {
    let productId = req.params.id;
    Products.destroy({
      where: { id: productId },
      force: true,
    })
      .then(() => {
        return res.redirect("/movies");
      })
      .catch((error) => res.send(error));
  },
};

module.exports = productsController;
