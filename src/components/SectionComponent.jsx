// SectionComponent.jsx
import React from 'react';

const SectionComponent = ({ text, heading, subheading, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {/* First Row: Text from props */}
      <div style={{ 
          marginBottom: '20px', 
          border: '2px solid #0000002A',
          borderRadius: '10px',
          padding: '10px',
          backgroundColor: '#f9f9f9',
          fontSize:'11px',
        }}>
        <p style={{ padding: '0 20px', margin: '0' }}>{text}</p>
      </div>

      {/* Second Row: Heading from props */}
      <div>
      <p style={{ fontSize: '50px' }}>{heading}</p>
      </div>

      {/* Third Row: Subheading from props */}
      <div style={{ marginBottom: '80px', maxWidth: '600px', textAlign: 'center' }}>
        <h3 style={{ margin: '0', wordWrap: 'break-word' }}>{subheading}</h3> {/* Props used here */}
      </div>

      {/* Fourth Row: Children passed as a prop */}
      <div style={{ width: '100%', marginBottom: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children} {/* Any custom widget passed here */}
      </div>
    </div>
  );
};

export default SectionComponent;
