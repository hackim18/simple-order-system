"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    // Mendefinisikan relasi antara model Cart dan Product
    static associate(models) {
      // Cart memiliki foreign key 'productId' yang mengacu pada 'id' dari model Product
      Cart.belongsTo(models.Product, {
        foreignKey: "productId",
        targetKey: "id",
      });
    }
  }
  Cart.init(
    {
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "Product ID cannot be empty",
          },
          notNull: {
            args: true,
            msg: "Product ID cannot be empty",
          },
        },
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Type cannot be empty",
          },
          notNull: {
            args: true,
            msg: "Type cannot be empty",
          },
        },
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: "Quantity cannot be empty",
          },
          notNull: {
            args: true,
            msg: "Quantity cannot be empty",
          },
        },
      },
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
