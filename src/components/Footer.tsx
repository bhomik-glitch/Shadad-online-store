import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-green text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="Shahad Logo" className="h-12 w-12 rounded-full object-cover" />
              <span className="font-serif text-2xl font-bold">Shahad</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Where tradition meets innovation. We create beautiful experiences that honor 
              cultural heritage while embracing modern excellence and contemporary design.
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
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-accent-orange transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center text-white/60">
                <Mail className="h-4 w-4 mr-2 text-accent-orange" />
                <span className="text-sm">shouryaatiwari@gmail.com</span>
              </div>
              <div className="flex items-center text-white/60 mt-2">
                <Phone className="h-4 w-4 mr-2 text-accent-orange" />
                <span className="text-sm">9893848769</span>
              </div>
              <div className="flex items-center text-white/60 mt-2">
                <MapPin className="h-4 w-4 mr-2 text-accent-orange" />
                <span className="text-sm">FLAT NO 409, Dwarikam Greens, NEAR A.K.S. UNIVERSITY, SATNA, Sherganj, Satna, Madhya Pradesh, 485001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} Shahad. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-accent-orange transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-accent-orange transition-colors duration-300 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;