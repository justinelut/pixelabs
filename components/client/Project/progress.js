import React from 'react'
import ProgresSteps from './progressteps'

const projects = [
  {
    name: "Project A",
    progress: 25,
  },
  {
    name: "Project B",
    progress: 50,
  },
  {
    name: "Project C",
    progress: 75,
  },
  {
    name: "Project D",
    progress: 100,
  },
];

function progress() {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.name}>
          <h3>{project.name}</h3>
          <ProgresSteps progress={project.progress} />
        </div>
      ))}
    </div>
  );
}

export default progress;
