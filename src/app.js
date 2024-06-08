import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import cateRoutes from './routes/categoria.routes.js';
import { URI } from './config/db.config.js';

dotenv.config();

const app = express();

app.use(express.json());

// Conectar a MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Rutas
app.use(authRoutes);
app.use(productRoutes);
app.use(cateRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
