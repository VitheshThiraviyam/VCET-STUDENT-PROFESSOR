import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Facultylogin.css';

const FacultyLogin = ({ setFaculty }) => {
  const [form, setForm] = useState({
    staffId: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/adminlogin",
        form
      );

      alert(res.data.message);

      if (res.data.faculty) {
        localStorage.setItem("faculty", JSON.stringify(res.data.faculty));
        setFaculty(res.data.faculty);
        navigate("/facultyhome");
      }

    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="faculty-login-container">
      <form className="faculty-login-form" onSubmit={handleSubmit}>
        <h2>Faculty Login</h2>

        <input
          type="text"
          name="staffId"
          placeholder="Enter Staff ID"
          value={form.staffId}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="faculty-login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default FacultyLogin;