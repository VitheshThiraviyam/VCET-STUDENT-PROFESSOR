import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">

      <div className="hero">
        <h1>VCET Student - Professor System</h1>
        <p>
          A smart platform to manage students, professors, courses, attendance, and assignments efficiently.
        </p>

        <Link to="/login">
          <button className="get-started">Get Started</button>
        </Link>
      </div>

      <div className="features">

        <div className="card">
          <h3>Course Management</h3>
          <p>Create and manage courses easily</p>
        </div>

        <div className="card">
          <h3>Assignments</h3>
          <p>Upload, submit, and evaluate assignments</p>
        </div>

        <div className="card">
          <h3>Attendance</h3>
          <p>Track student attendance in real-time</p>
        </div>

        <div className="card">
          <h3>Professor Panel</h3>
          <p>Manage students, marks, and announcements</p>
        </div>

        <div className="card">
          <h3>Student Dashboard</h3>
          <p>View courses, marks, and updates</p>
        </div>

        <div className="card">
          <h3>Secure Login</h3>
          <p>Role-based authentication system</p>
        </div>

      </div>

    </div>
  );
};

export default Home;