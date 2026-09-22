import React from "react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import FadeIn from "../components/FadeIn";
import technologies from "../data/technologies";
import services from "../data/services";

const Home = () => {
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
              to="/contact"
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
  <section className="services">
    <div className="services__header">
  <div>
    <p className="page__eyebrow">
      WHAT I DO
    </p>
  </div>

  <div>
    <h2>Building for the web.</h2>

    <p>
      I focus on creating modern, responsive, and
      user-focused web experiences.
    </p>
  </div>
</div>

    <div className="services__grid">
      {services.map((service) => (
        <article
  key={service.id}
  className="service-card"
>
  <span className="service-card__number">
    {String(service.id).padStart(2, "0")}
  </span>

  <div className="service-card__icon">
    <service.icon />
  </div>

  <h3>{service.title}</h3>

  <p>{service.description}</p>
</article>
      ))}
    </div>
  </section>
</FadeIn>

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
</p>            </div>

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

        <span>{technology.name}</span>
      </div>
    );
  })}
</div>
  </section>
</FadeIn>

<FadeIn>
  <section className="home__cta">
    <div className="home__cta-content">
      <p className="page__eyebrow">
        LET'S CONNECT
      </p>

      <h2>
        Have a project in mind?
      </h2>

      <p>
        I'm always interested in new opportunities,
        projects, and ways to build something useful
        for the web.
      </p>

      <div className="home__cta-buttons">
        <Button to="/contact">
          Get In Touch
        </Button>

        <Button
          to="/projects"
          variant="secondary"
        >
          View My Work
        </Button>
      </div>
    </div>
  </section>
</FadeIn>
    </>
  );
};

export default Home;