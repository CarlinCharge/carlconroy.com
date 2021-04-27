import React from "react";
import projectsList from "./projectsList";
import Project from "../Project/Project";

const renderProject = (project, index) => {
  return <Project {...project} key={index} />;
};

const Projects = () => {
  return projectsList.map(renderProject);
};

export default Projects;
