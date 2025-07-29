import React from "react";

function Projects() {
  const projects = [
    {
      title: "URL Shortener",
      description:
        "A web app to shorten long URLs with custom shortcodes and expiry.",
      link: "https://your-url-shortener-link.com",
    },
    {
      title: "Face Mask Detector",
      description: "AI project to detect whether a person is wearing a mask.",
      link: "https://your-face-mask-detector.com",
    },
    {
      title: "MindMate Chatbot",
      description:
        "Mental health support chatbot for stress relief and reflection.",
      link: "https://your-mindmate-link.com",
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
