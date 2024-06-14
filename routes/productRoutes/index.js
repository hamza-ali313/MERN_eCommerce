import express from "express";
const router = express.Router();
import {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getProductsByCategory,
} from "../../constructor/product/index.js";

router.post("/create", createProduct);
router.get("/read", getProducts);
router.get("/read/:category", getProductsByCategory);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;
