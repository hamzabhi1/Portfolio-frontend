import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      
      <div className="nav-container">

        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Hamza Dev</h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* MOBILE BUTTON */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/skills">Skills</Link>
          <Link onClick={() => setOpen(false)} to="/services">Services</Link>
          <Link onClick={() => setOpen(false)} to="/projects">Projects</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;