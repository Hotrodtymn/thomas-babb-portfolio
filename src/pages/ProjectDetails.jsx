import React, { useEffect, useRef, useState } from "react";

import { Link, useParams } from "react-router-dom";

import projects from "../data/projects";
import FadeIn from "../components/FadeIn";

const ProjectScreenshot = ({ screenshot, title, index, onOpen }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return null;
  }

  return (
    <button
      className="project-gallery__item"
      onClick={() =>
        onOpen({
          src: screenshot,
          title,
          index,
        })
      }
      aria-label={`View ${title} screenshot ${index + 1}`}
    >
      <img
        src={screenshot}
        alt={`${title} screenshot ${index + 1}`}
        onError={() => setImageError(true)}
      />
    </button>
  );
};

const ProjectDetails = () => {
  const { slug } = useParams();

  const [lightboxImage, setLightboxImage] = useState(null);

  const touchStartX = useRef(null);

  const project = projects.find((project) => project.slug === slug);

  const currentProjectIndex = projects.findIndex(
    (project) => project.slug === slug,
  );

  const previousProject =
    projects[(currentProjectIndex - 1 + projects.length) % projects.length];

  const nextProject = projects[(currentProjectIndex + 1) % projects.length];

  const openPreviousImage = () => {
    if (!lightboxImage || !project) {
      return;
    }

    const previousIndex =
      lightboxImage.index === 0
        ? project.screenshots.length - 1
        : lightboxImage.index - 1;

    setLightboxImage({
      src: project.screenshots[previousIndex],
      title: project.title,
      index: previousIndex,
    });
  };

  const openNextImage = () => {
    if (!lightboxImage || !project) {
      return;
    }

    const nextIndex =
      lightboxImage.index === project.screenshots.length - 1
        ? 0
        : lightboxImage.index + 1;

    setLightboxImage({
      src: project.screenshots[nextIndex],
      title: project.title,
      index: nextIndex,
    });
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;

    const swipeDistance = touchStartX.current - touchEndX;

    const minimumSwipeDistance = 50;

    if (Math.abs(swipeDistance) < minimumSwipeDistance) {
      touchStartX.current = null;
      return;
    }

    if (swipeDistance > 0) {
      openNextImage();
    } else {
      openPreviousImage();
    }

    touchStartX.current = null;
  };

  useEffect(() => {
    if (!lightboxImage) {
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxImage(null);
      }

      if (event.key === "ArrowLeft") {
        openPreviousImage();
      }

      if (event.key === "ArrowRight") {
        openNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  if (!project) {
    return (
      <section className="page">
        <p className="page__eyebrow">PROJECT NOT FOUND</p>

        <h1>Project Not Found</h1>

        <p>The project you're looking for doesn't exist.</p>

        <Link to="/projects" className="project-details__back">
          ← Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="project-details">
      {/* Back to Projects */}
      <FadeIn>
        <Link to="/projects" className="project-details__back">
          ← Back to Projects
        </Link>
      </FadeIn>

      {/* Hero */}
      <FadeIn>
        <div className="project-details__hero">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="project-details__placeholder">{project.title}</div>
          )}
        </div>
      </FadeIn>

      {/* Project Header */}
      <FadeIn>
        <div className="project-details__header">
          <div className="project-details__label">
            <p className="page__eyebrow">PROJECT</p>

            {project.featured && (
              <span className="project-details__featured">
                Featured Project
              </span>
            )}
          </div>

          <h1>{project.title}</h1>

          <p>{project.description}</p>

          {/* Completion Date */}
          {project.date && (
            <div className="project-details__date">
              <span>Completed</span>

              <strong>
                {new Date(project.date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </strong>
            </div>
          )}

          {/* Project Overview */}
          <div className="project-details__overview">
            <div className="project-details__overview-item">
              <span>Project Type</span>

              <strong>{project.type}</strong>
            </div>

            <div className="project-details__overview-item">
              <span>Technologies</span>

              <strong>{project.technologies.length}</strong>
            </div>

            <div className="project-details__overview-item">
              <span>Status</span>

              <strong>{project.featured ? "Featured" : "Completed"}</strong>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Project Information */}
      <FadeIn>
        <div className="project-details__body">
          <div className="project-details__content">
            <h2>About the Project</h2>

            <p className="project-details__description">{project.details}</p>

            <div className="project-details__links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--secondary"
                >
                  View on GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--primary"
                >
                  View Live Site
                </a>
              )}
            </div>
          </div>

          {/* Technologies */}
          <aside className="project-details__sidebar">
            <h2>Technologies</h2>

            <div className="project-details__technologies">
              {project.technologies.map((technology) => (
                <span key={technology} className="project-card__technology">
                  {technology}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </FadeIn>

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <FadeIn>
          <div className="project-gallery">
            <div className="project-gallery__header">
              <p className="page__eyebrow">PROJECT SCREENSHOTS</p>

              <h2>Inside the Project</h2>
            </div>

            <div className="project-gallery__grid">
              {project.screenshots.map((screenshot, index) => (
                <ProjectScreenshot
                  key={screenshot}
                  screenshot={screenshot}
                  title={project.title}
                  index={index}
                  onOpen={setLightboxImage}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="lightbox"
          onClick={() => setLightboxImage(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="lightbox__close"
            onClick={() => setLightboxImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            className="lightbox__arrow lightbox__arrow--left"
            onClick={(event) => {
              event.stopPropagation();
              openPreviousImage();
            }}
            aria-label="Previous image"
          >
            ←
          </button>

          <img
            key={lightboxImage.src}
            src={lightboxImage.src}
            alt={`${lightboxImage.title} screenshot ${lightboxImage.index + 1}`}
            className="lightbox__image lightbox__image--fade"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            className="lightbox__arrow lightbox__arrow--right"
            onClick={(event) => {
              event.stopPropagation();
              openNextImage();
            }}
            aria-label="Next image"
          >
            →
          </button>

          <div className="lightbox__counter">
            {lightboxImage.index + 1} / {project.screenshots.length}
          </div>
        </div>
      )}

      {/* Previous / Next Project */}
      <FadeIn>
        <div className="project-details__navigation">
          <Link
            to={`/projects/${previousProject.slug}`}
            className="project-details__navigation-link"
          >
            <span>← Previous Project</span>

            <strong>{previousProject.title}</strong>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="project-details__navigation-link project-details__navigation-link--next"
          >
            <span>Next Project →</span>

            <strong>{nextProject.title}</strong>
          </Link>
        </div>
      </FadeIn>

      {/* Back to All Projects */}
      <FadeIn>
        <div className="project-details__back-bottom">
          <Link to="/projects" className="project-details__back-bottom-link">
            ← Back to All Projects
          </Link>
        </div>
      </FadeIn>
    </section>
  );
};

export default ProjectDetails;
