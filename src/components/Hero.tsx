import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-cream via-white to-neutral-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-cultural-pattern opacity-30"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="h-8 w-8 text-accent-orange/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="h-6 w-6 text-secondary-green/30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Sparkles className="h-10 w-10 text-accent-gold/30" />
      </div>

      <div className="relative container mx-auto px-6 text-center animate-fade-in">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-green mb-4 leading-tight">
            Welcome to
            <span className="block text-accent-orange font-script text-6xl md:text-8xl lg:text-9xl mt-2">
              Shahad
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-orange to-secondary-green mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-text-dark/80 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the perfect harmony of tradition and innovation, where every moment is crafted with elegance and cultural richness.
          </p>
        </div>

        {/* Call to Action Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="btn-primary">
            Discover Our Story
          </button>
          <button className="btn-secondary">
            Explore Services
          </button>
        </div> */}

        {/* Scroll Indicator */}
      </div>

      {/* Decorative Ornaments */}
      <div className="absolute top-1/4 left-1/4 opacity-10">
        <div className="w-32 h-32 border-2 border-accent-orange rounded-full transform rotate-45"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-10">
        <div className="w-24 h-24 border-2 border-secondary-green rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;