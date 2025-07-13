import express from 'express';
import { getCart, updateCart, deleteCartItem } from '../controllers/cartController.js';
import { auth } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/', auth, getCart);
router.post('/', auth, updateCart);
router.delete('/:pid', auth, deleteCartItem);

export default router;
