"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const products = require("../data/products.json");
    const types = require("../data/types.json");
    const productTypes = require("../data/productTypes.json");
    await queryInterface.bulkInsert(
      "Products",
      products.map((product) => ({ ...product, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
    // await queryInterface.bulkInsert(
    //   "Types",
    //   types.map((type) => ({ ...type, createdAt: new Date(), updatedAt: new Date() })),
    //   {}
    // );
    // await queryInterface.bulkInsert(
    //   "Product_Types",
    //   productTypes.map((productType) => ({
    //     ...productType,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   })),
    //   {}
    // );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
    await queryInterface.bulkDelete("Carts", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
    await queryInterface.bulkDelete("Types", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
    await queryInterface.bulkDelete("Product_Types", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
