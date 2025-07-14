import React from 'react';

const IMAGES = [
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477354/IMG-20250714-WA0025_lv63hc.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477353/IMG-20250714-WA0024_uggrwu.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477353/IMG-20250714-WA0023_ztruqy.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477353/IMG-20250714-WA0023_ztruqy.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477351/IMG-20250714-WA0019_oio2m9.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477351/IMG-20250714-WA0038_ycnslh.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477348/IMG-20250714-WA0012_odmxup.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477347/IMG-20250714-WA0013_gtq6xm.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477346/IMG-20250714-WA0011_umskna.jpg',
];

const SECOND_ROW_IMAGES = [
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477346/IMG-20250714-WA0030_smrrcy.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477345/IMG-20250714-WA0026_smc1xf.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477345/IMG-20250714-WA0029_p4hk4n.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477344/IMG-20250714-WA0006_ij1aa4.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477347/IMG-20250714-WA0032_wuimjt.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477346/IMG-20250714-WA0009_ly3ijg.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752120891/IMG-20250702-WA0047_sfxj9q.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752477348/IMG-20250714-WA0034_lgcmyh.jpg',
];

const Gallery: React.FC = () => {
  // Duplicate images for seamless infinite effect
  const allImages = [...IMAGES, ...IMAGES];
  const allSecondRow = [...SECOND_ROW_IMAGES, ...SECOND_ROW_IMAGES];

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

        {/* First Row: Horizontal Infinite Image Slider with CSS animation */}
        <div className="w-full overflow-x-hidden mb-8">
          <div
            className="flex gap-6 py-8 animate-marquee"
            style={{ width: 'max-content' }}
          >
            {allImages.map((src, idx) => (
              <div
                key={idx}
                className="min-w-[220px] h-56 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-neutral-200 select-none overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="object-cover w-full h-full"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: User Provided Images */}
        <div className="w-full overflow-x-hidden">
          <div
            className="flex gap-6 py-8 animate-marquee"
            style={{ width: 'max-content' }}
          >
            {allSecondRow.map((src, idx) => (
              <div
                key={idx}
                className="min-w-[220px] h-56 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-neutral-200 select-none overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Gallery Second Row ${idx + 1}`}
                  className="object-cover w-full h-full"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Removed the View Full Portfolio button as requested */}
      </div>
    </section>
  );
};

export default Gallery;