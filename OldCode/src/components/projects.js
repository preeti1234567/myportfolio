import React from "react";
import projects from "./projects.json";
import ProjectCard from "./projectCard";

const Projects = (props) => {
  return <div className="accordion" id="accordionExample">
    {projects.map( project => <ProjectCard key={project.id} project={project}/>)}
  </div>;
};

export default Projects;
