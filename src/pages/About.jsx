import React from "react";

import FadeIn from "../components/FadeIn";
import skillCategories from "../data/skills";
import experience from "../data/experience";

const About = () => {
  return (
    <section className="about-page">
      <FadeIn>
        <div className="about-page__header">
          <p className="page__eyebrow">ABOUT ME</p>

          <h1>Building for the web.</h1>

          <p className="about-page__intro">
            I'm Thomas Babb, a frontend software developer focused on creating
            responsive, user-friendly web applications.
          </p>
        </div>
      </FadeIn>

      <div className="about-page__grid">
        <FadeIn>
          <div className="about-page__content">
            <h2>My Approach</h2>

            <p>
              I enjoy taking an idea and turning it into an interactive web
              experience. I'm particularly interested in frontend development,
              responsive design, reusable components, and creating interfaces
              that are easy to use.
            </p>

            <p>
              My development experience includes building applications with
              JavaScript and React, working with APIs, implementing routing,
              managing application state, and using Git and GitHub to manage
              projects.
            </p>

            <p>
              I'm continuing to expand my skills by building projects that
              challenge me to learn new technologies and solve real-world
              problems.
            </p>

            <div className="about-page__cta">
              <a
                href="/assets/Thomas-Babb-Resume.pdf"
                download
                className="button button--primary"
              >
                Download Resume
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="about-page__skills">
            <h2>Skills & Technologies</h2>

            <div className="skills-categories">
              {skillCategories.map((category) => (
                <div
                  key={category.title}
                  className={`skill-category ${
                    category.learning ? "skill-category--learning" : ""
                  }`}
                >
                  <h3>{category.title}</h3>

                  <div className="skills-grid">
                    {category.skills.map((skill) => (
                      <div key={skill} className="skill">
                        <span className="skill__dot"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-page__learning-note">
  <span className="about-page__learning-dot"></span>

  <div>
    <strong>Currently learning</strong>

    <p>
      Continuing to deepen my React skills, JavaScript
      knowledge, state management, and API integration.
    </p>
  </div>
</div>
        </FadeIn>
      </div>
      <FadeIn>
        <section className="experience">
          <div className="experience__header">
            <p className="page__eyebrow">EXPERIENCE</p>

            <h2>My Experience</h2>
          </div>

          <div className="experience__timeline">
            {experience.map((item) => (
              <article key={item.id} className="experience__item">
                <div className="experience__marker"></div>

                <div className="experience__content">
                  <div className="experience__top">
                    <div>
                      <h3>{item.role}</h3>

                      <p className="experience__company">{item.company}</p>
                    </div>

                    <span className="experience__period">{item.period}</span>
                  </div>

                  <p className="experience__description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>
    </section>
  );
};

export default About;
