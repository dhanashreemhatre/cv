"use client"
// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import MainContent from './Components/MainContent';
import SideBar from './Components/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/sections/Navbar/Navbar';
import ProjectDetail from './Components/sections/ProjectDetail';
import DarkModeToggle from './Components/DarkModeToggle';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      {loading ? (
        <div id="loader" className='h-screen flex justify-center items-center bg-black'>
          <div className="waves">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </div>
      ) : (
        <div className={`${isDarkMode ? 'dark' : ''} min-h-screen`}>
          
          <div className="relative min-h-screen grid grid-cols-1 sm:grid-cols-2">
            <div className="sticky top-0 h-screen hidden sm:block">
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
              <SideBar />
            </div>
            <div className={`right ${isDarkMode ? 'dark' : 'light'} `}>
              <Routes>
                <Route path="/projects/:projectId" element={<ProjectDetail />} />
                <Route path="/" element={<MainContent isDarkMode={isDarkMode}/>} />
              </Routes>
            </div>
          </div>
          <div className="fixed bottom-4 right-4">
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
