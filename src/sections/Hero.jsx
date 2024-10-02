import React from "react";
import EyeconPurpleLogo from "../assets/images/eyecon_purple.png";
import Dashboard from "../assets/images/dashboard.png";
import Organizations from "../assets/images/organizations.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <img
          src={EyeconPurpleLogo}
          alt="Eyecon Logo"
          className="h-12 mb-6 mx-auto"
        />
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-8"
        >
          Stay Safe Today
        </button>

        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl">
          See the Story Behind Every Frame
        </h1>

        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48">
          Context-based Detection of Mixed-Criticality Events using Computer
          Vision
        </p>

        <div className="mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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

        <div className="flex flex-col items-center justify-center mb-16">
          <img src={Dashboard} alt="Dashboard" className="h-100" />
        </div>

        <div className="flex flex-col items-center h-screen overflow-hidden">
          <div className="scroll-container">
            <img
              src={Organizations}
              alt="Organizations"
              className="scrolling-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
