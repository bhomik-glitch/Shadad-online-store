import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

interface Product {
  _id: string;
  title: string;
  price: number;
  images: string[];
  description?: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [mainIdx, setMainIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`${import.meta.env.VITE_API_BASE_URL}/products/${id}`)
      .then(async res => {
        if (!res.ok) throw new Error('Failed to fetch product');
        try {
          return await res.json();
        } catch (err) {
          const text = await res.text();
          console.error('Failed to parse JSON. Response was:', text);
          throw new Error('Invalid JSON from server');
        }
      })
      .then(data => {
        setProduct(data);
        setMainIdx(0);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Error loading product');
        setLoading(false);
      });
  }, [id]);

  const goToPrev = () => setMainIdx((idx: number) => Math.max(0, idx - 1));
  const goToNext = () => setMainIdx((idx: number) => product && product.images ? Math.min(product.images.length - 1, idx + 1) : 0);

  const handleAddToCart = async () => {
    if (!id || !product) return;
    setIsAddingToCart(true);
    setMessage(null);
    try {
      await addToCart({ productId: id, quantity });
      setMessage({ text: 'Item added to cart successfully!', type: 'success' });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({ text: error instanceof Error ? error.message : 'Failed to add item to cart', type: 'error' });
      setTimeout(() => setMessage(null), 5000);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-screen bg-neutral-50 flex justify-center items-center py-10">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-orange mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="min-h-screen bg-neutral-50 flex justify-center items-center py-10">
        <div className="text-center">
          <p className="text-red-600 font-semibold">{error || 'Product not found'}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-neutral-50 flex justify-center items-center py-10">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-10 max-w-5xl w-full">
        {/* Image Carousel */}
        <div className="flex flex-col items-center md:w-1/2 w-full">
          <div className="relative w-72 h-96 bg-neutral-100 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
            {/* Left Arrow */}
            <div className="absolute left-0 top-0 bottom-0 flex items-center z-10 h-full">
              <button
                onClick={goToPrev}
                disabled={mainIdx === 0}
                className="m-auto w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-black text-2xl font-bold text-black hover:bg-accent-orange hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous image"
              >
                &#8592;
              </button>
            </div>
            <img src={product.images && product.images[mainIdx] ? product.images[mainIdx] : ''} alt="Product" className="object-contain w-full h-full" />
            {/* Right Arrow */}
            <div className="absolute right-0 top-0 bottom-0 flex items-center z-10 h-full">
              <button
                onClick={goToNext}
                disabled={!product.images || mainIdx === product.images.length - 1}
                className="m-auto w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-black text-2xl font-bold text-black hover:bg-accent-orange hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next image"
              >
                &#8594;
              </button>
            </div>
          </div>
          {/* Thumbnails */}
          <div className="hidden md:flex gap-2 mt-2">
            {product.images && product.images.map((img: string, idx: number) => (
              <button key={idx} onClick={() => { setMainIdx(idx); }} className={`w-16 h-16 rounded-lg border-2 ${mainIdx === idx ? 'border-accent-orange' : 'border-transparent'} overflow-hidden bg-neutral-100`}>
                <img src={img} alt={`Thumb ${idx+1}`} className="object-contain w-full h-full" />
              </button>
            ))}
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {product.title}
          </h1>
          <div className="text-xl font-semibold mb-4">
            ₹{product.price}
          </div>
          {/* Message Display */}
          {message && (
            <div className={`mb-4 p-3 rounded-lg ${
              message.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {message.text}
            </div>
          )}
          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity:</label>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex gap-4 mb-4 flex-wrap">
            <button 
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className={`btn-primary ${isAddingToCart ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isAddingToCart ? 'Adding...' : 'ADD TO CART'}
            </button>
            <button 
              onClick={handleBuyNow}
              className="btn-secondary"
            >
              BUY IT NOW
            </button>
          </div>
          <div className="text-text-dark/70 mb-4" style={{ whiteSpace: 'pre-line' }}>
            {product.description || 'No description available.'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail; 