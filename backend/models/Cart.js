import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: String,
  products: [{ productId: String, quantity: Number }]
});

export default mongoose.model('Cart', cartSchema);
