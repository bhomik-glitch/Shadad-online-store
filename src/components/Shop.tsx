import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

interface Product {
  _id: string;
  title: string;
  price: number;
  images: string[];
}

const Shop: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('/api/products')
      .then(async res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        try {
          return await res.json();
        } catch (err) {
          const text = await res.text();
          console.error('Failed to parse JSON. Response was:', text);
          throw new Error('Invalid JSON from server');
        }
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Error loading products');
        setLoading(false);
      });
  }, []);

  const handleQuickAddToCart = async (productId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAddingToCart(productId);
    setMessage(null);
    try {
      await addToCart({ productId, quantity: 1 });
      setMessage({ text: 'Added to cart!', type: 'success' });
      setTimeout(() => setMessage(null), 2000);
    } catch (error) {
      setMessage({ text: error instanceof Error ? error.message : 'Failed to add to cart', type: 'error' });
      setTimeout(() => setMessage(null), 3000);
    } finally {
      setAddingToCart(null);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  if (loading) {
    return (
      <section className="py-20 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-orange mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 font-semibold">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading cultural-border">Shop</h2>
          <p className="text-lg text-text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Browse all our products here.
          </p>
        </div>
        {/* Message Display */}
        {message && (
          <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-lg shadow-lg ${
            message.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {message.text}
          </div>
        )}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {products.map((product, i) => (
              <div key={product._id} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 w-full h-full relative">
                <Link to={`/product/${product._id}`} className="flex flex-col items-center w-full h-full">
                <div className="w-48 h-64 flex items-center justify-center mb-4 bg-neutral-100 rounded-xl overflow-hidden">
                  <img
                      src={product.images && product.images[0] ? product.images[0] : `https://via.placeholder.com/120x80?text=Product`}
                      alt={product.title}
                    className="object-contain w-full h-full"
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
                </div>
                  <h3 className="text-lg font-bold mb-2 text-center">{product.title}</h3>
                  <p className="text-text-dark/70 text-center mb-2">₹{product.price}</p>
                <button className="btn-secondary mt-2">View Details</button>
              </Link>
                {/* Quick Add to Cart Button */}
                <button
                  onClick={(e) => handleQuickAddToCart(product._id, e)}
                  disabled={addingToCart === product._id}
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-accent-orange text-white flex items-center justify-center hover:bg-orange-600 transition-colors ${
                    addingToCart === product._id ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  title="Add to cart"
                >
                  {addingToCart === product._id ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    '+'
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop; 