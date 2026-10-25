import React from "react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import FadeIn from "../components/FadeIn";
import technologies from "../data/technologies";
test

const Home = ({ onContactClick }) => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="home-page">
      <section className="home">
        <div className="home__content">
          <p className="home__eyebrow">Frontend Developer</p>

          <h1 className="home__title">
            Hi, I'm Thomas Babb.
            <span>I build for the web.</span>
          </h1>

          <p className="home__description">
            I’m a Frontend Developer specializing in React, JavaScript,
            TypeScript, and Next.js, with additional experience in Agile project
            management and media production.
          </p>

          <div className="home__buttons">
            <Button to="/projects" variant="secondary">View My Projects</Button>

            <Button onClick={onContactClick} variant="contact">
              Contact Me
            </Button>

            <Button
              href="/assets/ThomasBabb Resume.pdf"
              variant="secondary"
              download="Thomas-Babb-Resume.pdf"
            >
              Download Resume
            </Button>
          </div>
        </div>

        <div className="home__profile">
          <div className="home__profile-image">
            <img src="/assets/profile.jpg" alt="Thomas Babb" />
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="featured">
          <div className="featured__header">
            <div>
              <p className="page__eyebrow">SELECTED WORK</p>

              <h2>Featured Projects</h2>

              <p className="featured__count">
                {featuredProjects.length}{" "}
                {featuredProjects.length === 1
                  ? "Featured Project"
                  : "Featured Projects"}
              </p>
            </div>

            <Link to="/projects" className="featured__view-all">
              View All Projects →
            </Link>
          </div>

          <div className="featured__grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="home__technologies">
          <div className="home__technologies-header">
            <p className="page__eyebrow">TECHNOLOGIES</p>

            <h2>Tools I Work With</h2>
          </div>

          <div className="home__technologies-grid">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <div key={technology.name} className="home__technology">
                  <Icon className="home__technology-icon" aria-hidden="true" />

                  <span>{technology.name}</span>
                </div>
              );
            })}
          </div>
          <p className="ai-tools">
            AI-assisted development tools: Google Gemini and ChatGPT.
          </p>
        </section>
      </FadeIn>
    </div>
  );
};

export default Home;
