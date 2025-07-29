import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className="home-container scroll-margin-top-20px">
      <h4>Hi! I'm</h4>
      <h1>Jella Rakesh</h1>
      <p>
        I'm a passionate frontend developer, pencil sketch artist, and
        photographer who blends code with creativity to craft both digital and
        visual experiences.
      </p>

      <div className="home-buttons">
        <a
          href="http://www.linkedin.com/in/j-rakesh-bb8213256"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rakki2024"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/rakki953"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
        >
          <FaInstagram />
        </a>
        <a href="/resume.pdf" download className="resume-btn">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Home;
