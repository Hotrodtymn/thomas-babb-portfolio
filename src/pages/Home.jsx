import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
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
          <Link
            to="/projects"
            className="home__button home__button--primary"
          >
            View My Projects
          </Link>

          <Link
            to="/contact"
            className="home__button home__button--secondary"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;