import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import vcet_logo from '../assets/vcet_logo.jpg'
const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="logo">
        <img src={vcet_logo} alt='Logo'></img>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/assignments">Assignments</Link></li>
      </ul>

      <div className="nav-buttons">
        <Link to="/login">
          <button className="btn login">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn register">Register</button>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;