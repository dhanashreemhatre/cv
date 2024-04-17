import './App.css';
import MainContent from './Components/MainContent';
import SideBar from './Components/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component

import ProjectDetail from './Components/sections/ProjectDetail';

function App() {
  return (
    <Router>
      <div className='dark:bg-black'>
        <div className='relative min-h-screen'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='sticky top-0 h-screen'>
              <SideBar />
            </div>
            <div>
              <Routes> {/* Define all your routes inside a single Routes component */}
                <Route path="/projects/:projectId" element={<ProjectDetail />} /> {/* Specify the component to render using the element prop */}
                <Route path="/" element={<MainContent />} /> {/* Set up a Route for the root path */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
