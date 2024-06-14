import mongoose from "mongoose";

const options = { discriminatorKey: 'productType', collection: 'products' };

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
}, options);

// Pre-save hook to convert category to lowercase
productSchema.pre('save', function(next) {
  this.category = this.category.toLowerCase();
  next();
});

const Product = mongoose.model("Product", productSchema);

const bookSchema = new mongoose.Schema({
  author: { type: String, required: true }
}, options);

const clothsSchema = new mongoose.Schema({
  size: { type: String, required: true }
}, options);

const shoeSchema = new mongoose.Schema({
  brand: { type: String, required: true }
}, options);

const electronicsSchema = new mongoose.Schema({
  brand: { type: String, required: true }
}, options);

const Book = Product.discriminator('Book', bookSchema);
const Shoe = Product.discriminator('Shoe', shoeSchema);
const Cloths = Product.discriminator('Cloths', clothsSchema);
const Electronics = Product.discriminator('warrenty', electronicsSchema);

export { Product, Book, Shoe, Cloths, Electronics };
