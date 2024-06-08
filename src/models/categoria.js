import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  codcategoria: {
    type: String,
    required: true,
    unique: true
  },
  nombrecat: {
    type: String,
    required: true
  }
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
