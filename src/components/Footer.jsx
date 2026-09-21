import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div>
            <Link to="/" className="footer__logo">
              Thomas Babb
            </Link>

            <p className="footer__description">
              Frontend software developer building responsive
              and user-focused web applications.
            </p>
          </div>

          <div className="footer__links">
            <Link to="/">Home</Link>

            <Link to="/projects">Projects</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer__social">
            <a
              href="https://github.com/Hotrodtymn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/thomasbabbpm/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Thomas Babb. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;