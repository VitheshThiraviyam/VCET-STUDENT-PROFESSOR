import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Studenthome.css';

const Studenthome = ({ student, setStudent }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("student");
    setStudent(null);
    navigate("/login");
  };

  return (
    <div className="student-home-container">

      <div className="student-home-header">
        <h2 className="student-home-title">
          Welcome {student?.name}
        </h2>
        <button className="student-home-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="student-home-cards">

        <div className="student-home-card">
          <h3>Internal Marks</h3>
          <p>View your subject marks</p>
          <button
            className="student-home-btn"
            onClick={() => navigate("/viewmarks")}
          >
            View Marks
          </button>
        </div>

        <div className="student-home-card">
          <h3>Attendance</h3>
          <p>Check your attendance percentage</p>
          <button
            className="student-home-btn"
            onClick={() => navigate("/viewattendance")}
          >
            View Attendance
          </button>
        </div>

        <div className="student-home-card">
          <h3>Mentor</h3>
          <p>View your mentor details</p>
          <button className="student-home-btn">
            View Mentor
          </button>
        </div>

      </div>

    </div>
  );
};

export default Studenthome;