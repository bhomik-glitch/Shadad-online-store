import React, { useState } from 'react';
import { ArrowLeft, Scissors, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// If you want to use the image from assets folder, uncomment this line:
// import stichingSizeImage from '../assets/stiching-size.jpg';

const CustomStitching: React.FC = () => {
  const [formData, setFormData] = useState({
    chest: '',
    waist: '',
    paddingRequired: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({ chest: '', waist: '', paddingRequired: '' });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-cream to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-text-dark mb-4">
              Measurement Submitted!
            </h1>
            <p className="text-lg text-text-dark/70 mb-8">
              Thank you for submitting your custom blouse measurements. Our expert tailors will review your specifications and get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <button
                onClick={resetForm}
                className="btn-primary w-full md:w-auto"
              >
                Submit Another Measurement
              </button>
              <Link
                to="/"
                className="btn-secondary w-full md:w-auto block md:inline-block"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-cream to-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center text-accent-orange hover:text-primary-green transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
            <div className="w-24 h-24 bg-gradient-to-r from-accent-orange to-accent-gold rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Scissors className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-text-dark mb-4">
              Custom Blouse Measurements
            </h1>
            <p className="text-lg text-text-dark/70">
              Please provide your measurements for a perfectly tailored blouse that fits you like a glove.
            </p>
          </div>

          {/* Measurement Guide */}
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-serif font-semibold text-text-dark mb-6 text-center">
              📏 Measurement Guide
            </h3>
                         <div className="text-center mb-6">
               <img 
                 src="/stiching-size.jpg" 
                 alt="Blouse Measurement Diagram" 
                 className="max-w-full h-auto rounded-xl shadow-md mx-auto"
                 style={{ maxHeight: '500px' }}
                 onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.style.display = 'none';
                   // Show a helpful message when image fails to load
                   const parent = target.parentElement;
                   if (parent) {
                     parent.innerHTML = `
                       <div class="bg-gray-100 rounded-xl p-8 text-center">
                         <div class="text-4xl mb-4">📏</div>
                         <p class="text-text-dark/70 mb-2">Measurement Diagram</p>
                         <p class="text-sm text-text-dark/50">Image loading... Please ensure 'stiching-size.jpg' is in the public folder.</p>
                       </div>
                     `;
                   }
                 }}
               />
             </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-text-dark/70">
              <div>
                <h4 className="font-semibold text-text-dark mb-3">Key Measurements:</h4>
                <ul className="space-y-2">
                  <li><strong>Chest:</strong> Around the fullest part of your chest</li>
                  <li><strong>Waist:</strong> Around your natural waistline</li>
                  <li><strong>Shoulder:</strong> From shoulder point to shoulder point</li>
                  <li><strong>Length:</strong> From shoulder to desired hem length</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text-dark mb-3">Tips:</h4>
                <ul className="space-y-2">
                  <li>Keep the measuring tape horizontal and snug</li>
                  <li>Don't pull the tape too tight</li>
                  <li>Measure over light clothing</li>
                  <li>Stand naturally while measuring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="space-y-6">
              {/* Chest Measurement */}
              <div>
                <label htmlFor="chest" className="block text-lg font-semibold text-text-dark mb-3">
                  Chest Measurement (inches)
                </label>
                <input
                  type="number"
                  id="chest"
                  name="chest"
                  value={formData.chest}
                  onChange={handleInputChange}
                  step="0.1"
                  min="20"
                  max="60"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent-orange focus:outline-none transition-colors duration-300 text-lg"
                  placeholder="e.g., 36.5"
                />
                <p className="text-sm text-text-dark/60 mt-2">
                  Measure around the fullest part of your chest, keeping the tape horizontal
                </p>
              </div>

              {/* Waist Measurement */}
              <div>
                <label htmlFor="waist" className="block text-lg font-semibold text-text-dark mb-3">
                  Waist Measurement (inches)
                </label>
                <input
                  type="number"
                  id="waist"
                  name="waist"
                  value={formData.waist}
                  onChange={handleInputChange}
                  step="0.1"
                  min="20"
                  max="60"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent-orange focus:outline-none transition-colors duration-300 text-lg"
                  placeholder="e.g., 28.0"
                />
                <p className="text-sm text-text-dark/60 mt-2">
                  Measure around your natural waistline, where you normally wear your pants
                </p>
              </div>

              {/* Padding Requirement */}
              <div>
                <label htmlFor="paddingRequired" className="block text-lg font-semibold text-text-dark mb-3">
                  Padding Required
                </label>
                <select
                  id="paddingRequired"
                  name="paddingRequired"
                  value={formData.paddingRequired}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent-orange focus:outline-none transition-colors duration-300 text-lg"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes, I need padding</option>
                  <option value="no">No, I don't need padding</option>
                </select>
                <p className="text-sm text-text-dark/60 mt-2">
                  Choose whether you'd like built-in padding for enhanced shape and comfort
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Submitting...
                  </div>
                ) : (
                  'Submit Measurements'
                )}
              </button>
            </div>
          </form>

          {/* Additional Information */}
          <div className="mt-8 text-center">
            <p className="text-text-dark/60 mb-4">
              Need help with measurements? Our expert tailors are here to assist you.
            </p>
            <a
              href="https://wa.link/qssmna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-orange hover:text-primary-green font-semibold transition-colors duration-300"
            >
              Contact us on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomStitching;
