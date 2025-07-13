// Script to seed the database with all 7 products
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Product from './models/Product.js';

dotenv.config();

const products = [
  {
    title: 'Handblock Printed Ajrakh Mull Cotton Saree',
    description: `Product Name: Handblock Printed Ajrakh Mull Cotton Saree

Product Details:
- Craft: Hand Block Printed Ajrakh
- Fabric: Mull Cotton
- Dimensions: Length 5.6 to 5.8 meters, Width 43 inches
- Blouse Piece: 0.80 meters (attached, in running fabric)

Care Instructions:
Dry Clean Only

Shipping Information:
- Within India: Free Shipping
- International Shipping: Charges calculated at checkout based on weight

Product Description:
This Ajrakh saree is a timeless expression of Indian craftsmanship. Handblock printed with natural dyes, it reflects the depth of tradition and the skill of artisans. A perfect blend of culture and elegance, this saree is a tribute to heritage and slow fashion.

Exchange & Refund Policy:
No Exchange or Refund

Disclaimer:
Due to the handcrafted nature of the product, slight variations and irregularities in print and color may occur—these are signs of authentic handwork. Product colors may vary slightly due to photographic lighting or display settings.
`,
    price: 4300,
    images: [
      'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752110590/IMG-20250702-WA0025_dn8btb.jpg',
      'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752110590/IMG-20250702-WA0027_kmmmzd.jpg',
      'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752110590/IMG-20250702-WA0026_ofwjho.jpg',
      'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752110591/IMG-20250702-WA0028_w2dv35.jpg',
      'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752110591/IMG-20250702-WA0029_mwtcb0.jpg',
      'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752110592/IMG-20250702-WA0030_wy1zih.jpg',
    ],
    stock: 10,
  },
  // Products 2-6 share the same description
  ...[2,3,4,5,6].map(() => ({
    title: 'Handblock Kota Doria Saree with Golden Zari border',
    description: `Product Details:
- Fabric: Pure Kota Doria Cotton
- Saree Length: 5.5 meters
- Width: 43 inches
- Blouse Piece: Approx. 85 cm of handblock printed cotton fabric included

Product Description:
A timeless piece of art, this Handblock Kota Doria Saree blends tradition with elegance. Crafted from pure Kota Doria cotton, the saree features intricate handblock printing, making each piece beautifully unique.

The saree is soft, lightweight, and breathable—ideal for summer events, casual outings, or festive occasions.

Care Instructions:
- Hand-wash separately in cold water
- Use mild soap only
- Do not soak or bleach

What You’ll Receive:
- 1 Saree (5.5 meters)
- 1 Matching blouse piece (85 cm, handblock printed)

Shipping & Delivery:
- Dispatched within 10 days of order confirmation
- Domestic and international shipping available

Exchange & Refund Policy:
No exchange or refund available for this product. Please read the product details and disclaimer carefully before purchasing.

Note:
These sarees are made in soft fall fabric. If you prefer a slightly stiffer texture, we recommend applying a light starch.

Disclaimer:
As this is a handcrafted, handblock printed product, slight variations in design and color may occur. These imperfections are a hallmark of handcraftsmanship. Product colors may vary slightly due to photographic lighting and screen resolution.
`,
    price: 3800,
    images: [], // Will be filled below
    stock: 8,
  })),
  // Product 7
  {
    title: 'Handblock Kota Doria Saree with Golden Zari border',
    description: `Product Details:
- Fabric: Pure Kota Doria Cotton
- Saree Length: 5.5 meters
- Width: 43 inches

Product Description:
A timeless piece of art, this Handblock Kota Doria Saree blends tradition with elegance. Crafted from pure Kota Doria cotton, the saree features intricate handblock printing, making each piece beautifully unique.

The saree is soft, lightweight, and breathable—ideal for summer events, casual outings, or festive occasions.

Care Instructions:
- Hand-wash separately in cold water
- Use mild soap only
- Do not soak or bleach

What You’ll Receive:
- 1 Saree (5.5 meters)

Shipping & Delivery:
- Dispatched within 10 days of order confirmation
- Domestic and international shipping available

Exchange & Refund Policy:
No exchange or refund available for this product. Please read the product details and disclaimer carefully before purchasing.

Note:
These sarees are made in soft fall fabric. If you prefer a slightly stiffer texture, we recommend applying a light starch.

Disclaimer:
As this is a handcrafted, handblock printed product, slight variations in design and color may occur. These imperfections are a hallmark of handcraftsmanship. Product colors may vary slightly due to photographic lighting and screen resolution.
`,
    price: 3800,
    images: [
      'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752121245/WhatsApp_Image_2025-07-02_at_20.02.13_b767e832_fapoic.jpg',
      'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752121246/WhatsApp_Image_2025-07-02_at_20.04.06_d8d5df09_imldit.jpg',
    ],
    stock: 11,
  },
];

// Fill in the correct images and stock for products 2-6
products[1].images = [
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752119411/IMG-20250702-WA0034_egpmex.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752119412/IMG-20250702-WA0033_yk304r.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752119413/IMG-20250702-WA0036_rnr3ga.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752119413/IMG-20250702-WA0038_j0b6ex.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752119416/IMG-20250702-WA0037_jh85se.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752119419/IMG-20250702-WA0035_dw6er5.jpg',
];
products[1].stock = 8;
products[2].images = [
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752120616/IMG-20250702-WA0040_qjna2l.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752120617/IMG-20250702-WA0042_hmtdqk.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752120624/IMG-20250702-WA0044_hdsz6q.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752120624/IMG-20250702-WA0043_msebov.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752120623/IMG-20250702-WA0041_q41i6i.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752120664/IMG-20250702-WA0044_ijpt28.jpg',
];
products[2].stock = 12;
products[3].images = [
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752120889/IMG-20250702-WA0045_naftpa.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752120891/IMG-20250702-WA0047_sfxj9q.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752120891/IMG-20250702-WA0046_wlazih.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752120892/IMG-20250702-WA0048_yimfsq.jpg',
];
products[3].stock = 7;
products[4].images = [
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752121016/WhatsApp_Image_2025-07-02_at_19.54.55_b6c0cdd6_rd0ree.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752121029/WhatsApp_Image_2025-07-02_at_19.54.56_f1a0074d_hriiev.jpg',
];
products[4].stock = 9;
products[5].images = [
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752121096/WhatsApp_Image_2025-07-02_at_19.59.56_26e74a7b_qa4dxr.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752121097/WhatsApp_Image_2025-07-02_at_19.57.55_067b85aa_ce1bpj.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752121109/WhatsApp_Image_2025-07-02_at_19.59.56_bbd0889e_hzdeko.jpg',
];
products[5].stock = 6;

async function seed() {
  try {
    await connectDB();
    await Product.deleteMany({}); // Clear existing products
    await Product.insertMany(products);
    console.log('Products seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed(); 