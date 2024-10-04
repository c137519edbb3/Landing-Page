import React from "react";
import SectionTitleButton from "../components/SectionTitleButton";
import camera from "../assets/images/camera.png";
import rock from "../assets/videos/output-onlinegiftools.gif";
import table from "../assets/images/table.png";

const ModelArchitecture = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <SectionTitleButton title="Methodology" />

        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl">
          Methodology
        </h1>

        <p className="mb-8 text-lg font-normal text-gray-600 lg:text-lg sm:px-16 xl:px-48">
          We pass live camera feeds through deep learning models to predict
          events as catastrophic, critical, or normal, with high precision and
          continuous adaptation.
        </p>

        {/* Architecture Model Section */}
        <div className="flex items-center justify-center">
  {/* First Image (Camera) */}
  <img src={camera} alt="Model Step 1" className="h-60 w-auto mx-2" /> {/* Added consistent margin */}

  {/* Right Arrow */}
  <span className="text-6xl text-gray-600 ml-8">{"→"}</span> {/* Added margin for consistent spacing */}

  {/* Second Image (Rock) */}
  <img src={rock} alt="Model Step 2" className="h-60 w-auto mx-2" /> {/* Added consistent margin */}

  {/* Right Arrow */}
  <span className="text-6xl text-gray-600 mr-24">{"→"}</span> {/* Added margin for consistent spacing */}

  {/* Third Image (Table) */}
  <img src={table} alt="Model Step 3" className="h-40 w-auto mx-2" /> {/* Added consistent margin */}
</div>

      </div>
    </section>
  );
};

export default ModelArchitecture;
