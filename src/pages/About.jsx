import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "React Router",
  "REST APIs",
  "Git",
  "GitHub",
  "Responsive Design",
  "VS Code",
];

const About = () => {
  return (
    <section className="about-page">
      <div className="about-page__header">
        <p className="page__eyebrow">ABOUT ME</p>

        <h1>Building for the web.</h1>

        <p className="about-page__intro">
          I'm Thomas Babb, a frontend software developer focused
          on creating responsive, user-friendly web applications.
        </p>
      </div>

      <div className="about-page__grid">
        <div className="about-page__content">
          <h2>My Approach</h2>

          <p>
            I enjoy taking an idea and turning it into an
            interactive web experience. I'm particularly
            interested in frontend development, responsive
            design, reusable components, and creating interfaces
            that are easy to use.
          </p>

          <p>
            My development experience includes building
            applications with JavaScript and React, working with
            APIs, implementing routing, managing application
            state, and using Git and GitHub to manage projects.
          </p>

          <p>
            I'm continuing to expand my skills by building
            projects that challenge me to learn new technologies
            and solve real-world problems.
          </p>
        </div>

        <div className="about-page__skills">
          <h2>Skills & Technologies</h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div
                key={skill}
                className="skill"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;