import React from "react";
import SectionComponent from '../components/SectionComponent';
import Accordion from "../components/Accordian";

const FAQ = () => {
  return (

    <SectionComponent 
        text="FAQs" 
        heading="Frequently Asked Questions" 
        subheading="We got answer to your every question."
      >
        <Accordion />
    </SectionComponent>
  
  );
};

export default FAQ;
