import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <Link
  to={`/projects/${project.slug}`}
  className="project-card__image"
>
  <img
    src={project.image}
    alt={project.title}
  />
</Link>

      <div className="project-card__content">
        <Link to={`/projects/${project.slug}`} className="project-card__title">
          {project.title}
        </Link>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span key={technology} className="project-card__technology">
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-card__link"
            >
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-card__link project-card__link--primary"
            >
              Live Site
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
