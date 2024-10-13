import React from "react";
import Dashboard from "../assets/images/dashboard.avif";
import Organizations from "../assets/images/organizations.png";
import "./Hero.css";
import SectionTitleButton from "../components/SectionTitleButton";
import SectionComponent from '../components/SectionComponent';

const Hero = () => {
  return (
    <div>
        <SectionComponent 
          text="Stay Safe Today" 
          heading="See the Story Behind Every Frame" 
          subheading="Context-based Detection of Mixed-Criticality Events using Computer."
        >

          <div className="flex flex-col items-center justify-center space-y-16">
            <div className="flex flex-row items-center justify-center space-x-4">
              <button
                type="button"
                className="inline-flex justify-center items-center py-2.5 px-5 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
              >
                Book your Demo
              </button>
              <button
                type="button"
                className="inline-flex justify-center items-center py-2.5 px-5 text-sm font-medium text-center text-gray-700 border border-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-300"
              >
                Live Demo
              </button>
            </div>



            <div className="flex flex-col items-center justify-center w-full">
              <img 
                src={Dashboard} 
                alt="Dashboard" 
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl object-contain" 
              />
            </div>

            <div className="flex flex-col items-center overflow-hidden">
              <div className="scroll-container">
                <img
                  src={Organizations}
                  alt="Organizations"
                  className="scrolling-image"
                />
              </div>
            </div>
          </div>

        </SectionComponent>

    </div>
  );
};

export default Hero;