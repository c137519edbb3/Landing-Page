import React from 'react';
import SectionComponent from '../components/SectionComponent';

const ChooseUs = () => {
  return (
    <div>
      <SectionComponent 
        text="Product" 
        heading="Why Choose Us?" 
        subheading="Transform security management with context-aware AI, providing real-time anomaly detection and tailored insights to enhance safety and efficiency across industries."
      >
        <WidgetColumn />
      </SectionComponent>
    </div>
  );
};

export default ChooseUs;



const WidgetColumn = () => {
  return (
    <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl space-y-4">
        {/* First row with 3 boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <div className="w-full h-80 border-2 border-gray-300 rounded-3xl bg-gray-100 shadow-xl flex items-center justify-center">
            Box 1
          </div>
          <div className="w-full h-80 border-2 border-gray-300 rounded-3xl bg-gray-100 shadow-xl flex items-center justify-center">
            Box 2
          </div>
          <div className="w-full h-80 border-2 border-gray-300 rounded-3xl bg-gray-100 shadow-xl flex items-center justify-center">
            Box 3
          </div>
        </div>

        {/* Second row with 2 boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="w-full h-44 border-2 border-gray-300 rounded-3xl bg-gray-100 shadow-xl flex items-center justify-center">
            Box 4
          </div>
          <div className="w-full h-44 border-2 border-gray-300 rounded-3xl bg-gray-100 shadow-xl flex items-center justify-center">
            Box 5
          </div>
        </div>

        {/* Third row with 3 smaller boxes */}
        <div className="w-[70%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <div className="w-full h-16 border-2 border-gray-300 rounded-xl bg-gray-100 shadow-xl flex items-center justify-center">
              Box 6
            </div>
            <div className="w-full h-16 border-2 border-gray-300 rounded-xl bg-gray-100 shadow-xl flex items-center justify-center">
              Box 7
            </div>
            <div className="w-full h-16 border-2 border-gray-300 rounded-xl bg-gray-100 shadow-xl flex items-center justify-center">
              Box 8
            </div>
          </div>
        </div>
        <div className="w-[50%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="w-full h-16 border-2 border-gray-300 rounded-xl bg-gray-100 shadow-xl flex items-center justify-center">
              Box 9
            </div>
            <div className="w-full h-16 border-2 border-gray-300 rounded-xl bg-gray-100 shadow-xl flex items-center justify-center">
              Box 10
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
