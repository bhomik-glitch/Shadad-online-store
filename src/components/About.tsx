import React from 'react';
import { Heart, Star, Award, Users } from 'lucide-react';
import logo from '../assets/logo.jpg';

const About: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passionate Excellence',
      description: 'Every detail crafted with love and dedication to create unforgettable experiences.',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'We maintain the highest standards in everything we do, ensuring exceptional results.',
    },
    {
      icon: Award,
      title: 'Cultural Heritage',
      description: 'Honoring traditions while embracing modern innovation and contemporary design.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building meaningful connections and fostering relationships that last a lifetime.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-heading cultural-border">About Shahad</h2>
          <p className="text-lg text-text-dark/70 leading-relaxed">
            Rooted in tradition yet embracing modernity, Shahad represents the perfect fusion of 
            cultural heritage and contemporary excellence. Our journey is one of passion, 
            dedication, and an unwavering commitment to creating meaningful experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-accent-orange animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-green to-primary-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-4">{feature.title}</h3>
              <p className="text-text-dark/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="font-serif text-3xl text-primary-green mb-6">Our Vision</h3>
            <p className="text-text-dark/80 leading-relaxed mb-6">
              At Shahad, we envision a world where cultural richness meets modern sophistication. 
              Our mission is to create spaces and experiences that honor the past while embracing 
              the future, bringing people together through shared values and exceptional quality.
            </p>
            <p className="text-text-dark/80 leading-relaxed">
              Every project we undertake is a testament to our commitment to excellence, 
              sustainability, and the celebration of cultural diversity in all its beautiful forms.
            </p>
            <div className="mt-8">
              <button className="btn-primary">Learn More About Us</button>
            </div>
          </div>
          
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-secondary-green/20 to-accent-orange/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl border-4 border-accent-orange/10">
                  <img src={logo} alt="Shahad Logo" className="w-32 h-32 object-cover rounded-full" />
                </div>
                <p className="text-text-dark font-medium text-lg">Shahad - Arabic for "Honey"</p>
                <p className="text-text-dark/70 text-base mt-2">Sweetness in every experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;