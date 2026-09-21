import React, { useState } from "react";

import FadeIn from "../components/FadeIn";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      `mailto:tomleebabb@gmail.comsubject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-page">
      <FadeIn>
        <div className="contact-page__header">
          <p className="page__eyebrow">
            GET IN TOUCH
          </p>

          <h1>Let's work together.</h1>

          <p>
            I'm interested in frontend development opportunities,
            freelance projects, and building useful web
            experiences.
          </p>
        </div>
      </FadeIn>

      <div className="contact-page__grid">
        <FadeIn>
          <div className="contact-page__info">
            <h2>Contact Information</h2>

            <div className="contact-item">
              <span className="contact-item__label">
                Email
              </span>

              <a
                href="mailto:tomleebabb@gmail.com"
                className="contact-item__link"
              >
                YOUR_EMAIL@example.com
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
        </FadeIn>

        <FadeIn>
          <div className="contact-page__form-wrapper">
            <h2>Send Me a Message</h2>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form__field">
                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
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
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;