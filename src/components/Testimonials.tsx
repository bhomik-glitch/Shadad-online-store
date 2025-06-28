import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Shahad transformed our vision into reality with such elegance and cultural sensitivity. Their attention to detail and commitment to excellence is truly remarkable.",
      author: "Sarah Ahmad",
      role: "Cultural Center Director",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      quote: "Working with Shahad was an incredible experience. They perfectly balanced modern aesthetics with our cultural heritage, creating something truly unique.",
      author: "Omar Hassan",
      role: "Event Organizer",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      quote: "The team at Shahad brings passion and professionalism to every project. Their cultural understanding and modern approach make them exceptional partners.",
      author: "Fatima Al-Zahra",
      role: "Business Owner",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading cultural-border">What Our Clients Say</h2>
          <p className="text-lg text-text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Hear from our valued clients about their experiences working with Shahad.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-neutral-cream rounded-3xl p-12 relative overflow-hidden">
            {/* Decorative Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="h-16 w-16 text-accent-orange" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 text-center animate-fade-in" key={currentTestimonial}>
              <blockquote className="text-xl md:text-2xl text-text-dark/80 font-light leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].author}
                  className="w-16 h-16 rounded-full object-cover border-4 border-accent-orange/20"
                />
                <div>
                  <h4 className="font-semibold text-text-dark text-lg">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-text-dark/60">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-text-dark hover:text-accent-orange transition-colors duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-text-dark hover:text-accent-orange transition-colors duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-accent-orange' : 'bg-text-dark/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;