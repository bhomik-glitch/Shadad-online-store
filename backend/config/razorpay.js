// Razorpay instance configured using environment variables
import Razorpay from 'razorpay';

let instance = null;
if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_SECRET) {
  instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET
  });
} else {
  console.warn('Razorpay keys are missing. Payment features are disabled.');
}

export default instance; 