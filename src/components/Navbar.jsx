import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">NETFLIX</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="buttons">
        <button className="signup">Sign up</button>
        <button className="login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;