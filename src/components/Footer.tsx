import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo-removebg-preview.png';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-green text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="Shahad Logo" className="max-w-[48px] max-h-[48px] object-contain" />
              <span className="font-serif text-lg font-bold">Shahad</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Shahad by Nainci is a handcrafted clothing boutique that celebrates tradition with a modern twist. We specialize in beautifully designed handmade sarees and ethnic clothing, crafted with care and a deep love for Indian textile heritage.
            </p>
            <div className="flex items-center text-white/60">
              <Heart className="h-4 w-4 mr-2 text-accent-orange" />
              <span className="text-sm">Made with passion and cultural pride</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="text-white hover:text-accent-orange transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact-us" className="text-white hover:text-accent-orange transition-colors duration-300">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-white hover:text-accent-orange transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-white hover:text-accent-orange transition-colors duration-300">Terms & Conditions</Link></li>
              <li><Link to="/shipping-returns" className="text-white hover:text-accent-orange transition-colors duration-300">Shipping & Returns</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center text-white/80">
                <Mail className="h-4 w-4 mr-2 text-accent-orange" />
                <span className="text-sm"><a href="mailto:shahadnainci@rediffmail.com" className="hover:underline">shahadnainci@rediffmail.com</a></span>
              </div>
              <div className="flex items-center text-white/80 mt-2">
                <Phone className="h-4 w-4 mr-2 text-accent-orange" />
                <span className="text-sm"><a href="tel:+919893848769" className="hover:underline">+91 98938 48769</a></span>
              </div>
              <div className="flex items-center text-white/80 mt-2">
                <MapPin className="h-4 w-4 mr-2 text-accent-orange" />
                <span className="text-sm">Flat No 409, Dwarikam Greens, Near A.K.S. University, Sherganj, Satna, Madhya Pradesh – 485001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} NAINCY TIWARI SHAHAD BOUTIQUE. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-white hover:text-accent-orange transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-white hover:text-accent-orange transition-colors duration-300 text-sm">
                Terms & Conditions
              </Link>
              <Link to="/shipping-returns" className="text-white hover:text-accent-orange transition-colors duration-300 text-sm">
                Shipping & Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;