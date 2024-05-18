// src/components/DarkModeToggle.jsx
import React from 'react';
import darkModeImg from './assets/images/dark-mode/desk-lamp-lamp-svgrepo-com.svg';
import lightModeImg from './assets/images/dark-mode/desk_lamp_on.svg';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode} className="rounded-full">
      <img src={isDarkMode ? darkModeImg : lightModeImg} alt="Dark Mode Toggle" width={75} height={75} />
    </button>
  );
};

export default DarkModeToggle;
