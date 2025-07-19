import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import Slider from './Slider';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <Slider>
        <div className="relative container mx-auto px-6 flex flex-col items-center justify-center text-center animate-fade-in">
          {/* Centered Quotes */}
          <p className="text-3xl md:text-4xl lg:text-5xl text-accent-orange max-w-3xl font-light leading-relaxed drop-shadow font-script mb-4 mx-auto">
            Shahad - Arabic for "Honey"
          </p>
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