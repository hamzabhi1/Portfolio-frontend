import React from 'react'
import './Hero.css'
import heroImage from '../assets/hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-section">

        <div className="left-section">
          <p className="hero-subtitle">Welcome to My Portfolio</p>

          <h1 className="hero-title">Hamza Dev</h1>

          <h2 className="hero-mini">MERN Stack Developer</h2>

          <p className="hero-description">
            I build modern, responsive and scalable full-stack web applications
            using React, Node.js and MongoDB.
          </p>

          <div className="hero-buttons">
            <Link to="/projects">
            <button className="btn primary-btn">View Projects</button>
            </Link>
           <Link to="/contact">
            <button className="btn secondary-btn">Contact Me</button>
            </Link>
          </div>
        </div>

        <div className="right-section">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>

      </div>
    </section>
  )
}

export default Hero