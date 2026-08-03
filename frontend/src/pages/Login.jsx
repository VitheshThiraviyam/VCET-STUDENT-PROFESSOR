import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const API_URL = import.meta.env.VITE_API_URL;

const Login = ({ setStudent }) => {
  const [form, setForm] = useState({
    regNo: '',
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
        `${API_URL}/api/auth/login`,
        form
      );

      alert(res.data.message);

      if (res.data.student) {
        localStorage.setItem("student", JSON.stringify(res.data.student));
        setStudent(res.data.student);
        navigate("/studenthome");
      }

    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="text"
          name="regNo"
          placeholder="Enter your Register Number"
          value={form.regNo}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;