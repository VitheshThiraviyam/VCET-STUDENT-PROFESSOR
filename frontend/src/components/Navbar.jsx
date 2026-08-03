import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import vcet_logo from '../assets/vcet_logo.jpg';

const Navbar = ({ student, faculty }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={vcet_logo} alt="Logo" />
      </div>

      {!student && !faculty && (
        <>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/announcement">Announcements</Link></li>
          </ul>

          <div className="nav-buttons">
            <Link to="/login">
              <button className="btn login">Student Login</button>
            </Link>
            <Link to="/facultylogin">
              <button className="btn register">Faculty Login</button>
            </Link>
          </div>
        </>
      )}

      {student && (
        <ul className="nav-links">
          <li><Link to="/studenthome">Home</Link></li>
          <li><Link to="/viewattendance">Attendance</Link></li>
          <li><Link to="/announcement">Announcements</Link></li>
        </ul>
      )}

      {faculty && (
        <ul className="nav-links">
          <li><Link to="/facultyhome">Home</Link></li>
          <li><Link to="/addattendance">Attendance</Link></li>
          <li><Link to="/addmarks">Marks</Link></li>
        </ul>
      )}

    </nav>
  );
};

export default Navbar;