// Crating data source
const about = {
  titulo: "Pimienta & Sal",
  descripcion: "Lorem ipsum...",
  historia: "Lorem ipsum...",
};

// Acá nos falta un objeto literal con las acciones para cada ruta

// Acá exportamos el resultado
const mainController = {
  index: (req, res) => {
    res.render("index", {
      about: about,
      products: products,
    });
  },
  detail: (req, res) => {
    let productDetails = listaPlatos.find(
      (product) => product.id == req.params.menuId
    );
    console.log(plato);
    res.render("detalleMenu", {
      plato: plato,
    });
  },
};

// Exporting the module
module.exports = mainController;
