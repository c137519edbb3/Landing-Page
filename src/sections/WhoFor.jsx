import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionComponent from '../components/SectionComponent';

const WhoFor = () => {
  return (
    <div>
      <SectionComponent 
        text="User" 
        heading="Who Is This For?" 
        subheading="Our solution is tailored for industries like education, security, manufacturing, and public safety where real-time anomaly detection is critical."
      >
        <VerticalSlidingCards /> 
      </SectionComponent>
    </div>
  );
};

const items = Array.from({ length: 12 }, (_, i) => ({
  title: `Item ${i + 1}`,
  description: `Description for Item ${i + 1}`,
  imageUrl: `/api/placeholder/100/100?text=${i + 1}` // Placeholder image
}));

const VerticalSlidingCards = () => {
  const itemsPerColumn = Math.ceil(items.length / 3);
  const itemHeight = 160; // Reduced from 220px to 160px
  const columnHeight = itemsPerColumn * itemHeight;
  const totalHeight = columnHeight * 3;

  const [translateY1, setTranslateY1] = useState(columnHeight);
  const [translateY2, setTranslateY2] = useState(0);
  const [translateY3, setTranslateY3] = useState(columnHeight);
  
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 1;



    // my-2 = 8px
    const animate = () => {
      setTranslateY1(prev => {
        const newY = prev - speed;
        return newY <= itemHeight/4 + 8 ? columnHeight  : newY;
      });
      setTranslateY2(prev => {
        const newY = prev + speed;
        return newY >= columnHeight ? itemHeight/4 + 8: newY;
      });
      setTranslateY3(prev => {
        const newY = prev - speed;
        return newY <= itemHeight/4 + 8? columnHeight : newY;
      });
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [columnHeight]);

  const createColumn = (startIndex, endIndex) => {
    const columnItems = items.slice(startIndex, endIndex);
    const repeatedItems = [...columnItems, ...columnItems, ...columnItems];
    return repeatedItems.map((item, index) => (
      <motion.div 
        key={`${startIndex}-${index}`}
        className="w-full h-[140px] flex-shrink-0 flex flex-col items-center justify-center bg-blue-300 text-white border my-2 p-2 rounded-lg"
      >
        <img src={item.imageUrl} alt={item.title} className="w-12 h-12 mb-1 rounded-full" />
        <h3 className="text-sm font-bold mb-1">{item.title}</h3>
        <p className="text-xs text-center">{item.description}</p>
      </motion.div>
    ));
  };

  return (
    <div className="flex justify-center items-center bg-transparent p-4">
      <div
        className="relative w-[720px] h-[480px] overflow-hidden bg-transparent rounded-lg"
        style={{
          boxShadow: 'inset 0 10px 10px -10px rgba(255,255,255,1), inset 0 -10px 10px -10px rgba(255,255,255,1)'
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

        <div ref={containerRef} className="absolute top-0 left-0 right-0 flex">
          <div 
            className="w-1/3 px-2" 
            style={{ transform: `translateY(${-translateY1}px)` }}
          >
            {createColumn(0, itemsPerColumn)}
          </div>
          <div 
            className="w-1/3 px-2" 
            style={{ transform: `translateY(${-translateY2}px)` }}
          >
            {createColumn(itemsPerColumn, 2 * itemsPerColumn)}
          </div>
          <div 
            className="w-1/3 px-2" 
            style={{ transform: `translateY(${-translateY3}px)` }}
          >
            {createColumn(2 * itemsPerColumn, 3 * itemsPerColumn)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoFor;