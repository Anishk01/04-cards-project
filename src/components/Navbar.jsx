import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Email</a>
      </div>

      <h2 style={{color:'white'}}>JOB PORTAL</h2>

      <div className="nav-right">
        <button className="contact-btn">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;