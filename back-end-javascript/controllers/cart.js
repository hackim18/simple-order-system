const { Cart, Product } = require("../models"); // Mengimpor model Cart dan Product

class CartController {
  static async getAllCarts(req, res, next) {
    try {
      const carts = await Cart.findAll({
        include: {
          model: Product, // Menyertakan model Product dalam pencarian
        },
      });
      if (carts.length === 0) {
        res.status(200).json({ message: "Cart is empty" }); // Mengirim pesan jika keranjang kosong
      }
      res.status(200).json(carts); // Mengirim semua keranjang jika ada
    } catch (error) {
      next(error);
    }
  }

  static async addCart(req, res, next) {
    const { productId, quantity, type } = req.body; // Mengambil data dari body request

    try {
      const product = await Product.findByPk(productId); // Mencari produk berdasarkan primaryKey
      const { id, price } = product;
      if (!product) throw { name: "NotFoundError", message: "Product not found" }; // Error jika produk tidak ditemukan
      const findCart = await Cart.findOne({ where: { productId: id, type: type } }); // Mencari keranjang dengan produk dan tipe tertentu
      const totalPrice = price * quantity; // Menghitung total harga
      if (findCart) {
        await findCart.update({ quantity: findCart.quantity + Number(quantity), total: findCart.total + totalPrice }); // Memperbarui keranjang jika sudah ada
        return res.status(200).json(findCart); // Mengembalikan keranjang yang diperbarui
      }
      const cart = await Cart.create({ productId: id, quantity: quantity, total: totalPrice, type }); // Membuat keranjang baru jika belum ada
      res.status(201).json(cart); // Mengembalikan keranjang baru
    } catch (error) {
      next(error);
    }
  }
  static async deleteCart(req, res, next) {
    const { id } = req.params; // Mengambil id dari parameter

    try {
      const cart = await Cart.findByPk(id); // Mencari keranjang berdasarkan primaryKey
      if (!cart) throw { name: "NotFoundError", message: "Cart not found" }; // Error jika keranjang tidak ditemukan
      await cart.destroy(); // Menghapus keranjang
      res.status(200).json({ message: "Cart deleted successfully" }); // Mengirim pesan sukses penghapusan
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CartController; // Mengekspor CartController
