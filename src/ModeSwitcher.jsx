import React, { useState, useEffect } from 'react';
import './ModeSwitcher.css'; // Ensure this is in the same directory

const ModeSwitcher = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    // Apply the selected mode class to the body element
    document.body.className = mode;
  }, [mode]);

  const handleModeChange = (modeValue) => {
    setMode(modeValue);
  };

  return (
    <div className="mode-switcher">
      <button onClick={() => handleModeChange('dark')}>Dark Mode</button>
      <button onClick={() => handleModeChange('light')}>Light Mode</button>
      <button onClick={() => handleModeChange('neon')}>Neon Mode</button>
      <button onClick={() => handleModeChange('night')}>Night Mode</button>
    </div>
  );
};

export default ModeSwitcher;