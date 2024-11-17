import React from 'react';
import Hero from './sections/Hero';
import FAQ from './sections/FAQ';
import BookDemo from './sections/BookDemo';
import PurpleLogo from './sections/PurpleLogo';
import Methodology from './sections/Methodology';
import ChooseUs from './sections/WhyChooseUs';
import WhoFor from './sections/WhoFor';
import Team from './sections/Team';
import Footer from './sections/Footer';
import grid from './assets/images/grid.svg';
import shadows from './assets/images/shadows_bg.png';
import fluidBg from './assets/images/fluid_bg_1.avif';
import bgImg from './assets/images/bg_img.png'; // Import your background image

function App() {
  const wrapperStyle = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // Fluid background style
  const fluidBgStyle = {
    position: 'absolute',
    top: 300,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${fluidBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    opacity: 0.8,
    zIndex: 2,
    pointerEvents: 'none',
    filter: 'hue-rotate(80deg)',
  };

  const gridOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${grid})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '100% auto',
    opacity: 0.5,
    filter: 'brightness(0.9)',
    mixBlendMode: 'multiply',
    pointerEvents: 'none',
    zIndex: 0,
  };

  const shadowsStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundImage: `url(${shadows})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    height: '100%',
    zIndex: 1,
    pointerEvents: 'none',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  // Background image style for ChooseUs section
  const bgImgStyle = {
    position: 'absolute', // Change to absolute
    top: 'calc(200vh - 3136px)', // Position it accordingly
    left: 0,
    right: 0,
    height: '3136px', // Set the height you want
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'brightness(1.3) contrast(0.9) opacity(0.5) saturate(0.5)',
    zIndex: -10, // Ensure it stays behind content
  };

  return (
    <div style={wrapperStyle}>
      <div style={fluidBgStyle} /> {/* Fluid background */}
      <div style={gridOverlayStyle} /> {/* Grid background */}
      <div style={shadowsStyle} /> {/* Shadows background */}
      <div style={contentStyle}>
        <PurpleLogo />
        <Hero />
        <ChooseUs />
        {/* <div style={bgImgStyle} /> */}
        {/* <Methodology /> */}
        <WhoFor />
        {/* <Team /> */}
        <FAQ />
        <BookDemo />
        <Footer />
      </div>
    </div>
  );
}

export default App;
