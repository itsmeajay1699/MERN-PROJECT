const express = require("express");

const productController = require("../controller/products");

const router = express.Router();

router
  .post("/user", productController.createUser)
  .get("/products", productController.getProducts)
  .get("/product/:id", productController.getProduct)
  .post("/product", productController.createProduct)
  .put("/product/:id", productController.updateProduct)
  .patch("/product/:id", productController.patchProduct)
  .delete("/product/:id", productController.deleteProduct);

exports.Router = router;
