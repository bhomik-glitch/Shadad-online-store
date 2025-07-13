import React, { useEffect, useRef, useState, ReactNode } from 'react';

const images = [
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752219126/3_kg87ea.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752219126/2_mc9jcj.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752219125/5_fmi35w.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752219125/4_rotnnk.jpg',
  'https://res.cloudinary.com/dn3k5szqx/image/upload/v1752219124/1_e0mxrx.jpg',
];

interface SliderProps {
  children?: ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setPrev(current);
      setDirection('right');
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="w-full h-full relative">
        {images.map((img, idx) => {
          let style = 'translate-x-full';
          let zIndex = 0;
          if (idx === current) {
            style = 'translate-x-0';
            zIndex = 20;
          } else if (idx === prev) {
            style = direction === 'right' ? '-translate-x-full' : 'translate-x-full';
            zIndex = 10;
          }
          return (
            <div
              key={img}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ${style}`}
              style={{
                zIndex,
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          );
        })}
        {/* Overlay Content with full-screen translucent card */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
          <div className="absolute inset-0 bg-white bg-opacity-70 w-full h-full flex items-center justify-center pointer-events-auto">
            <div className="w-full flex flex-col items-center justify-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider; 