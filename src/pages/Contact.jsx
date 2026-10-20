import useModalFocus from "../hooks/useModalFocus";

import React, { useEffect, useRef, useState } from "react";

const EMAILJS_SERVICE_ID = "service_37vvo12";
const EMAILJS_TEMPLATE_ID = "template_zepbzpv";
const EMAILJS_PUBLIC_KEY = "CPDpNHh5-XGqxpOZ6";

const Contact = ({ onClose }) => {
  const dialogRef = useRef(null);
  useModalFocus(dialogRef);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };


    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (submissionStatus.message) {
      setSubmissionStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setSubmissionStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: {
              user_name: formData.name.trim(),
              user_email: formData.email.trim(),
              user_message: formData.message.trim(),
              reply_to: formData.email.trim(),
              title: `Portfolio Contact - ${formData.name.trim()}`,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(
          errorDetails || "EmailJS could not send the message."
        );
      }

      setSubmissionStatus({
        type: "success",
        message: "Thanks for reaching out! Your message has been sent.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS submission failed:", error);

      setSubmissionStatus({
        type: "error",
        message:
          "Your message couldn't be sent. Please try again or email tomleebabb@gmail.com directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
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
        ref={dialogRef}
        tabIndex={-1}
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
          <p className="page__eyebrow">GET IN TOUCH</p>

          <h2 id="contact-modal-title">
            Let's work together.
          </h2>

          <p>
            I'm interested in frontend development
            opportunities, freelance projects, and
            building useful web experiences.
          </p>
        </div>

        <div className="contact-modal__grid">
          <div className="contact-modal__info">
            <h3>Contact Information</h3>

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
                rel="noopener noreferrer"
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
                rel="noopener noreferrer"
                className="contact-item__link"
              >
                linkedin.com/in/thomasbabbpm
              </a>
            </div>
          </div>

          <div className="contact-modal__form-wrapper">
            <h3>Send Me a Message</h3>

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
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  maxLength={120}
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
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  maxLength={254}
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
                  maxLength={5000}
                />
              </div>

              {submissionStatus.message && (
                <p
                  className={`contact-form__status contact-form__status--${submissionStatus.type}`}
                  role="status"
                  aria-live="polite"
                >
                  {submissionStatus.message}
                </p>
              )}

              <button
                type="submit"
                className="button button--primary"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;