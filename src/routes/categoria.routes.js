import express from 'express';
import {getCategorias,  crearCategoria} from '../controllers/category.controller.js';

const router = express.Router();

// Rutas para CRUD de categorías
router.get('/categories', getCategorias);
router.post('/addcat', crearCategoria);
 
export default router;