import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewAnnouncement.css';

const ViewAnnouncement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/announcement/view"
        );
        setAnnouncements(res.data);
      } catch {
        console.log("Error fetching announcements");
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="va-container">

      <h2 className="va-title">Announcements</h2>

      {announcements.length > 0 ? (
        <div className="va-list">
          {announcements.map((item) => (
            <div key={item._id} className="va-card">

              <h3 className="va-card-title">{item.title}</h3>

              <p className="va-card-message">{item.message}</p>

              <div className="va-footer">
                <span>By: {item.facultyName}</span>
                <span>
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <p className="va-empty">No announcements available</p>
      )}

    </div>
  );
};

export default ViewAnnouncement;