import React from 'react'
import './About.css'
import aboutImg from '../assets/about.jpg'
import Navbar from '../components/Navbar'

const About = () => {
  return (
  
    <section className="about">
      <Navbar />
      <div className="about-container">

        {/* IMAGE */}
        <div className="about-image">
          <img src={aboutImg} alt="About" />
        </div>

        {/* CONTENT */}
        <div className="about-content">

          <span className="about-tag">About Me</span>

          <h1>
            MERN Stack Developer &
            <span>Experiences</span>
          </h1>

          <p>
             I'm Hamza, a passionate MERN Stack Developer focused on building
    high-performance, scalable and visually engaging web applications.
    I enjoy transforming creative ideas into real-world digital
    experiences that are fast, responsive and user-friendly.
          </p>

          <div className="about-cards">

            <div className="about-card">
              <h2>1+</h2>
              <p>Years Experience</p>
            </div>

            <div className="about-card">
              <h2>5+</h2>
              <p>Projects Completed</p>
            </div>

            <div className="about-card">
              <h2>10+</h2>
              <p>Modern Technologies</p>
            </div>

          </div>

          <button className="about-btn">
            Download CV
          </button>

        </div>

      </div>

    </section>
  )
}

export default About