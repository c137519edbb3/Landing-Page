import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionComponent from '../components/SectionComponent';

const Team = () => {
  return (
    <div>
      {/* Pass props to SectionComponent */}
      <SectionComponent 
        text="Team" 
        heading="Meet the incredible team" 
        subheading="We pride ourselves of being the best of the best and our team encapsulates that."
      >
        {/* Custom content passed as 'children' */}
        <HorizontalSlidingCards />
      </SectionComponent>
    </div>
  );
};


export default Team;

const items = Array.from({ length: 10 }, (_, i) => ({
  title: `Item ${i + 1}`,
  description: `Description for Item ${i + 1}`,
  imageUrl: `/api/placeholder/100/100?text=${i + 1}` // Placeholder image
}));

const HorizontalSlidingCards = () => {
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = items.length * 200; // 200px per item

    const animate = () => {
      setTranslateX(prev => {
        const newX = prev - 0.5; // Slower movement
        if (newX <= -totalWidth) {
          return 0; // Reset to start
        }
        return newX;
      });
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="flex justify-center items-center bg-transparent p-4">
      <div
        className="relative w-[800px] h-[200px] overflow-hidden bg-transparent rounded-lg"
        style={{
          boxShadow: 'inset 10px 0 10px -10px rgba(255,255,255,1), inset -10px 0 10px -10px rgba(255,255,255,1)'
        }}
      >
        {/* Left shadow overlay */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        
        {/* Right shadow overlay */}
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        <div 
          ref={containerRef}
          className="absolute top-0 left-0 bottom-0 flex" 
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {[...items, ...items].map((item, index) => (
            <motion.div 
              key={index} 
              className="w-[200px] h-full flex-shrink-0 flex flex-col items-center justify-center bg-blue-300 text-white border  mx-1 p-2 rounded-lg"
            >
              <img src={item.imageUrl} alt={item.title} className="w-16 h-16 mb-2 rounded-full" />
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-xs text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
