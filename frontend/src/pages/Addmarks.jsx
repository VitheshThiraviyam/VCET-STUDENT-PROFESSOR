import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Addmarks.css';

const API_URL = import.meta.env.VITE_API_URL;

const AddMarks = () => {
  const [form, setForm] = useState({
    regNo: '',
    semester: '',
    iat: '1',
    subject: '',
    marks: ''
  });

  const [marksData, setMarksData] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchMarks = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/marks/all`);
      setMarksData(res.data);
    } catch (error) {
      console.log("Error fetching marks", error);
    }
  };

  useEffect(() => {
    fetchMarks();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setForm({
      regNo: '',
      semester: '',
      iat: '1',
      subject: '',
      marks: ''
    });
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (editId) {
        res = await axios.put(
          `${API_URL}/api/marks/update/${editId}`,
          form
        );
      } else {
        res = await axios.post(
          `${API_URL}/api/marks/add`,
          form
        );
      }

      alert(res.data.message);

      resetForm();
      fetchMarks();

    } catch (error) {
      console.log(error);
      alert("Error saving marks");
    }
  };

  const handleEdit = (item) => {
    setForm({
      regNo: item.regNo,
      semester: item.semester,
      iat: item.iat,
      subject: item.subject,
      marks: item.marks
    });

    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure to delete?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/api/marks/delete/${id}`);
      fetchMarks();
    } catch (error) {
      console.log(error);
      alert("Error deleting");
    }
  };

  return (
    <div className="am-container">

      <form className="am-form" onSubmit={handleSubmit}>
        <h2 className="am-title">
          {editId ? "Editing Marks ✏️" : "Add Internal Marks"}
        </h2>

        <input
          type="text"
          name="regNo"
          placeholder="Register Number"
          value={form.regNo}
          onChange={handleChange}
          disabled={editId}
          required
        />

        <select
          name="semester"
          value={form.semester}
          onChange={handleChange}
          required
        >
          <option value="">Select Semester</option>
          <option value="1">Sem 1</option>
          <option value="2">Sem 2</option>
          <option value="3">Sem 3</option>
          <option value="4">Sem 4</option>
          <option value="5">Sem 5</option>
          <option value="6">Sem 6</option>
          <option value="7">Sem 7</option>
          <option value="8">Sem 8</option>
        </select>

        <select
          name="iat"
          value={form.iat}
          onChange={handleChange}
        >
          <option value="1">IAT 1</option>
          <option value="2">IAT 2</option>
          <option value="3">IAT 3</option>
        </select>

        <input
          type="text"
          name="subject"
          placeholder="Subject Name"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="marks"
          placeholder="Marks"
          value={form.marks}
          onChange={handleChange}
          required
        />

        <button type="submit" className="am-btn">
          {editId ? "Update Marks" : "Add Marks"}
        </button>

        {editId && (
          <button
            type="button"
            className="am-cancel-btn"
            onClick={resetForm}
          >
            Cancel Edit
          </button>
        )}
      </form>

      <div className="am-table-container">
        <h2>All Marks</h2>

        <table className="am-table">
          <thead>
            <tr>
              <th>RegNo</th>
              <th>Sem</th>
              <th>IAT</th>
              <th>Subject</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {marksData.length > 0 ? (
              marksData.map((item) => (
                <tr key={item._id}>
                  <td>{item.regNo}</td>
                  <td>{item.semester}</td>
                  <td>{item.iat}</td>
                  <td>{item.subject}</td>
                  <td>{item.marks}</td>
                  <td>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AddMarks;