import express from 'express';
import { addProduct, getProducts, getProduct, updateProductDetails, removeProduct } from '../controllers/product.controller.js';
import protect from '../middlewares/auth.js';
const router = express.Router();
 
 
router.post('/product/add',protect, addProduct);
router.get("/product/view",protect, getProducts)

// usando id producto

router.post('/buscarproducto/:id',protect,getProduct)
router.put('/editarproducto/:id',protect,updateProductDetails)
router.delete('/eliminarproducto/:id',protect,removeProduct)
 
  
 


 

export default router;
