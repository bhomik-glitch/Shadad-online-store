import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

// Only connect to MongoDB if MONGO_URI is present and valid
if (process.env.MONGO_URI && (process.env.MONGO_URI.startsWith('mongodb://') || process.env.MONGO_URI.startsWith('mongodb+srv://'))) {
  connectDB();
} else {
  console.warn('MongoDB URI is missing or invalid. Database features are disabled.');
}

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

app.listen(process.env.PORT || 5000, '0.0.0.0', () => console.log(`Server running on http://0.0.0.0:${process.env.PORT || 5000}`));
