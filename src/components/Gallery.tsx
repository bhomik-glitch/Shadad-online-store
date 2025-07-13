import React from 'react';
import { Eye } from 'lucide-react';

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      title: 'Cultural Heritage',
      category: 'Design',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Modern Elegance',
      category: 'Architecture',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Artisan Crafts',
      category: 'Products',
      image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Cultural Events',
      category: 'Experiences',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Traditional Arts',
      category: 'Heritage',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Contemporary Fusion',
      category: 'Innovation',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-neutral-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading cultural-border">Our Gallery</h2>
          <p className="text-lg text-text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of work that showcases the beautiful intersection of 
            cultural heritage and contemporary design excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <Eye className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">View Details</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-accent-orange uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-text-dark group-hover:text-primary-green transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;