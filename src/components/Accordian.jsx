import React, { useState } from "react";
import "./Accordian.css"; // Import your custom styles

// FAQ data
const faqData = [
  {
    question: "What is your return policy?",
    answer: "Our return policy is 30 days.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping takes 5-7 business days.",
  },
  {
    question: "Do you offer technical support?",
    answer: "Yes, 24/7 technical support is available.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards and PayPal.",
  },
  {
    question: "Can I change my order?",
    answer: "Yes, you can modify your order before it is shipped.",
  },
];

// SVG Icons for Plus and Minus
const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5V19M5 12H19"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Accordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle an FAQ item
  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full lg:w-3/4 mx-auto px-4 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item bg-gray-100 rounded-lg ${
              expandedIndex === index ? "border-gray-400" : "border-gray-300"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              {expandedIndex === index ? <MinusIcon /> : <PlusIcon />}
            </button>

            <div
              className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                expandedIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-600">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
