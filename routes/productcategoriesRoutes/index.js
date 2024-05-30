import express from "express";
const router = express.Router();
import {
  createCategory,
  getCategories,
  deleteCategory,
  updateCategory,
} from "../../constructor/ProductsCategories/index.js";

router.post("/create", createCategory);
router.get("/read", getCategories);
router.put("/update/:id", updateCategory);
router.delete("/delete/:id", deleteCategory);

export default router;
