import React from "react";
import "./Skills.css";
import Navbar from "../components/Navbar";

const skillsData = [
  {
    title: "Frontend Development",
    desc: "Building responsive, fast and modern user interfaces with clean component-based architecture.",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    title: "Backend Development",
    desc: "Creating scalable server-side applications with secure APIs and efficient architecture.",
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    title: "Database Management",
    desc: "Handling structured and unstructured data with optimized queries and secure storage.",
    skills: ["MongoDB", "Mongoose", "Data Modeling"]
  },
  {
    title: "Full Stack Integration",
    desc: "Connecting frontend and backend smoothly for complete end-to-end web applications.",
    skills: ["MERN Stack", "API Integration", "Authentication"]
  }
];

const Skills = () => {
  return (
    <section className="skills">
      <Navbar />
      <div className="skills-container">

        <div className="skills-header">
          <h2>My Expertise</h2>
          <p>Full Stack Developer focused on MERN (Frontend + Backend + Database)</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((item, index) => (
            <div className="skill-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div className="skill-tags">
                {item.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;