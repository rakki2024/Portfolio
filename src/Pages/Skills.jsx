import React from "react";
import "../index.css";

function Skills() {
  const skills = [
    { icon: "devicon-html5-plain", name: "HTML5" },
    { icon: "devicon-css3-plain", name: "CSS3" },
    { icon: "devicon-javascript-plain", name: "JavaScript" },
    { icon: "devicon-react-original", name: "React" },
    { icon: "devicon-nodejs-plain", name: "Node.js" },
    { icon: "devicon-express-original", name: "Express.js" },
    { icon: "devicon-mongodb-plain", name: "MongoDB" },
    { icon: "devicon-java-plain", name: "Java" },
    { icon: "devicon-c-plain", name: "C" },
    { icon: "devicon-cplusplus-plain", name: "C++" },
    { icon: "devicon-vscode-plain", name: "VS Code" },
    { icon: "devicon-git-plain", name: "Git" },
    { icon: "devicon-github-original", name: "GitHub" },
  ];

  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <i className={`${skill.icon} colored`}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
