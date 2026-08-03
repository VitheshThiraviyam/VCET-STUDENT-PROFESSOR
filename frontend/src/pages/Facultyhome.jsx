import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Facultyhome.css';

const Facultyhome = ({ faculty, setFaculty }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("faculty");
    setFaculty(null);
    navigate("/facultylogin");
  };

  return (
    <div className="faculty-home-container">

      <div className="faculty-home-header">
        <h2 className="faculty-home-title">
          Welcome {faculty?.name}
        </h2>
        <button className="faculty-home-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="faculty-home-cards">

        <div className="faculty-home-card">
          <h3>Manage Attendance</h3>
          <p>Mark and update student attendance</p>
          <button className="faculty-home-btn" onClick={() => navigate("/addattendance")}>Go</button>
        </div>

        <div className="faculty-home-card">
          <h3>Add Internal Marks</h3>
          <p>Enter and update student marks</p>
          <button className="faculty-home-btn" onClick={() => navigate("/addmarks")}>Go</button>
        </div>

        <div className="faculty-home-card">
          <h3>Add Announcement</h3>
          <p>Enter and add announcements</p>
          <button className="faculty-home-btn" onClick={() => navigate("/addannouncement")}>Go</button>
        </div>

      </div>

    </div>
  );
};

export default Facultyhome;