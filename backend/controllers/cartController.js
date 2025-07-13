import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

// Helper to enrich cart products with product details
const enrichCartProducts = async (cart) => {
  if (!cart || !cart.products || cart.products.length === 0) return [];
  const productIds = cart.products.map(p => p.productId);
  let products = [];
  try {
    products = await Product.find({ _id: { $in: productIds } });
  } catch (err) {
    // If Product.find fails, return all as unknown
    return cart.products.map(item => ({
      productId: item.productId,
      quantity: item.quantity,
      name: 'Unknown Product',
      price: 0,
      image: '',
      error: 'Product lookup failed',
    }));
  }
  return cart.products.map(item => {
    const product = products.find(p => p._id.toString() === item.productId);
    if (!product) {
      // Product not found, return placeholder
      return {
        productId: item.productId,
        quantity: item.quantity,
        name: 'Unknown Product',
        price: 0,
        image: '',
        error: 'Product not found',
      };
    }
    return {
      productId: item.productId,
      quantity: item.quantity,
      name: product.title,
      price: product.price,
      image: product.images && product.images.length > 0 ? product.images[0] : '',
    };
  });
};

export const getCart = async (req, res) => {
  try {
  const cart = await Cart.findOne({ userId: req.user.id });
    const products = await enrichCartProducts(cart);
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cart', details: err.message });
  }
};

export const updateCart = async (req, res) => {
  try {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    cart = new Cart({ userId: req.user.id, products: [{ productId, quantity }] });
  } else {
    const index = cart.products.findIndex(p => p.productId === productId);
    if (index > -1) cart.products[index].quantity = quantity;
    else cart.products.push({ productId, quantity });
  }

  await cart.save();
    const products = await enrichCartProducts(cart);
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update cart', details: err.message });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
  const { pid } = req.params;
  const cart = await Cart.findOne({ userId: req.user.id });
  cart.products = cart.products.filter(p => p.productId !== pid);
  await cart.save();
    const products = await enrichCartProducts(cart);
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete cart item', details: err.message });
  }
};
