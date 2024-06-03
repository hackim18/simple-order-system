"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      // name: {
      //   allowNull: false,
      //   type: DataTypes.STRING,
      //   validate: {
      //     notEmpty: {
      //       args: true,
      //       msg: "Name cannot be empty",
      //     },
      //     notNull: {
      //       args: true,
      //       msg: "Name cannot be empty",
      //     },
      //   },
      // },
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
      // price: {
      //   allowNull: false,
      //   type: DataTypes.INTEGER,
      //   validate: {
      //     notEmpty: {
      //       args: true,
      //       msg: "Price cannot be empty",
      //     },
      //     notNull: {
      //       args: true,
      //       msg: "Price cannot be empty",
      //     },
      //   },
      // },
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
  // Cart.beforeCreate(async (cart) => {
  //   cart.total = cart.price * cart.quantity;
  // });
  return Cart;
};
