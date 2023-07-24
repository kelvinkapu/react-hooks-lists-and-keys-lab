import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map(project => (
        <div className="project" key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <ProjectItem technologies={project.technologies} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
