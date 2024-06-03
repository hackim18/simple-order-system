const { Cart, Product } = require("../models");

class CartController {
  static async getAllCarts(req, res, next) {
    try {
      const carts = await Cart.findAll({
        include: {
          model: Product,
        },
      });
      if (carts.length === 0) {
        res.status(200).json({ message: "Cart is empty" });
      }
      res.status(200).json(carts);
    } catch (error) {
      next(error);
    }
  }

  static async addCart(req, res, next) {
    const { productId, quantity, type } = req.body;

    try {
      const product = await Product.findByPk(productId);
      const { id, price } = product;
      if (!product) throw { name: "NotFoundError", message: "Product not found" };
      const findCart = await Cart.findOne({ where: { productId: id, type: type } });
      const totalPrice = price * quantity;
      if (findCart) {
        await findCart.update({ quantity: findCart.quantity + quantity, total: findCart.total + totalPrice });
        return res.status(200).json(findCart);
      }
      const cart = await Cart.create({ productId: id, quantity: quantity, total: totalPrice, type });
      res.status(201).json(cart);
    } catch (error) {
      next(error);
    }
  }
  static async deleteCart(req, res, next) {
    const { id } = req.params;

    try {
      const cart = await Cart.findByPk(id);
      if (!cart) throw { name: "NotFoundError", message: "Cart not found" };
      await cart.destroy();
      res.status(200).json({ message: "Cart deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CartController;
