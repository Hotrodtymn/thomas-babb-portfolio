import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Nav = ({ onContactClick }) => {
  const menuButton = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleContactClick = () => {
    closeMenu();
    onContactClick();
  };

  const getNavClass = ({ isActive }) =>
    `nav__link ${isActive ? "nav__link--active" : ""}`;

  return (
    <nav className="nav" aria-label="Main navigation" onKeyDown={(event) => {
      if (event.key === "Escape" && menuOpen) { closeMenu(); menuButton.current.focus(); }
    }}>
      <div className="nav__container">
        <Link
          to="/"
          className="nav__logo"
          onClick={closeMenu}
        >
          Thomas Babb
        </Link>

        <button
          type="button"
          className={`nav__menu-button ${
            menuOpen ? "nav__menu-button--open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          ref={menuButton}
          aria-controls="navigation-links"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          id="navigation-links"
          className={`nav__links ${
            menuOpen ? "nav__links--open" : ""
          }`}
        >
          <NavLink
            to="/"
            className={getNavClass}
            onClick={closeMenu}
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={getNavClass}
            onClick={closeMenu}
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            className={getNavClass}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <button
            type="button"
            className="button button--contact nav__contact-button"
            onClick={handleContactClick}
          >
            Contact
          </button>

          <div className="nav__social">
            <a
              href="https://github.com/Hotrodtymn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="nav__social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/thomasbabbpm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="nav__social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;