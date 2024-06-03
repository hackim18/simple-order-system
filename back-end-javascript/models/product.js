"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // Mendefinisikan relasi one-to-many antara Product dan Cart
      Product.hasMany(models.Cart, {
        foreignKey: "productId",
        targetKey: "id",
      });
      // Mendefinisikan relasi many-to-many antara Product dan Type melalui tabel Product_Type
      Product.belongsToMany(models.Type, {
        through: models.Product_Type,
        foreignKey: "product_id",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
