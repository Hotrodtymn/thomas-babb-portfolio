import React, { useEffect, useState } from "react";

const Contact = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact - ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href =
      `mailto:tomleebabb@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleOverlayClick = (event) => {
    if (
      event.target === event.currentTarget
    ) {
      onClose();
    }
  };

  return (
    <div
      className="contact-modal"
      onMouseDown={handleOverlayClick}
    >
      <div
        className="contact-modal__content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          type="button"
          className="contact-modal__close"
          onClick={onClose}
          aria-label="Close contact form"
        >
          ×
        </button>

        <div className="contact-modal__header">
          <p className="page__eyebrow">
            GET IN TOUCH
          </p>

          <h1 id="contact-modal-title">
            Let's work together.
          </h1>

          <p>
            I'm interested in frontend development
            opportunities, freelance projects, and
            building useful web experiences.
          </p>
        </div>

        <div className="contact-modal__grid">
          <div className="contact-modal__info">
            <h2>
              Contact Information
            </h2>

            <div className="contact-item">
              <span className="contact-item__label">
                Email
              </span>

              <a
                href="mailto:tomleebabb@gmail.com"
                className="contact-item__link"
              >
                tomleebabb@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-item__label">
                GitHub
              </span>

              <a
                href="https://github.com/Hotrodtymn"
                target="_blank"
                rel="noreferrer"
                className="contact-item__link"
              >
                github.com/Hotrodtymn
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-item__label">
                LinkedIn
              </span>

              <a
                href="https://www.linkedin.com/in/thomasbabbpm/"
                target="_blank"
                rel="noreferrer"
                className="contact-item__link"
              >
                linkedin.com/in/thomasbabbpm
              </a>
            </div>
          </div>

          <div className="contact-modal__form-wrapper">
            <h2>
              Send Me a Message
            </h2>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form__field">
                <label htmlFor="contact-name">
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-email">
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="7"
                  required
                />
              </div>

              <button
                type="submit"
                className="button button--primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;