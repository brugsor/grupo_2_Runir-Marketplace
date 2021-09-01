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
    res.render("./products/product", {
      style: styles.product,
    });
  },
  create: (req, res) => {
    res.render("./products/create-edit", {
      style: styles.createEdit,
    });
  },
  edit: (req, res) => {
    res.render("./products/create-edit", {
      style: styles.create - edit,
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
