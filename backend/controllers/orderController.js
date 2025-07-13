import crypto from 'crypto';
import razorpay from '../config/razorpay.js';
import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  return res.status(403).json({ error: 'razorpay verification is pending' });
};

export const verifyPayment = async (req, res) => {
  return res.status(403).json({ error: 'razorpay verification is pending' });
};
