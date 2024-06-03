const express = require("express");
const CartController = require("../controllers/cart");

const router = express.Router();

router.get("/", CartController.getAllCarts);
router.post("/", CartController.addCart);
router.delete("/:id", CartController.deleteCart);

module.exports = router;
