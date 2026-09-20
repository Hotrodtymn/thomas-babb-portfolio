import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="projects-page">
      <div className="projects-page__header">
        <p className="page__eyebrow">MY WORK</p>

        <h1>Projects</h1>

        <p>
          A collection of projects I've built while developing
          my skills in frontend development.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;