import React from 'react';
import { Palette, Coffee, Calendar, Gift } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: 'Custom Stitching',
      description: 'Expert tailoring and custom stitching services for men and women, blending tradition with modern style.',
      features: ["Men's Tailoring", "Women's Tailoring", "Personalized Fittings", "Quality Fabrics"],
      gradient: 'from-accent-orange to-accent-gold',
    },
    {
      icon: Gift,
      title: 'Retail Store of Traditional',
      description: 'A curated retail experience offering traditional attire and accessories for every occasion.',
      features: ['Traditional Wear', 'Accessories', 'Cultural Artifacts', 'In-store Experience'],
      gradient: 'from-accent-gold to-accent-orange',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading cultural-border">What We Have to Offer</h2>
          <p className="text-lg text-text-dark/70 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of services designed to bring your vision to life 
            with cultural authenticity and modern excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-neutral-cream rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-serif font-semibold text-text-dark mb-4 group-hover:text-primary-green transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-text-dark/70 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-text-dark/60">
                      <div className="w-2 h-2 bg-accent-orange rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 text-accent-orange font-semibold hover:text-primary-green transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-text-dark/70 mb-8">
            Ready to start your journey with us?
          </p>
          <a
            href="https://wa.link/qssmna"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;