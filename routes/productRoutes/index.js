import express from 'express';
const router = express.Router();
import { createProduct, getProducts, deleteProduct, updateProduct } from '../../constructor/Product/index.js';


router.post("/create",createProduct);
router.get("/read",getProducts);
router.put("/update/:id",updateProduct);
router.delete("/delete/:id",deleteProduct);

export default router;