// src/components/sections/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <button onClick={toggleDrawer} className="text-2xl p-4">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`drawer fixed top-0 left-0 h-full bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col p-4 space-y-4">
      <button onClick={toggleDrawer} className="text-2xl p-4"><FaTimes /></button>

          <Link
            className="nav-item"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleDrawer}
          >
            About
          </Link>
          <Link
            className="nav-item"
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleDrawer}
          >
            Experience
          </Link>
          <Link
            className="nav-item"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleDrawer}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
