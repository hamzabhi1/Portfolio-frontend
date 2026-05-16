import React from "react";
import "./Services.css";
import Navbar from "../components/Navbar";

const services = [
  {
    title: "Website Development",
    desc: "I build modern, fast and fully responsive websites for businesses, portfolios and startups.",
  },
  {
    title: "Frontend Development",
    desc: "Clean and attractive user interfaces that work smoothly on all devices and browsers.",
  },
  {
    title: "Backend Development",
    desc: "Secure server-side development for handling data, users and application logic.",
  },
  {
    title: "Full Stack Web App",
    desc: "Complete web applications with frontend, backend and database fully connected.",
  },
  {
    title: "API Integration",
    desc: "Connecting third-party services, APIs and external tools into your web application.",
  },
  {
    title: "Website Fix & Improvement",
    desc: "Fixing bugs, improving speed, layout issues and upgrading existing websites.",
  }
];

const Services = () => {
  return (
    <section className="services">
      <Navbar />
      <div className="services-container">

        <div className="services-header">
          <h2>Services I Offer</h2>
          <p>Simple, clear and effective solutions for your business or personal website</p>
        </div>

        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;