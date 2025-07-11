import React from 'react';

const ShippingReturns = () => (
  <section className="max-w-2xl mx-auto p-6 mt-24">
    <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>
    <ul className="mb-4 list-disc list-inside">
      <li>Orders are processed within 1–2 business days.</li>
      <li>Delivery takes 3–7 business days, depending on your location.</li>
      <li>Shipping is free on all prepaid orders above ₹500.</li>
      <li>Once shipped, you will receive a tracking ID via email or SMS.</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2">Return/Refund Policy</h2>
    <ul className="mb-4 list-disc list-inside">
      <li>Due to the nature of handcrafted garments, returns are accepted only for damaged or incorrect items.</li>
      <li>Please raise a return request within 5 days of delivery via email (shahadnainci@rediffmail.com) or phone.</li>
      <li>Items must be unused, unwashed, and in original condition.</li>
      <li>Refunds (if approved) will be processed within 5–7 business days.</li>
    </ul>
  </section>
);

export default ShippingReturns; 