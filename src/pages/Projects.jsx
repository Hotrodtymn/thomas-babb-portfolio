import React, { useMemo, useState } from "react";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import FadeIn from "../components/FadeIn";

const Projects = () => {
  const [sortOption, setSortOption] =
    useState("featured");

  const sortedProjects = useMemo(() => {
    const sorted = [...projects];

    if (sortOption === "featured") {
      return sorted.sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured)
      );
    }

    if (sortOption === "newest") {
      return sorted.sort(
        (a, b) =>
          new Date(b.date) - new Date(a.date)
      );
    }

    if (sortOption === "oldest") {
      return sorted.sort(
        (a, b) =>
          new Date(a.date) - new Date(b.date)
      );
    }

    if (sortOption === "a-z") {
      return sorted.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    if (sortOption === "z-a") {
      return sorted.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    }

    return sorted;
  }, [sortOption]);

  return (
    <section className="projects-page">
      <FadeIn>
        <div className="projects-page__header">
          <p className="page__eyebrow">
            MY WORK
          </p>

          <h1>Projects</h1>

          <p>
            A collection of projects I've built while
            developing my skills in frontend development.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="projects-controls">
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
            Showing {sortedProjects.length}{" "}
            {sortedProjects.length === 1
              ? "project"
              : "projects"}
          </span>
        </div>

        <div className="projects-grid">
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </FadeIn>

      {sortedProjects.length === 0 && (
        <div className="projects-empty">
          <p>No projects found.</p>
        </div>
      )}
    </section>
  );
};

export default Projects;

