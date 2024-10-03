import React from "react";
import SectionTitleButton from "../components/SectionTitleButton";
import Accordion from "../components/Accordian";

const FAQ = () => {
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <SectionTitleButton title="FAQs"/>

        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl">
          Frequently Asked Questions
        </h1>

        <p className="text-lg font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48">
          We got answer to your every question
        </p>
      </div>

      <Accordion />
    </section>
  );
};

export default FAQ;
