import React from 'react';

const ContactUs = () => (
  <section className="max-w-2xl mx-auto p-6 mt-24">
    <h1 className="text-3xl font-bold mb-4">We’d Love to Hear From You</h1>
    <ul className="mb-4">
      <li>📧 Email: <a href="mailto:shahadnainci@rediffmail.com" className="text-blue-600 underline">shahadnainci@rediffmail.com</a></li>
      <li>📞 Phone: <a href="tel:+919893848769" className="text-blue-600 underline">+91 98938 48769</a></li>
      <li>🌐 Facebook: <a href="https://facebook.com/siaanainci" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">facebook.com/siaanainci</a></li>
    </ul>
    <h2 className="text-xl font-semibold mb-2">Registered Business Details:</h2>
    <ul className="mb-4">
      <li>Legal Name: NAINCY TIWARI SHAHAD BOUTIQUE</li>
      <li>GSTIN: 23AGDPT8466C1ZB</li>
      <li>Constitution of Business: Proprietorship</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2">Principal Place of Business:</h2>
    <address className="not-italic">
      Flat No 409, Dwarikam Greens,<br />
      Near A.K.S. University, Sherganj,<br />
      Satna, Madhya Pradesh – 485001
    </address>
  </section>
);

export default ContactUs; 