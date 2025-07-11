import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import logo from '../assets/logo.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const navSectionLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];
  const navRouteLinks = [
    { to: '/shop', label: 'Shop' },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    isShop: boolean
  ) => {
    if (isShop) return; // Let Link handle /shop navigation
    e.preventDefault();
    const sectionId = href.replace('#', '');
    if (location.pathname !== '/') {
      navigate('/?section=' + sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Shahad Logo" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-serif text-2xl font-bold text-primary-green">Shahad</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Section links (scroll) */}
            {navSectionLinks.map((item) => (
              <Link
                key={item.href}
                to={location.pathname === '/' ? item.href : '/?section=' + item.href.replace('#', '')}
                className="text-text-dark hover:text-accent-orange transition-colors duration-300 font-medium"
                onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                  e.preventDefault();
                  const sectionId = item.href.replace('#', '');
                  if (location.pathname !== '/') {
                    navigate('/?section=' + sectionId);
                  } else {
                    const el = document.getElementById(sectionId);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            {/* Route links (pages) */}
            {navRouteLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-text-dark hover:text-accent-orange transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
            {/* Cart Icon */}
            <div className="relative">
              <Link to="/cart" className="text-text-dark hover:text-accent-orange transition-colors duration-300">
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </div>
            
            {/* Auth Button */}
            {isLoggedIn ? (
              <button onClick={handleLogout} className="ml-4 px-4 py-2 border rounded hover:bg-gray-100">Logout</button>
            ) : (
              <Link to="/login" className="ml-4 px-4 py-2 border rounded hover:bg-gray-100">Login/Signup</Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-dark hover:text-accent-orange transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-4">
              {/* Section links (scroll) */}
              {navSectionLinks.map((item) => (
                <Link
                  key={item.href}
                  to={location.pathname === '/' ? item.href : '/?section=' + item.href.replace('#', '')}
                  className="text-text-dark hover:text-accent-orange transition-colors duration-300 font-medium py-2"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const sectionId = item.href.replace('#', '');
                    if (location.pathname !== '/') {
                      navigate('/?section=' + sectionId);
                    } else {
                      const el = document.getElementById(sectionId);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
              {/* Route links (pages) */}
              {navRouteLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-text-dark hover:text-accent-orange transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Cart Icon for Mobile */}
              <Link to="/cart" className="flex items-center space-x-2 text-text-dark hover:text-accent-orange transition-colors duration-300 font-medium py-2">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
                {getTotalItems() > 0 && (
                  <span className="bg-accent-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
              
              {/* Auth Button for Mobile */}
              {isLoggedIn ? (
                <button onClick={handleLogout} className="px-4 py-2 border rounded hover:bg-gray-100">Logout</button>
              ) : (
                <Link to="/login" className="px-4 py-2 border rounded hover:bg-gray-100">Login/Signup</Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;