import React, { useEffect, useState, useRef } from 'react';
import EyeconPurpleLogo from "../assets/images/eyecon_purple.png";

const PurpleLogo = () => {

  return (
    <img
          src={EyeconPurpleLogo}
          alt="Eyecon Logo"
          className="h-12 mt-12 mx-auto"
        />
  );
};

export default PurpleLogo;