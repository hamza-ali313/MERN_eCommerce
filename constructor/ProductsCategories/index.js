import express from "express";
import category from "../../models/Categories.js"; // Assuming Product model is imported from a file
import upload from "../../upload.js";
const app = express();
app.use(express.json()); // Required to parse JSON bodies

// Create a new product
export const createCategory = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }
    try {
      const {name} = req.body;
      const img = req.files["img"] ? req.files["img"][0].path : "";
      const newCategory = new category({
        name,
        img
      });
      await newCategory.save();
      res.send("Product saved to the database!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error saving product to the database");
    }
  });
};

// Get all products
export const getCategories = async (req, res) => {
  try {
    const productList = await category.find();
    res.json(productList);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching categories from the database");
  }
};

// Update a product based on the id
export const updateCategory = async (req, res) => {
  try {
    const category_id = req.params.id;
    await category.findByIdAndUpdate(category_id, req.body);
    res.send("category updated successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating category");
  }
};

// Delete a product based on the id
export const deleteCategory = async (req, res) => {
  try {
    const category_id = req.params.id;
    await category.findByIdAndDelete(category_id);
    res.send("category deleted!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting product");
  }
};
