import React from 'react';
import './ProjectCards.css';

function ProjectCards({ project }) {
  const { name, tech_stack, description, image } = project;

  return (
    <div className='flex flex-col gap-3 project-card'>
      {/* Display the project image */}
      <img src={image} alt={`Image for ${name}`} className='project-image'/>
      <div>
        <h2>{name}</h2>
        <span>{tech_stack}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCards;
