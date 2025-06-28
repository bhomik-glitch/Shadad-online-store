import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <section id="coming-soon" className="py-20 bg-gradient-to-br from-accent-orange/10 to-secondary-green/10">
      <div className="container mx-auto px-6 text-center animate-fade-in">
        <h2 className="section-heading cultural-border mb-6">Our Store is Coming Soon!</h2>
        <p className="text-lg text-text-dark/70 max-w-2xl mx-auto leading-relaxed mb-8">
          We are working hard to bring you an exciting new shopping experience. Stay tuned for the grand opening of our store!
        </p>
        <div className="flex justify-center">
          <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-accent-orange/10 animate-pulse">
            <span className="text-5xl text-accent-orange font-bold">⏳</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon; 