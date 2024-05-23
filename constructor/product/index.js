import express from "express";
import Product from "../../models/Product.js"; // Assuming Product model is imported from a file
import upload from '../../upload.js';
const app = express();
app.use(express.json()); // Required to parse JSON bodies

// Create a new product
export const createProduct = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }

    try {
      const { title, description, price, discountPercentage, rating, stock, brand, category } = req.body;

      // Check if files are uploaded
      const thumbnail = req.files['thumbnail'] ? req.files['thumbnail'][0].path : '';
      const images = req.files['images'] ? req.files['images'].map(file => file.path) : [];

      const newProduct = new Product({
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images
      });

      await newProduct.save();
      res.send("Product saved to the database!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error saving product to the database");
    }
  });
};
// Get all products
export const getProducts = async (req, res) => {
  try {
    const productList = await Product.find();
    res.json(productList);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching products from the database");
  }
};

// Update a product based on the id
export const updateProduct = async (req, res) => {
  try {
    const product_id = req.params.id;
    await Product.findByIdAndUpdate(product_id, req.body);
    res.send("Product updated successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating product");
  }
};

// Delete a product based on the id
export const deleteProduct = async (req, res) => {
  try {
    const product_id = req.params.id;
    await Product.findByIdAndDelete(product_id);
    res.send("Product deleted!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting product");
  }
};

