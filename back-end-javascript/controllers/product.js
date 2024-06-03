const { Product, Type } = require("../models"); // Mengimpor model Product dan Type

class ProductController {
  static async getAllProducts(req, res, next) {
    // Mengambil parameter query dari request, dengan nilai default jika tidak ada
    const { page = 1, size = 10, sort = "name,asc" } = req.query;
    const offset = (page - 1) * size; // Menghitung offset untuk pagination
    const order = sort.split(","); // Memecah string sort menjadi array

    try {
      // Mencari dan menghitung semua produk dengan kriteria tertentu
      const products = await Product.findAndCountAll({
        order: [order], // Mengatur urutan hasil
        limit: size, // Batas jumlah produk per halaman
        offset, // Offset untuk mulai mengambil produk
        include: {
          model: Type, // Mengikutsertakan model Type
          attributes: ["id", "name"], // Memilih atribut yang diinginkan dari model Type
          through: { attributes: [] }, // Tidak mengambil atribut tambahan dari tabel relasi
        },
      });

      // Jika tidak ada produk yang ditemukan, lempar error
      if (products.count === 0) throw { name: "NotFoundError", message: "Product is empty" };

      // Mengirim response dengan status 200 dan data produk
      res.status(200).json({
        totalItems: products.count, // Jumlah total produk
        totalPages: Math.ceil(products.count / size), // Jumlah total halaman
        currentPage: page, // Halaman saat ini
        products: products.rows, // Data produk per halaman
      });
    } catch (error) {
      next(error); // Lemparkan error ke middleware error handler
    }
  }
}

module.exports = ProductController; // Mengekspor ProductController
