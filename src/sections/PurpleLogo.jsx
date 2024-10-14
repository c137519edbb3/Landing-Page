import React, { useEffect, useState, useRef } from 'react';
import EyeconPurpleLogo from "../assets/images/eyecon_purple.png";

const PurpleLogo = () => {

  return (
    <img
          src={EyeconPurpleLogo}
          alt="Eyecon Logo"
          className="h-12 mt-32 mx-auto"
        />
  );
};

export default PurpleLogo; 


// "use client";
// import React from "react";
// import { SparklesCore } from "../components/ui/sparkles";

// export default function PurpleLogo() {
//   return (
//     (<div
//       className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
//       <div className="w-[40rem] h-40 relative">
//         {/* Gradients */}
//         <div
//           className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//         <div
//           className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//         <div
//           className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//         <div
//           className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//         {/* Core component */}
//         <SparklesCore
//           background="transparent"
//           minSize={1}
//           maxSize={1}
//           particleDensity={100}
//           className="w-full h-full"
//           particleColor="#FFFFFF" />

//         {/* Radial Gradient to prevent sharp edges */}
//         <div
//           className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//       </div>
//     </div>)
//   );
// }
