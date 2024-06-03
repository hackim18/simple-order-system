if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const productRoutes = require("./routers/product");
const cartRoutes = require("./routers/cart");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/products", productRoutes);
app.use("/carts", cartRoutes);
app.use(errorHandler);

module.exports = app;
