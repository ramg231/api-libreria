import mongoose from 'mongoose';

const ventaSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true,
    enum: ['caja', 'unidad']
  },
  cantidad: {
    type: Number,
    required: true
  }
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  codcategoria: {
    type: Number,
    required: true
  },
  codsubcategoria: {
    type: Number,
    required: true
  },
  marca: {
    type: String,  
    required: true
  },
  precio: {
    type: Number,  
    required: true
  },  
  descripcion: {
    type: String,  
    required: false
  },
  color: {
    type: String,  
    required: false
  },
  venta: {
    type: ventaSchema,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
