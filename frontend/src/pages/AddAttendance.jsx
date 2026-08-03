import React, { useState } from 'react';
import axios from 'axios';
import './AddAttendance.css';

const API_URL = import.meta.env.VITE_API_URL;

const AddAttendance = () => {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    regNo: '',
    status: 'Present',
    date: today
  });

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
        `${API_URL}/api/attendance/add`,
        form
      );

      alert(res.data.message);

      setForm({
        regNo: '',
        status: 'Present',
        date: today
      });

    } catch (error) {
      alert("Error adding attendance");
    }
  };

  return (
    <div className="attendance-container">
      <form className="attendance-form" onSubmit={handleSubmit}>
        <h2>Add Attendance</h2>

        <input
          type="text"
          name="regNo"
          placeholder="Register Number"
          value={form.regNo}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          min={today}
          onChange={handleChange}
          required
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="Leave">Leave</option>
          <option value="OD">OD</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAttendance;