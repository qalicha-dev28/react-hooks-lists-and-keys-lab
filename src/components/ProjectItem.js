import React from "react";

function ProjectItem(props) {
  return (
    <div className="project-item">
      <h3>{props.name}</h3>
      <p>{props.about}</p>
      <div>
        {props.technologies.map((tech) => (
          <span key={tech} style={{ marginRight: '5px', padding: '3px 8px', border: '1px solid #ccc', borderRadius: '5px', display: 'inline-block' }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;