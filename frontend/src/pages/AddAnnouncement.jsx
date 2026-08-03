import React, { useState } from 'react';
import axios from 'axios';
import './AddAnnouncement.css';

const API_URL = import.meta.env.VITE_API_URL;

const AddAnnouncement = () => {
  const faculty = JSON.parse(localStorage.getItem("faculty"));

  const [form, setForm] = useState({
    title: '',
    message: ''
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
        `${API_URL}/api/announcement/add`,
        {
          title: form.title,
          message: form.message,
          facultyName: faculty?.name
        }
      );

      alert(res.data.message);

      setForm({
        title: '',
        message: ''
      });

    } catch (error) {
      console.error(error);
      alert("Error adding announcement");
    }
  };

  return (
    <div className="ann-container">
      <form className="ann-form" onSubmit={handleSubmit}>
        <h2>Faculty Announcement</h2>

        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Enter Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Post Announcement
        </button>
      </form>
    </div>
  );
};

export default AddAnnouncement;