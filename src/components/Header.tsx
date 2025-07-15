import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingCart, Globe } from 'lucide-react';
import logo from '../assets/logo.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import homeIcon from '../assets/home-button-svgrepo-com.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { getTotalItems } = useCart();
  // Add state for dropdown
  const [clothingDropdownOpen, setClothingDropdownOpen] = useState(false);
  const clothingDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Add state and ref for Sarees dropdown
  const [sareesDropdownOpen, setSareesDropdownOpen] = useState(false);
  const sareesDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Add state and ref for Blouse dropdown
  const [blouseDropdownOpen, setBlouseDropdownOpen] = useState(false);
  const blouseDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Remove Sarees dropdown state and handlers

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

  const offerText = 'Get 10% off on your first purchase with code "WelcomeOkhai".';
  const country = 'INR';
  const countryFlag = '��🇳'; // You can use an emoji or an image
  const contactNumbers = ['079-66131721', '+91 6359 021 222'];

  const handleClothingEnter = () => {
    if (clothingDropdownTimeout.current) clearTimeout(clothingDropdownTimeout.current);
    setClothingDropdownOpen(true);
  };
  const handleClothingLeave = () => {
    clothingDropdownTimeout.current = setTimeout(() => setClothingDropdownOpen(false), 150);
  };

  // Sarees dropdown handlers
  const handleSareesEnter = () => {
    if (sareesDropdownTimeout.current) clearTimeout(sareesDropdownTimeout.current);
    setSareesDropdownOpen(true);
  };
  const handleSareesLeave = () => {
    sareesDropdownTimeout.current = setTimeout(() => setSareesDropdownOpen(false), 150);
  };

  // Blouse dropdown handlers
  const handleBlouseEnter = () => {
    if (blouseDropdownTimeout.current) clearTimeout(blouseDropdownTimeout.current);
    setBlouseDropdownOpen(true);
  };
  const handleBlouseLeave = () => {
    blouseDropdownTimeout.current = setTimeout(() => setBlouseDropdownOpen(false), 150);
  };

  // Remove Sarees dropdown handlers

  return (
    <header className="z-50 w-full">
      {/* Main Bar */}
      <nav className="bg-white w-full shadow-sm border-b border-[#e5dbc7]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-2 px-4">
          {/* Logo and Contact */}
          <div className="flex w-full justify-center">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover shadow-lg border-4 border-white bg-white" />
                <span className="text-2xl font-bold" style={{ fontFamily: 'Dancing Script, cursive' }}>by NAINCI</span>
              </Link>
            </div>
            {/* Contact info removed */}
          </div>
          {/* Icons */}
          <div className="flex items-center space-x-4 text-[#6b5e4e]">
            <Link to="/" className="hover:text-accent-orange">
              <img src={homeIcon} alt="Home" className="h-5 w-5" />
              </Link>
            <Link to="/login" className="hover:text-accent-orange">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              </Link>
            <Link to="/cart" className="relative hover:text-accent-orange">
              <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </div>
        </div>
      </nav>
      {/* Menu Bar */}
      <div className="w-full border-t border-[#e5dbc7] bg-white">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center items-center space-x-10 py-2 text-base font-medium">
            <li className="relative group cursor-pointer"><span>Home</span></li>
            <li
              className="relative group cursor-pointer"
              onMouseEnter={handleClothingEnter}
              onMouseLeave={handleClothingLeave}
            >
              <span className={clothingDropdownOpen ? 'text-accent-orange font-semibold' : ''}>
                Clothing <span className="ml-1">&#9662;</span>
              </span>
              {clothingDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-[800px] bg-white shadow-xl rounded-lg p-8 flex z-50 border border-gray-200"
                  onMouseEnter={handleClothingEnter}
                  onMouseLeave={handleClothingLeave}
                >
                  {/* Dropdown content as before */}
                  <div className="mr-12 min-w-[150px]">
                    <div className="font-semibold mb-2">Women</div>
                    <ul className="space-y-1 text-sm">
                      <li><Link to="/shop" className="hover:underline">All Clothing</Link></li>
                      <li><Link to="/shop" className="hover:underline">New Arrivals</Link></li>
                      <li><Link to="/shop" className="hover:underline">Dresses & Jumpsuits</Link></li>
                      <li><Link to="/shop" className="hover:underline">The Fabric</Link></li>
                      <li><Link to="/shop" className="hover:underline">Tops & Blouses</Link></li>
                      <li><Link to="/shop" className="hover:underline">Jackets & Blazers</Link></li>
                      <li><Link to="/shop" className="hover:underline">Co-ord Sets</Link></li>
                      <li><Link to="/shop" className="hover:underline">Wrap Dresses</Link></li>
                      <li><Link to="/shop" className="hover:underline">Kaftans</Link></li>
                      <li><Link to="/shop" className="hover:underline">Bottom Wear</Link></li>
                      <li><Link to="/shop" className="hover:underline">Dupattas, Scarfs & Stoles</Link></li>
                      <li><Link to="/shop" className="hover:underline">Night Suits</Link></li>
                    </ul>
                  </div>
                  {/* Men */}
                  <div className="mr-12 min-w-[100px]">
                    <div className="font-semibold mb-2">Men</div>
                    <ul className="space-y-1 text-sm">
                      <li><Link to="/shop" className="hover:underline">The Fabric</Link></li>
                      <li><Link to="/shop" className="hover:underline">Bottoms</Link></li>
                      <li><Link to="/shop" className="hover:underline">Shirts</Link></li>
                      <li><Link to="/shop" className="hover:underline">Shorts</Link></li>
                    </ul>
                  </div>
                  {/* Kids */}
                  <div className="mr-12 min-w-[120px]">
                    <div className="font-semibold mb-2">Kids</div>
                    <ul className="space-y-1 text-sm">
                      <li><Link to="/shop" className="hover:underline">Kids Clothing</Link></li>
                    </ul>
                  </div>
                  {/* Crafts */}
                  <div className="min-w-[180px]">
                    <div className="font-semibold mb-2">Crafts</div>
                    <ul className="space-y-1 text-sm">
                      <li><Link to="/shop" className="hover:underline">Hand Embroidered</Link></li>
                      <li><Link to="/shop" className="hover:underline">Ikat</Link></li>
                      <li><Link to="/shop" className="hover:underline">Suf Embroidery</Link></li>
                      <li><Link to="/shop" className="hover:underline">Ajrakh</Link></li>
                      <li><Link to="/shop" className="hover:underline">Neela - Indigo</Link></li>
                      <li><Link to="/shop" className="hover:underline">Mirror Work</Link></li>
                      <li><Link to="/shop" className="hover:underline">Tie and Dye</Link></li>
                      <li><Link to="/shop" className="hover:underline">Mukaish</Link></li>
                      <li><Link to="/shop" className="hover:underline">Handblock Print</Link></li>
                      <li><Link to="/shop" className="hover:underline">Hand Painted - Apparel</Link></li>
                      <li><Link to="/shop" className="hover:underline">Gota Patti</Link></li>
                      <li><Link to="/shop" className="hover:underline">Kalamkari</Link></li>
                      <li><Link to="/shop" className="hover:underline">Jamdani</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            {/* Sarees dropdown with 4 boxes */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={handleSareesEnter}
              onMouseLeave={handleSareesLeave}
            >
              <span className={sareesDropdownOpen ? 'text-accent-orange font-semibold' : ''}>
                Sarees <span className="ml-1">&#9662;</span>
              </span>
              {sareesDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-[400px] bg-white shadow-xl rounded-lg p-6 flex z-50 border border-gray-200"
                  onMouseEnter={handleSareesEnter}
                  onMouseLeave={handleSareesLeave}
                >
                  {/* 4 saree images */}
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477354/IMG-20250714-WA0025_lv63hc.jpg" alt="Saree 1" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477353/IMG-20250714-WA0024_uggrwu.jpg" alt="Saree 2" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477346/IMG-20250714-WA0011_umskna.jpg" alt="Saree 3" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477347/IMG-20250714-WA0013_gtq6xm.jpg" alt="Saree 4" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                  </div>
                </div>
              )}
            </li>
            {/* Blouse dropdown with 4 boxes */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={handleBlouseEnter}
              onMouseLeave={handleBlouseLeave}
            >
              <span className={blouseDropdownOpen ? 'text-accent-orange font-semibold' : ''}>
                Blouse <span className="ml-1">&#9662;</span>
              </span>
              {blouseDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-[400px] bg-white shadow-xl rounded-lg p-6 flex z-50 border border-gray-200"
                  onMouseEnter={handleBlouseEnter}
                  onMouseLeave={handleBlouseLeave}
                >
                  {/* 4 placeholder boxes for blouse images */}
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752595966/IMG-20250715-WA0023_a88rak.jpg" alt="Blouse 1" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752595966/IMG-20250715-WA0022_dejdel.jpg" alt="Blouse 2" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752595966/IMG-20250715-WA0021_uxoe2x.jpg" alt="Blouse 3" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752595965/IMG-20250715-WA0020_fd1c0r.jpg" alt="Blouse 4" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752595965/IMG-20250715-WA0016_j70ajc.jpg" alt="Blouse 5" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752595966/IMG-20250715-WA0024_wcfcii.jpg" alt="Blouse 6" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                  </div>
                </div>
              )}
            </li>
            <li className="relative group cursor-pointer"><span>Accessories</span></li>
            <li className="relative group cursor-pointer"><span>Artisans</span></li>
            <li className="relative group cursor-pointer"><span>The Shahad story</span></li>
            <li className="relative group cursor-pointer text-red-600 font-semibold"><span>Sale</span></li>
          </ul>
            </div>
          </div>
    </header>
  );
};

export default Header;