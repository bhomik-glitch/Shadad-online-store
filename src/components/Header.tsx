import React, { useState, useRef } from 'react';
import { ShoppingCart } from 'lucide-react';
import logo from '../assets/WhatsApp Image 2025-08-02 at 15.01.32_bc63c5c0.jpg';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import homeIcon from '../assets/home-button-svgrepo-com.svg';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
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
  // Add state and ref for Fabric dropdown
  const [fabricDropdownOpen, setFabricDropdownOpen] = useState(false);
  const fabricDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


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

  // Fabric dropdown handlers
  const handleFabricEnter = () => {
    if (fabricDropdownTimeout.current) clearTimeout(fabricDropdownTimeout.current);
    setFabricDropdownOpen(true);
  };
  const handleFabricLeave = () => {
    fabricDropdownTimeout.current = setTimeout(() => setFabricDropdownOpen(false), 150);
  };

  return (
    <header className="z-50 w-full">
      {/* Main Bar */}
      <nav className="bg-white w-full shadow-sm border-b border-[#e5dbc7]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-2 px-4">
          {/* Header Bar: Three columns for centering */}
          <div className="hidden md:flex flex-1"></div>
          <div className="flex flex-col items-center">
            <Link to="/" className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-green/20 shadow-lg bg-white flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-20 h-20 object-cover rounded-full" />
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4 text-[#6b5e4e] md:flex-1 md:justify-end md:static absolute left-4 top-6">
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
          {/* Hamburger Icon for mobile */}
          <div className="flex md:hidden absolute right-4 top-6 z-50">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </nav>
      {/* Desktop Menu Bar */}
      <div className="w-full border-t border-[#e5dbc7] bg-white hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center items-center space-x-10 py-2 text-base font-medium">
            <li className="relative group cursor-pointer">
              <Link to="/" className="hover:text-accent-orange">Home</Link>
            </li>
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
                  className="absolute left-0 top-full mt-2 w-[800px] bg-white shadow-xl rounded-lg p-8 flex z-50 border border-gray-200 overflow-hidden"
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
                      <li><Link to="/shop" className="hover:underline">Kurtas</Link></li>
                      <li><Link to="/shop" className="hover:underline">Anarkalis</Link></li>
                      <li><Link to="/shop" className="hover:underline">Lehengas</Link></li>
                      <li><Link to="/shop" className="hover:underline">Gowns</Link></li>
                      <li><Link to="/shop" className="hover:underline">Palazzos</Link></li>
                      <li><Link to="/shop" className="hover:underline">Shararas</Link></li>
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
                  className="absolute left-0 top-full mt-2 w-[600px] bg-white shadow-xl rounded-lg p-6 flex z-50 border border-gray-200 overflow-hidden"
                  onMouseEnter={handleSareesEnter}
                  onMouseLeave={handleSareesLeave}
                >
                  {/* Left side: text links */}
                  <div className="w-1/2 pr-6">
                    <ul className="space-y-3 text-sm">
                      <li><Link to="/sarees?type=kota" className="hover:underline">Kota</Link></li>
                      <li><Link to="/sarees?type=cotton" className="hover:underline">Cotton</Link></li>
                      <li><Link to="/sarees?type=silk" className="hover:underline">Silk</Link></li>
                      <li><Link to="/sarees?type=silk-and-cotton" className="hover:underline">Silk and Cotton</Link></li>
                      <li><Link to="/sarees?type=wool" className="hover:underline">Wool</Link></li>
                    </ul>
                  </div>
                  {/* Right side: 4 saree images */}
                  <div className="grid grid-cols-2 gap-4 w-1/2">
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
                  className="absolute left-0 top-full mt-2 w-[600px] bg-white shadow-xl rounded-lg p-6 flex z-50 border border-gray-200 overflow-hidden"
                  onMouseEnter={handleBlouseEnter}
                  onMouseLeave={handleBlouseLeave}
                >
                  {/* Left side: text links */}
                  <div className="w-1/2 pr-6">
                    <ul className="space-y-3 text-sm">
                      <li><Link to="/blouse?type=piece" className="hover:underline">blouse piece</Link></li>
                      <li><Link to="/blouse?type=stitched" className="hover:underline">stitched blouse</Link></li>
                      <li><Link to="/blouse?type=karigari" className="hover:underline">karigari blouse</Link></li>
                    </ul>
                  </div>
                  {/* Right side: 4 blouse images */}
                  <div className="grid grid-cols-2 gap-4 w-1/2">
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752595966/IMG-20250715-WA0023_a88rak.jpg" alt="Blouse 1" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752595966/IMG-20250715-WA0022_dejdel.jpg" alt="Blouse 2" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752595966/IMG-20250715-WA0021_uxoe2x.jpg" alt="Blouse 3" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                    <img src="https://res.cloudinary.com/dn3k5szqx/image/upload/v1752595965/IMG-20250715-WA0020_fd1c0r.jpg" alt="Blouse 4" className="h-32 w-32 object-cover rounded-lg border border-gray-300" />
                  </div>
                </div>
              )}
            </li>
            {/* Fabric top-level menu item with dropdown */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={handleFabricEnter}
              onMouseLeave={handleFabricLeave}
            >
              <span className={fabricDropdownOpen ? 'text-accent-orange font-semibold' : ''}>
                Fabric <span className="ml-1">&#9662;</span>
              </span>
              {fabricDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-48 bg-white shadow-xl rounded-lg p-4 z-50 border border-gray-200 overflow-hidden"
                  onMouseEnter={handleFabricEnter}
                  onMouseLeave={handleFabricLeave}
                >
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/fabric?type=kota" className="hover:underline">Kota</Link></li>
                    <li><Link to="/fabric?type=cotton" className="hover:underline">Cotton</Link></li>
                    <li><Link to="/fabric?type=silk" className="hover:underline">Silk</Link></li>
                    <li><Link to="/fabric?type=silk-and-cotton" className="hover:underline">Silk and Cotton</Link></li>
                    <li><Link to="/fabric?type=wool" className="hover:underline">Wool</Link></li>
                    <li><Link to="/fabric?type=3-piece-suit" className="hover:underline">3 Piece suit</Link></li>
                    <li><Link to="/fabric?type=2-piece-suit" className="hover:underline">2 Piece Suit</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li className="relative group cursor-pointer"><span>Accessories</span></li>
            <li className="relative group cursor-pointer"><span>Shadad Living</span></li>
            <li className="relative group cursor-pointer"><span>The Shahad story</span></li>
            <li className="relative group cursor-pointer text-red-600 font-semibold"><span>Sale</span></li>
          </ul>
        </div>
      </div>
      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)}></div>
      )}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 md:hidden`}>
        <div className="flex flex-col p-6 space-y-4 text-base font-medium">
          <Link to="/" className="hover:text-accent-orange" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          {/* Clothing dropdown for mobile */}
          <div>
            <button className="w-full text-left flex items-center justify-between" onClick={() => setClothingDropdownOpen(!clothingDropdownOpen)}>
              <span className={clothingDropdownOpen ? 'text-accent-orange font-semibold' : ''}>Clothing</span>
              <span>&#9662;</span>
            </button>
            {clothingDropdownOpen && (
              <div className="pl-4 pt-2 space-y-1">
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>All Clothing</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>New Arrivals</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Dresses & Jumpsuits</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>The Fabric</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Tops & Blouses</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Jackets & Blazers</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Co-ord Sets</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Wrap Dresses</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Kaftans</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Bottom Wear</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Dupattas, Scarfs & Stoles</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Night Suits</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Kurtas</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Anarkalis</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Lehengas</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Gowns</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Palazzos</Link>
                <Link to="/shop" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Shararas</Link>
              </div>
            )}
          </div>
          {/* Sarees dropdown for mobile */}
          <div>
            <button className="w-full text-left flex items-center justify-between" onClick={() => setSareesDropdownOpen(!sareesDropdownOpen)}>
              <span className={sareesDropdownOpen ? 'text-accent-orange font-semibold' : ''}>Sarees</span>
              <span>&#9662;</span>
            </button>
            {sareesDropdownOpen && (
              <div className="pl-4 pt-2 space-y-1">
                <span className="block text-gray-500">Saree Gallery</span>
                <Link to="/sarees?type=kota" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Kota</Link>
                <Link to="/sarees?type=cotton" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Cotton</Link>
                <Link to="/sarees?type=silk" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Silk</Link>
                <Link to="/sarees?type=silk-and-cotton" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Silk and Cotton</Link>
                <Link to="/sarees?type=wool" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Wool</Link>
              </div>
            )}
          </div>
          {/* Blouse dropdown for mobile */}
          <div>
            <button className="w-full text-left flex items-center justify-between" onClick={() => setBlouseDropdownOpen(!blouseDropdownOpen)}>
              <span className={blouseDropdownOpen ? 'text-accent-orange font-semibold' : ''}>Blouse</span>
              <span>&#9662;</span>
            </button>
            {blouseDropdownOpen && (
              <div className="pl-4 pt-2 space-y-1">
                <span className="block text-gray-500">Blouse Gallery</span>
                <Link to="/blouse?type=piece" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>blouse piece</Link>
                <Link to="/blouse?type=stitched" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>stitched blouse</Link>
                <Link to="/blouse?type=karigari" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>karigari blouse</Link>
              </div>
            )}
          </div>
          {/* Fabric dropdown for mobile */}
          <div>
            <button className="w-full text-left flex items-center justify-between" onClick={() => setFabricDropdownOpen(!fabricDropdownOpen)}>
              <span className={fabricDropdownOpen ? 'text-accent-orange font-semibold' : ''}>Fabric</span>
              <span>&#9662;</span>
            </button>
            {fabricDropdownOpen && (
              <div className="pl-4 pt-2 space-y-1">
                <Link to="/fabric?type=kota" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Kota</Link>
                <Link to="/fabric?type=cotton" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Cotton</Link>
                <Link to="/fabric?type=silk" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Silk</Link>
                <Link to="/fabric?type=silk-and-cotton" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Silk and Cotton</Link>
                <Link to="/fabric?type=wool" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>Wool</Link>
                <Link to="/fabric?type=3-piece-suit" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>3 Piece suit</Link>
                <Link to="/fabric?type=2-piece-suit" className="block hover:underline" onClick={() => setMobileMenuOpen(false)}>2 Piece Suit</Link>
              </div>
            )}
          </div>
          <Link to="/shop" className="hover:text-accent-orange" onClick={() => setMobileMenuOpen(false)}>Accessories</Link>
          <Link to="/shop" className="hover:text-accent-orange" onClick={() => setMobileMenuOpen(false)}>Shadad Living</Link>
          <Link to="/shop" className="hover:text-accent-orange" onClick={() => setMobileMenuOpen(false)}>The Shahad story</Link>
          <Link to="/shop" className="hover:text-red-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>Sale</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;