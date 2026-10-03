import React, { useState } from "react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import FadeIn from "../components/FadeIn";
import technologies from "../data/technologies";
import Contact from "./Contact";

const Home = () => {
  const [isContactOpen, setIsContactOpen] =
    useState(false);

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <>
      <section className="home">
        <div className="home__content">
          <p className="home__eyebrow">
            FRONTEND SOFTWARE DEVELOPER
          </p>

          <h1 className="home__title">
            Hi, I'm Thomas Babb.
            <span>I build for the web.</span>
          </h1>

          <p className="home__description">
            I create responsive, user-focused web applications
            using modern JavaScript, React, and web technologies.
          </p>

          <div className="home__buttons">
            <Button to="/projects">
              View My Projects
            </Button>

            <Button
              onClick={() =>
                setIsContactOpen(true)
              }
              variant="secondary"
            >
              Contact Me
            </Button>

            <Button
              href="/assets/Thomas-Babb-Resume.pdf"
              variant="secondary"
              download
            >
              Download Resume
            </Button>
          </div>
        </div>

        <div className="home__profile">
          <div className="home__profile-image">
            <img
              src="/assets/profile.jpg"
              alt="Thomas Babb"
            />
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="featured">
          <div className="featured__header">
            <div>
              <p className="page__eyebrow">
                SELECTED WORK
              </p>

              <h2>Featured Projects</h2>

              <p className="featured__count">
                {featuredProjects.length}{" "}
                {featuredProjects.length === 1
                  ? "Featured Project"
                  : "Featured Projects"}
              </p>
            </div>

            <Link
              to="/projects"
              className="featured__view-all"
            >
              View All Projects →
            </Link>
          </div>

          <div className="featured__grid">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="home__technologies">
          <div className="home__technologies-header">
            <p className="page__eyebrow">
              TECHNOLOGIES
            </p>

            <h2>Tools I Work With</h2>
          </div>

          <div className="home__technologies-grid">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <div
                  key={technology.name}
                  className="home__technology"
                >
                  <Icon className="home__technology-icon" />

                  <span>
                    {technology.name}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </FadeIn>

      {isContactOpen && (
        <Contact
          onClose={() =>
            setIsContactOpen(false)
          }
        />
      )}
    </>
  );
};

export default Home;