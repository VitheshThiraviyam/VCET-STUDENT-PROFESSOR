import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Viewmarks.css';

const ViewMarks = () => {
  const [marksData, setMarksData] = useState([]);
  const student = JSON.parse(localStorage.getItem("student"));

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/marks/view?regNo=${student.regNo}`
        );
        setMarksData(res.data);
      } catch {
        console.log("Error fetching marks");
      }
    };

    if (student) {
      fetchMarks();
    }
  }, []);

  const groupedBySemester = marksData.reduce((acc, item) => {
    if (!acc[item.semester]) {
      acc[item.semester] = [];
    }
    acc[item.semester].push(item);
    return acc;
  }, {});

  return (
    <div className="vm-container">

      <h2 className="vm-title">Internal Marks</h2>

      {Object.keys(groupedBySemester).length > 0 ? (
        Object.keys(groupedBySemester).map((sem) => (
          <div key={sem} className="vm-sem-block">

            <h3 className="vm-sem-title">Semester {sem}</h3>

            <table className="vm-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>IAT</th>
                  <th>Marks</th>
                </tr>
              </thead>

              <tbody>
                {groupedBySemester[sem].map((item, index) => (
                  <tr key={index}>
                    <td>{item.subject}</td>
                    <td>IAT {item.iat}</td>
                    <td className={item.marks < 40 ? "vm-low" : "vm-high"}>
                      {item.marks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        ))
      ) : (
        <p className="vm-empty">No marks available</p>
      )}

    </div>
  );
};

export default ViewMarks;