import React, { useState, useEffect } from 'react';
import ProjectCards from './Cards/ProjectCards/ProjectCards';
import projectData from '../assets/data/projectData.json';
import { Link } from 'react-router-dom';

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <div id='projects'>
      <h3>/* My Project Directory */</h3>
      <div>
        {projects.map((project, index) => (
          <Link to={`/projects/${project.id}`} key={index}>
          <ProjectCards key={index} project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Project;
