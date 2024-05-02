import express from "express";
import Product from "../../models/Product.js"; // Assuming Product model is imported from a file

const app = express();
app.use(express.json()); // Required to parse JSON bodies

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      discountPercentage: req.body.discountPercentage,
      rating: req.body.rating,
      stock: req.body.stock,
      brand: req.body.brand,
      category: req.body.category,
      thumbnail: req.body.thumbnail,
      images: req.body.images,
    });

    await newProduct.save(); // Use save() method to save the new product
    res.send("Product saved to the database!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving product to the database");
  }
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

