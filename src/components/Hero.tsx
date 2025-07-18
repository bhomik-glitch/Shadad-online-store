import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import Slider from './Slider';
import logo from '../assets/logo.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <Slider>
        <div className="relative container mx-auto px-6 flex flex-col items-center justify-center text-center animate-fade-in">
          {/* Centered Logo */}
          <img src={logo} alt="Shahad Logo" className="max-w-[224px] max-h-[224px] object-contain mx-auto mb-4" />
          {/* Centered 'by naincy' */}
          <h1 className="font-script text-accent-orange text-5xl md:text-6xl lg:text-7xl font-bold mb-2 drop-shadow-lg"></h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-orange to-secondary-green mx-auto mb-6"></div>
          {/* Centered Quotes */}
          <p className="text-2xl md:text-3xl text-text-dark/80 max-w-3xl font-light leading-relaxed drop-shadow font-script mb-4 mx-auto">
            Sweetness in every experience
          </p>
          <p className="text-xl md:text-2xl text-text-dark/70 max-w-3xl font-light leading-relaxed drop-shadow mx-auto">
            Experience the perfect harmony of tradition and innovation, where every moment is crafted with elegance and cultural richness.
          </p>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;