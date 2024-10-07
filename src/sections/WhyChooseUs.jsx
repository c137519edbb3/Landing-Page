// MainComponent.jsx
import React from 'react';
import SectionComponent from '../components/SectionComponent';

const ChooseUs = () => {
  return (
    <div>
      {/* Pass props to SectionComponent */}
      <SectionComponent 
        text="Product" 
        heading="Why Choose Us?" 
        subheading="Transform security management with context-aware AI, providing real-time anomaly detection and tailored insights to enhance safety and efficiency across industries."
      >
        {/* Custom content passed as 'children' */}
        

        <WidgetColumn /> {/* Use the WidgetColumn component here */}


      </SectionComponent>
    </div>
  );
};

export default ChooseUs;



const WidgetColumn = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* First Row: 3 Boxes */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
          <div style={boxStyleR1}>Box 1</div>
          <div style={boxStyleR1}>Box 2</div>
          <div style={boxStyleR1}>Box 3</div>
        </div>
  
        {/* Second Row: 2 Boxes */}
        <div style={{ display: 'flex', width: '100%', marginBottom: '10px' }}>
          <div style={boxStyleR2}>Box 4</div>
          <div style={boxStyleR2}>Box 5</div>
        </div>

        {/* Third Row: 3 Boxes */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '10px', alignItems: 'center' }}>
            <div style={boxStyleR3}>Box 6</div>
            <div style={boxStyleR3}>Box 7</div>
            <div style={boxStyleR3}>Box 8</div>
        </div>

        {/* Fourth Row: 2 Boxes */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <div style={boxStyleR3}>Box 9</div>
            <div style={boxStyleR3}>Box 10</div>
        </div>
      </div>
    );
  };
  const boxStyleR1 = {
    width: '260px',
    height: '320px',
    border: '2px solid #ccc',
    borderRadius: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '20px 20px 50px rgba(0, 0, 0, 0.1)', // Adding shadow
  };
  
  const boxStyleR2 = {
    width: '400px',
    height: '175px',
    border: '2px solid #ccc',
    borderRadius: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '20px 20px 50px rgba(0, 0, 0, 0.1)', // Adding shadow
  };
  
  const boxStyleR3 = {
    width: '170px',
    height: '60px',
    border: '2px solid #ccc',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '20px 20px 50px rgba(0, 0, 0, 0.1)', // Adding shadow
  };
  
