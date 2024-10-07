// MainComponent.jsx
import React from 'react';
import SectionComponent from '../components/SectionComponent';

const Team = () => {
  return (
    <div>
      {/* Pass props to SectionComponent */}
      <SectionComponent 
        text="Team" 
        heading="Meet the incredible team" 
        subheading="We pride ourselves of being the best of the best and our team encapsulates that."
      >
        {/* Custom content passed as 'children' */}
        <HorizontalSlidingCards />
      </SectionComponent>
    </div>
  );
};

export default Team;

const HorizontalSlidingCards = () => {
  return (
    <div style={sliderContainerStyle}>
      <div style={cardStyle}>Card 1</div>
      <div style={cardStyle}>Card 2</div>
      <div style={cardStyle}>Card 3</div>
      <div style={cardStyle}>Card 4</div>
      <div style={cardStyle}>Card 5</div>
    </div>
  );
};

const sliderContainerStyle = {
  display: 'flex',
  overflow: 'hidden',
  width: '40%', // Adjust to fit your layout
  height: '250px', // Adjust height as needed
  position: 'relative',
};

const cardStyle = {
  minWidth: '200px', // Adjust width as needed
  height: '200px',
  border: '2px solid #ccc',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 10px',
  backgroundColor: '#B6B6B64E',
  animation: 'slide 2s linear infinite', // Set sliding animation duration
};

// CSS for the animation
const animationStyle = `
  @keyframes slide {
    0% {
      transform: translateX(100%); // Start from right
    }
    20% {
      transform: translateX(0); // Slide to original position
    }
    80% {
      transform: translateX(0); // Stay at original position
    }
    100% {
      transform: translateX(-100%); // Slide out to left
    }
  }
`;

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(animationStyle, styleSheet.cssRules.length);

