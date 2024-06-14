import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

categorySchema.pre('save', function(next) {
  this.category = this.category.toLowerCase();
  next();
});

const category = mongoose.model("category", categorySchema);

export default category;
