import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article className="project-card">
      <Link
        to={`/projects/${project.slug}`}
        className={`project-card__image ${
          imageLoaded
            ? "project-card__image--loaded"
            : ""
        }`}
      >
        {project.featured && (
          <div className="project-card__featured">
            Featured
          </div>
        )}

        {project.image && !imageError ? (
          <>
            {!imageLoaded && (
              <div className="project-card__image-loading">
                Loading...
              </div>
            )}

            <img
              src={project.image}
              alt={project.title}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />

            <div className="project-card__overlay">
              <span>View Project</span>

              <span className="project-card__overlay-arrow">
                →
              </span>
            </div>
          </>
        ) : (
          <div className="project-card__placeholder">
            <span>
              {imageError
                ? "Image unavailable"
                : project.title}
            </span>

            <div className="project-card__overlay">
              <span>View Project</span>

              <span className="project-card__overlay-arrow">
                →
              </span>
            </div>
          </div>
        )}
      </Link>

      <div className="project-card__content">
        <div className="project-card__top">
  <div>
    <Link
      to={`/projects/${project.slug}`}
      className="project-card__title"
    >
      {project.title}
    </Link>

    <p className="project-card__description">
      {project.description}
    </p>
  </div>

  {project.date && (
    <span className="project-card__date">
      {new Date(project.date).toLocaleDateString(
        "en-US",
        {
          month: "short",
          year: "numeric",
        }
      )}
    </span>
  )}
</div>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="project-card__technology"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card__footer">
          <Link
            to={`/projects/${project.slug}`}
            className="project-card__details"
          >
            View Project
            <span>→</span>
          </Link>

          <div className="project-card__links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
                onClick={(event) =>
                  event.stopPropagation()
                }
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
                onClick={(event) =>
                  event.stopPropagation()
                }
              >
                Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;