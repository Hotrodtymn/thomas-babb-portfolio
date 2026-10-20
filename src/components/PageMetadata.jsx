import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import projects from "../data/projects";

const origin = "https://www.thomasbabb.com";
const description = "Thomas Babb is a Frontend Developer specializing in React, JavaScript, TypeScript, and Next.js. Explore responsive web applications, projects, and professional experience.";

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const project = projects.find((item) => pathname === `/projects/${item.slug}`);
    const titles = { "/": "Thomas Babb | Frontend Developer", "/about": "About | Thomas Babb | Frontend Developer", "/projects": "Projects | Thomas Babb | Frontend Developer" };
    const known = Boolean(titles[pathname] || project);
    const title = titles[pathname] || (project ? `${project.title} | Thomas Babb | Frontend Developer` : "Page Not Found | Thomas Babb");
    const summary = project?.description || description;
    document.title = title;
    const meta = (attribute, key, value) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) { element = document.createElement("meta"); element.setAttribute(attribute, key); document.head.appendChild(element); }
      element.content = value;
    };
    meta("name", "description", summary);
    meta("name", "robots", known ? "index, follow" : "noindex, follow");
    meta("property", "og:title", title);
    meta("property", "og:description", summary);
    meta("property", "og:url", origin + pathname);
    meta("name", "twitter:title", title);
    meta("name", "twitter:description", summary);
    document.querySelector('link[rel="canonical"]').href = origin + pathname;
  }, [pathname]);
  return null;
}
