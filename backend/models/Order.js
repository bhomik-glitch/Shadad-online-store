import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: String,
  products: [{ productId: String, quantity: Number }],
  amount: Number,
  status: { type: String, default: 'pending' },
  paymentId: String,
  razorpayOrderId: String
});

export default mongoose.model('Order', orderSchema);
