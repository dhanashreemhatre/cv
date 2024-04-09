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
              <Routes> {/* Use Routes instead of Switch */}
                <Route path="/projects/:projectId" element={<ProjectDetail />} /> {/* Use element prop */}
              </Routes>
              <Routes>
                <Route path="/" element={MainContent}/>
              </Routes>
          
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
