import React from "react";
import SectionComponent from '../components/SectionComponent';
import camera from "../assets/images/camera.png";
import rock from "../assets/videos/output-onlinegiftools.gif";
import table from "../assets/images/table.png";

const ModelArchitecture = () => {
  return (
       <SectionComponent 
        text="Methodology" 
        heading="Methodology" 
        subheading="We pass live camera feeds through deep learning models to predict events as catastrophic, critical, or normal, with high precision and continuous adaptation."
        >


<div
  className="
    flex 
    flex-col md:flex-row 
    items-center justify-center 
    gap-8 md:gap-12 
    p-4
  "
>
  {/* First Image (Camera) */}
  <img
    src={camera}
    alt="Model Step 1"
    className="h-24 md:h-32 w-auto mx-2"  // Further reduced size
  />

  {/* Arrow (Down for mobile, Right for desktop) */}
  <span className="text-4xl text-gray-600 md:hidden">{"↓"}</span>
  <span className="hidden md:inline text-6xl text-gray-600">{"→"}</span>

  {/* Second Image (Rock) */}
  <img
    src={rock}
    alt="Model Step 2"
    className="h-32 md:h-48 w-auto mx-2"  // Reduced size
  />

  {/* Arrow (Down for mobile, Right for desktop) */}
  <span className="text-4xl text-gray-600 md:hidden">{"↓"}</span>
  <span className="hidden md:inline text-6xl text-gray-600">{"→"}</span>

  {/* Third Image (Table) */}
  <img
    src={table}
    alt="Model Step 3"
    className="h-28 md:h-36 w-auto mx-2"  // Slight adjustment for consistency
  />
</div>



      </SectionComponent>
  );
};

export default ModelArchitecture;
