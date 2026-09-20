import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <Link to="/" className="nav__logo">
          Thomas Babb
        </Link>

        <div className="nav__links">
          <Link to="/" className="nav__link">
            Home
          </Link>

          <Link to="/projects" className="nav__link">
            Projects
          </Link>

          <Link to="/about" className="nav__link">
            About
          </Link>

          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;