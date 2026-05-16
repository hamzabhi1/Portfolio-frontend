import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="left-section">
          <h1>Hamza Dev</h1>
          <p>
            MERN Stack Developer creating modern and responsive web applications
          </p>
        </div>

        <div className="centre-section">
          <a
            href="https://github.com/hamzabhi1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/hamza-software-engineer-b109ba407"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/923254723073"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

      </div>

      <div className="bottom-section">
        <p>&copy; 2026 Hamza Dev Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer