"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    // Mendefinisikan relasi many-to-many antara Type dan Product melalui tabel Product_Type
    static associate(models) {
      Type.belongsToMany(models.Product, { through: models.Product_Type, foreignKey: "type_id" });
    }
  }
  Type.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Type",
    }
  );
  return Type;
};
