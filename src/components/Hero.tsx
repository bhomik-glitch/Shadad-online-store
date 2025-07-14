import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import Slider from './Slider';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <Slider>
        <div className="relative container mx-auto px-6 text-center animate-fade-in">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              Welcome to
              <span className="block text-accent-orange font-script text-6xl md:text-8xl lg:text-9xl mt-2">
                Shahad
              </span>
              <span className="block text-white/80 font-[Montserrat] text-2xl md:text-3xl lg:text-4xl mt-2">
                by naincy tiwari
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-orange to-secondary-green mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed drop-shadow">
              Experience the perfect harmony of tradition and innovation, where every moment is crafted with elegance and cultural richness.
            </p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;