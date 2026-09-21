import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found">
      <p className="page__eyebrow">404 ERROR</p>

      <h1>Page Not Found</h1>

      <p className="not-found__description">
        Sorry, the page you're looking for doesn't exist or
        may have been moved.
      </p>

      <div className="not-found__actions">
        <Link
          to="/"
          className="home__button home__button--primary"
        >
          Back to Home
        </Link>

        <Link
          to="/projects"
          className="home__button home__button--secondary"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
};

export default NotFound;