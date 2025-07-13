import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import ShippingReturns from './components/ShippingReturns';
import { Link } from 'react-router-dom';

function ScrollToSectionOnLoad() {
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Wait for DOM to render
      }
    }
  }, [location]);
  return null;
}

function App() {
  return (
    <CartProvider>
    <Router>
      <ScrollToSectionOnLoad />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              {/* Homepage content */}
              <Shop />
              <About />
              <Services />
              <Testimonials />
              <Gallery />
              <Contact />
            </main>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/shipping-returns" element={<ShippingReturns />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
      {/* Secure payment snippet in the footer */}
      <div className="text-center py-2 text-sm text-gray-600">
        <span role="img" aria-label="lock">🔒</span> 100% Secure Payments — All transactions are processed securely through Razorpay.
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;