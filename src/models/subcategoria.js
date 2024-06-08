import mongoose from 'mongoose';

const subcategorySchema = new mongoose.Schema({
  codsubcategoria: {
    type: String,
    required: true,
    unique: true
  },
  nombresubcat: {
    type: String,
    required: true
  },
  codcategoria: {
    type: String,
    required: true,
    ref: 'Category' // Referencia al modelo de categoría
  }
});

const Subcategory = mongoose.model('Subcategory', subcategorySchema);

export default Subcategory;
