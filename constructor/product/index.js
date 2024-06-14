import express from "express";
import { Product, Book, Shoe, Cloths, Electronics } from '../../models/Product.js';
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
      const { title, description, price, discountPercentage, rating, stock, brand, category, author, size, warranty } = req.body;

      // Check if files are uploaded
      const thumbnail = req.files['thumbnail'] ? req.files['thumbnail'][0].path : '';
      const images = req.files['images'] ? req.files['images'].map(file => file.path) : [];

      // Create the base product data
      const baseProductData = {
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        category,
        thumbnail,
        images
      };

      let newProduct;

      // Instantiate the correct model based on the category
      switch (category.toLowerCase()) {
        case 'books':
          newProduct = new Book({
            ...baseProductData,
            author
          });
          break;
        case 'cloths':
          newProduct = new Cloths({
            ...baseProductData,
            size
          });
          break;
        case 'shoe':
          newProduct = new Shoe({
            ...baseProductData,
            brand
          });
          break;
        case 'electronics':
          newProduct = new Electronics({
            ...baseProductData,
            brand,
            warranty
          });
          break;
        default:
          newProduct = new Product(baseProductData);
      }

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

// Get products by category
export const getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
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

