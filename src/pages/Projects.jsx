import React, { useMemo, useState } from "react";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import FadeIn from "../components/FadeIn";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortOption, setSortOption] = useState("featured");

  const filters = [
    "All",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "REST API",
  ];

  const filteredProjects = useMemo(() => {
    const filtered =
      activeFilter === "All"
        ? [...projects]
        : projects.filter((project) =>
            project.technologies.includes(activeFilter)
          );

    if (sortOption === "featured") {
      return filtered.sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured)
      );
    }

    if (sortOption === "newest") {
      return filtered.sort(
        (a, b) =>
          new Date(b.date) - new Date(a.date)
      );
    }

    if (sortOption === "oldest") {
      return filtered.sort(
        (a, b) =>
          new Date(a.date) - new Date(b.date)
      );
    }

    if (sortOption === "a-z") {
      return filtered.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    if (sortOption === "z-a") {
      return filtered.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    }

    return filtered;
  }, [activeFilter, sortOption]);

  return (
    <section className="projects-page">
      <FadeIn>
        <div className="projects-page__header">
          <p className="page__eyebrow">
            MY WORK
          </p>

          <h1>Projects</h1>

          <p>
            A collection of projects I've built while developing
            my skills in frontend development.
          </p>

          <div className="projects-page__stats">
            <span>
              {projects.length}{" "}
              {projects.length === 1
                ? "Project"
                : "Projects"}
            </span>

            <span>React & JavaScript</span>

            <span>Responsive Design</span>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="projects-controls">
          <div className="projects-filter">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`projects-filter__button ${
                  activeFilter === filter
                    ? "projects-filter__button--active"
                    : ""
                }`}
                onClick={() =>
                  setActiveFilter(filter)
                }
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-sort">
            <label htmlFor="project-sort">
              Sort by
            </label>

            <select
              id="project-sort"
              value={sortOption}
              onChange={(event) =>
                setSortOption(event.target.value)
              }
            >
              <option value="featured">
                Featured
              </option>

              <option value="newest">
                Newest
              </option>

              <option value="oldest">
                Oldest
              </option>

              <option value="a-z">
                Name: A-Z
              </option>

              <option value="z-a">
                Name: Z-A
              </option>
            </select>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="projects-results">
          <span>
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1
              ? "project"
              : "projects"}
          </span>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </FadeIn>

      {filteredProjects.length === 0 && (
        <div className="projects-empty">
          <p>
            No projects found for this technology.
          </p>
        </div>
      )}
    </section>
  );
};

export default Projects;