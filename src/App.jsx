"use client"
import './App.css';
import React, { useState, useEffect } from 'react';
import MainContent from './Components/MainContent';
import SideBar from './Components/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component

import ProjectDetail from './Components/sections/ProjectDetail';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with setTimeout
    const timer = setTimeout(() => setLoading(false), 3000);

    // Clear the timer on component unmount to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
    {loading ? ( // Render the loader if loading state is true
      <div id="loader" className='h-screen flex justify-center items-center bg-black'>
        <div className="waves">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        </div>
      </div>
    ) : ( // Render the main content once loading is complete
      <div className='dark:bg-black'>
        <div className='relative min-h-screen'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='sticky top-0 h-screen hidden sm:block'>
              <SideBar />
            </div>
            <div>
              <Routes>
                <Route path="/projects/:projectId" element={<ProjectDetail />} />
                <Route path="/" element={<MainContent />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    )}
  </Router>
  );
}

export default App;
