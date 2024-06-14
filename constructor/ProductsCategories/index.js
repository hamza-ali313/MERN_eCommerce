import express from "express";
import Category from "../../models/Categories.js"; // Assuming Category model is imported from a file
import upload from "../../upload.js";

const app = express();
app.use(express.json()); // Required to parse JSON bodies

// Create a new category
export const createCategory = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    try {
      const { name,category } = req.body;
      const img = req.files?.["img"] ? req.files["img"][0].path : "";
      const newCategory = new Category({ name, img ,category});
      await newCategory.save();
      res.status(201).json({ message: "Category saved to the database!", category: newCategory });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error saving category to the database", error: error.message });
    }
  });
};

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categoryList = await Category.find();
    res.status(200).json(categoryList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching categories from the database", error: error.message });
  }
};

// Update a category based on the id
export const updateCategory = async (req, res) => {
  try {
    const category_id = req.params.id;
    const updatedCategory = await Category.findByIdAndUpdate(category_id, req.body, { new: true });
    res.status(200).json({ message: "Category updated successfully!", category: updatedCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating category", error: error.message });
  }
};

// Delete a category based on the id
export const deleteCategory = async (req, res) => {
  try {
    const category_id = req.params.id;
    await Category.findByIdAndDelete(category_id);
    res.status(200).json({ message: "Category deleted!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting category", error: error.message });
  }
};
