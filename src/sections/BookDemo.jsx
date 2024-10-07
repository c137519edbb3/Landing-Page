import React from "react";

const BookDemo = () => {
  return (
    <section className="bg-white mt-32 mb-64"> {/* Added margin classes here */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">
          Ready to scale your brand to{" "}
          <span className="font-serif italic text-100">new heights?</span>
        </h1>

        <p className="text-lg font-normal text-gray-600 lg:text-lg sm:px-16 xl:px-48 max-w-5xl mx-auto">
          If you want to achieve ground-breaking growth with increased sales and
          profitability with paid ads, then you're in the right place.
        </p>

        {/* Blue Button */}
        <button
          type="button"
          className="mt-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Book your Demo
        </button>
      </div>
    </section>
  );
};

export default BookDemo;
