import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewAttendance.css';

const API_URL = import.meta.env.VITE_API_URL;

const ViewAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const student = JSON.parse(localStorage.getItem("student"));

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/api/attendance/view?regNo=${student.regNo}`
        );
        setAttendanceData(res.data);
      } catch (error) {
        console.log("Error fetching attendance", error);
      }
    };

    if (student) fetchAttendance();
  }, []);

  const total = attendanceData.length;

  const presentCount = attendanceData.filter(
    (item) => item.status === "Present" || item.status === "OD"
  ).length;

  const percentage =
    total > 0 ? ((presentCount / total) * 100).toFixed(2) : 0;

  return (
    <div className="va-container">
      <h2 className="va-title">Attendance Details</h2>

      <div className="va-percentage-box">
        Attendance Percentage: <b>{percentage}%</b>
      </div>

      <div className="va-table-wrapper">
        <table className="va-table">
          <thead className="va-thead">
            <tr className="va-head-row">
              <th className="va-th">Date</th>
              <th className="va-th">Status</th>
            </tr>
          </thead>

          <tbody className="va-tbody">
            {attendanceData.length > 0 ? (
              attendanceData.map((item, index) => (
                <tr key={index} className="va-row">
                  <td className="va-td">{item.date}</td>
                  <td className={`va-status va-${item.status.toLowerCase()}`}>
                    {item.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="va-empty-row">
                <td className="va-empty" colSpan="2">
                  No attendance data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAttendance;