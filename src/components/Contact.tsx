import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'shouryaatiwari@gmail.com',
      description: 'Send us your inquiries anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '9893848769',
      description: 'Mon-Fri 9:00 AM - 6:00 PM',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'FLAT NO 409, Dwarikam Greens, NEAR A.K.S. UNIVERSITY, SATNA',
      description: 'Sherganj, Satna, Madhya Pradesh, 485001',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-neutral-cream to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading cultural-border">Get In Touch</h2>
          <p className="text-lg text-text-dark/70 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out to us using the information below or contact us directly on WhatsApp.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          {/* Contact Information */}
          <div className="space-y-8 w-full max-w-xl">
            <div className="animate-slide-up">
              <h3 className="font-serif text-3xl text-primary-green mb-6">Let's Connect</h3>
              <p className="text-text-dark/70 leading-relaxed mb-8">
                Whether you have a project in mind, want to learn more about our services, or simply want to say hello, we're here to help make your vision a reality.
              </p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-orange to-accent-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark text-lg mb-1">{info.title}</h4>
                    <p className="text-accent-orange font-medium mb-1">{info.details}</p>
                    <p className="text-text-dark/60 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Contact Button */}
          <a
            href="https://wa.link/qssmna"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 mt-8"
          >
            <MessageCircle className="h-5 w-5" />
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;