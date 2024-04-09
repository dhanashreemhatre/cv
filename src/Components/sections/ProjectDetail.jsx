import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../assets/data/projectData.json';


function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = projectData.find((proj) => proj.id === parseInt(projectId));
    setProject(selectedProject);
  }, [projectId]);

  return (
    <div>
      {project ? (
        <div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          {/* Add more details about the project */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProjectDetail;
