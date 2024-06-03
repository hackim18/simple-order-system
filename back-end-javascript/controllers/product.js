const { Product, Type } = require("../models");

class ProductController {
  static async getAllProducts(req, res, next) {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    try {
      const products = await Product.findAndCountAll({
        limit,
        offset,
        include: {
          model: Type,
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
      });

      if (products.count === 0) throw { name: "NotFoundError", message: "Product is empty" };

      res.status(200).json({
        totalItems: products.count,
        totalPages: Math.ceil(products.count / limit),
        currentPage: page,
        products: products.rows,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
