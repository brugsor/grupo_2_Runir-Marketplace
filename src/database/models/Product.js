module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let cols = {
    product_id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: dataTypes.STRING,
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
    timestamps: false,
  };
  const Product = sequelize.define(alias, cols, config);
  return Product;
};
