import express from 'express';
import { getProducts, getProduct, addProduct } from '../controllers/productController.js';

const router = express.Router();
router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', addProduct); // only admin

export default router;
