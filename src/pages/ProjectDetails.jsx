import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <section className="page">
        <p className="page__eyebrow">PROJECT NOT FOUND</p>

        <h1>Project Not Found</h1>

        <p>
          The project you're looking for doesn't exist.
        </p>

        <Link
          to="/projects"
          className="project-details__back"
        >
          ← Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="project-details">
      <Link
        to="/projects"
        className="project-details__back"
      >
        ← Back to Projects
      </Link>

      <div className="project-details__image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="project-details__content">
        <p className="page__eyebrow">PROJECT</p>

        <h1>{project.title}</h1>

        <p className="project-details__description">
          {project.details}
        </p>

        <div className="project-details__technologies">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="project-card__technology"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="project-details__links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="home__button home__button--secondary"
            >
              View on GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="home__button home__button--primary"
            >
              View Live Site
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;