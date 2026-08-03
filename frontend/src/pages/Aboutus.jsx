import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="college-container">

      <div className="college-card">

        <h1 className="college-title">
          Velammal College of Engineering and Technology (VCET)
        </h1>

        <p className="college-text">
          Velammal College of Engineering and Technology (VCET), located in Madurai,
          is a reputed engineering institution established with the vision of providing
          quality technical education and developing skilled professionals for the
          modern industry.
        </p>

        <p className="college-text">
          The college is affiliated with Anna University and is approved by AICTE.
          It offers various undergraduate and postgraduate programs in engineering,
          technology, and management.
        </p>

        <div className="college-section">

          <h2>Key Highlights</h2>

          <ul>
            <li>Strong academic curriculum under Anna University</li>
            <li>Well-equipped laboratories and smart classrooms</li>
            <li>Experienced faculty members</li>
            <li>Good placement training and career guidance</li>
            <li>Focus on innovation, research, and development</li>
          </ul>

        </div>

        <div className="college-section">

          <h2>Departments</h2>

          <ul>
            <li>Computer Science and Engineering</li>
            <li>Information Technology</li>
            <li>Electronics and Communication Engineering</li>
            <li>Electrical and Electronics Engineering</li>
            <li>Mechanical Engineering</li>
            <li>Civil Engineering</li>
          </ul>

        </div>

        <div className="college-footer">
          <p>
            📍 Madurai, Tamil Nadu, India
          </p>
          <p>
            🎓 Affiliated to Anna University
          </p>
        </div>

      </div>

    </div>
  );
};

export default Aboutus;