import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      {props.projects.map((project) => (
        <ProjectItem
          key={project.id}
          name={project.name}
          about={project.about} 
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectList;
