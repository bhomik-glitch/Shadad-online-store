import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import Slider from './Slider';
import logo from '../assets/logo.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <Slider>
        <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left animate-fade-in">
          {/* Heading and Slogan */}
          <div className="flex-1 mb-8 md:mb-0">
            <h1 className="font-script text-accent-orange text-6xl md:text-8xl lg:text-9xl font-bold mb-2 drop-shadow-lg">
              Shahad
              <span className="block text-primary-green text-4xl md:text-5xl lg:text-6xl mt-2">
                by Naincy Tiwari
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-orange to-secondary-green mx-0 md:mx-0 mb-6"></div>
            <p className="text-2xl md:text-3xl text-text-dark/80 max-w-3xl font-light leading-relaxed drop-shadow font-script mb-4">
              Sweetness in every experience
            </p>
            <p className="text-xl md:text-2xl text-text-dark/70 max-w-3xl font-light leading-relaxed drop-shadow">
              Experience the perfect harmony of tradition and innovation, where every moment is crafted with elegance and cultural richness.
            </p>
          </div>
          {/* Logo on the right */}
          <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
            <img src={logo} alt="Shahad Logo" className="h-40 w-40 md:h-56 md:w-56 rounded-full object-cover shadow-lg border-4 border-white bg-white" />
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;