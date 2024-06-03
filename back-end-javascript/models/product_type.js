"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Product_Type.belongsTo(models.Product, { foreignKey: "product_id" });
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
