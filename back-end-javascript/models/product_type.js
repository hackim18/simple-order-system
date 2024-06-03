"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_Type extends Model {
    static associate(models) {
      // Membuat relasi Product_Type milik Product
      Product_Type.belongsTo(models.Product, { foreignKey: "product_id" });
      // Membuat relasi Product_Type milik Type
      Product_Type.belongsTo(models.Type, { foreignKey: "type_id" });
    }
  }
  Product_Type.init(
    {
      product_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product_Type",
    }
  );
  return Product_Type;
};
