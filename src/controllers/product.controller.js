import Product from '../models/product.js';

export const addProduct = async (req, res) => {
  const { name, category, stock, marca, venta } = req.body;

  if (!venta || !venta.tipo || !venta.cantidad) {
    return res.status(400).json({ message: 'La información de venta es requerida' });
  }

  const product = new Product({ name, category, stock, marca, venta });

  try {
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar el producto', error });
  }
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const updateProductDetails = async (req, res) => {
  const { name, category, stock } = req.body;
  const product = await Product.findByIdAndUpdate(req.params.id, { name, category, stock }, { new: true });
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const removeProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
