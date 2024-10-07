// MainComponent.jsx
import React from 'react';
import SectionComponent from '../components/SectionComponent';

const WhoFor = () => {
  return (
    <div>
      <SectionComponent 
        text="User" 
        heading="Who Is This For?" 
        subheading="Our solution is tailored for industries like education, security, manufacturing, and public safety where real-time anomaly detection is critical."
      >
        <AnimatedCards /> 
      </SectionComponent>
    </div>
  );
};

const AnimatedCards = () => {
  return (
    <div style={containerStyle}>
      {/* Column 1 */}
      <div style={{ ...columnStyle, animation: 'slideUp 10s infinite 0s' }}>
        <div style={cardStyle}>Card 1</div>
        <div style={cardStyle}>Card 2</div>
        <div style={cardStyle}>Card 3</div>
      </div>
      {/* Column 2 */}
      <div style={{ ...columnStyle, animation: 'slideUp 10s infinite 2s' }}>
        <div style={cardStyle}>Card 4</div>
        <div style={cardStyle}>Card 5</div>
        <div style={cardStyle}>Card 6</div>
      </div>
      {/* Column 3 */}
      <div style={{ ...columnStyle, animation: 'slideUp 10s infinite 4s' }}>
        <div style={cardStyle}>Card 7</div>
        <div style={cardStyle}>Card 8</div>
        <div style={cardStyle}>Card 9</div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '50%',
  height: '400px', // Height of the widget
  overflow: 'hidden',
};

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '33%', // Adjust width of each column
};

// Base card style with animation
const cardStyle = {
  width: '100%', // Width of the cards
  height: '200px',
  border: '2px solid #ccc',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px 0',
  backgroundColor: '#B6B6B64E',
  animation: 'rollBack 10s infinite', // Add roll back animation
};

// CSS for the slide up animation
// const animationStyle = `
//   @keyframes slideUp {
//     0% {
//       transform: translateY(100%); // Start below
//     }
//     20% {
//       transform: translateY(0); // Move to original position
//     }
//     80% {
//       transform: translateY(0); // Stay at the original position
//     }
//     100% {
//       transform: translateY(-100%); // Move above
//     }
//   }

//   @keyframes rollBack {
//     0% {
//       transform: translateY(0); // Start at original position
//     }
//     20% {
//       transform: translateY(0); // Roll back effect
//     }
//     80% {
//       transform: translateY(0); // Stay at original position
//     }
//     100% {
//       transform: translateY(0); // End at original position
//     }
//   }
// `;

// // Inject the animation CSS into the document
// const styleSheet = document.styleSheets[0];
// styleSheet.insertRule(animationStyle, styleSheet.cssRules.length);

export default WhoFor;
