const express = require("express");

const productController = require("../controller/products");

const router = express.Router();

router
  .post("/user", productController.createUser)
  .get("/", productController.getProducts)
  .get("/:id", productController.getProduct)
  .post("/", productController.createProduct)
  .put("/:id", productController.updateProduct)
  .patch("/:id", productController.patchProduct)
  .delete("/:id", productController.deleteProduct);

exports.Router = router;
