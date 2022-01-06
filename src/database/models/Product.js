module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: dataTypes.STRING,
    },
    category: {
      type: dataTypes.INTEGER,
    },
    inventory: {
      type: dataTypes.INTEGER,
    },
    description: {
      type: dataTypes.STRING,
    },
    notes: {
      type: dataTypes.STRING,
    },
    img: {
      type: dataTypes.STRING,
    },
    price: {
      type: dataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "products",
    timestamps: true,
  };
  const Product = sequelize.define(alias, cols, config);

  return Product;
};
